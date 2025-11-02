/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import type * as React from "react"
import {
  createFormHook,
  createFormHookContexts,
  useStore,
} from "@tanstack/react-form"
import type { z } from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

export const { fieldContext, useFieldContext, formContext, useFormContext } =
  createFormHookContexts()

export function SubmitButton(props: React.ComponentProps<typeof Button>) {
  const form = useFormContext()
  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => (
        <Button type="submit" disabled={isSubmitting} {...props} />
      )}
    </form.Subscribe>
  )
}

function FormInput(props: React.ComponentProps<typeof Input>) {
  const field = useFieldContext<string>()

  return (
    <Input
      id={field.name}
      name={field.name}
      value={field.state.value}
      placeholder={props.placeholder}
      onBlur={field.handleBlur}
      onChange={(e) => field.handleChange(e.target.value)}
      {...props}
    />
  )
}

function FormSelect(props: React.ComponentProps<typeof Select>) {
  const field = useFieldContext<string>()
  return (
    <Select
      name={field.name}
      value={field.state.value}
      onValueChange={(value) => field.handleChange(value)}
      {...props}
    />
  )
}

function FormTextarea(props: React.ComponentProps<typeof Textarea>) {
  const field = useFieldContext<string>()
  return (
    <Textarea
      id={field.name}
      name={field.name}
      value={field.state.value}
      placeholder={props.placeholder}
      onBlur={field.handleBlur}
      onChange={(e) => field.handleChange(e.target.value)}
      {...props}
    />
  )
}

function FormCheckbox(props: React.ComponentProps<typeof Checkbox>) {
  const field = useFieldContext<boolean>()
  return (
    <Checkbox
      id={field.name}
      name={field.name}
      checked={Boolean(field.state.value)}
      onCheckedChange={(checked) => field.handleChange(Boolean(checked))}
      {...props}
    />
  )
}

function FormSwitch(props: React.ComponentProps<typeof Switch>) {
  const field = useFieldContext<boolean>()
  return (
    <Switch
      id={field.name}
      name={field.name}
      checked={Boolean(field.state.value)}
      onCheckedChange={(checked) => field.handleChange(Boolean(checked))}
      {...props}
    />
  )
}

export const { useAppForm } = createFormHook({
  fieldComponents: {
    Input: FormInput,
    Select: FormSelect,
    Textarea: FormTextarea,
    Checkbox: FormCheckbox,
    Switch: FormSwitch,
  },
  formComponents: {
    SubmitButton: SubmitButton,
  },
  fieldContext,
  formContext,
})

/**
 * Hook to create a TanStack form with Zod validation
 * Returns a type-safe FormApi with inferred form data type
 *
 * @example
 * const form = useForm({
 *   schema: z.object({ email: z.string().email() }),
 *   defaultValues: { email: '' },
 *   onSubmit: async (values) => console.log(values),
 * })
 * // form is typed as FormApi<{ email: string }>
 */
export function useForm<TSchema extends z.ZodType>({
  schema,
  defaultValues,
  onSubmit,
  validationMode = "onBlur",
}: {
  schema: TSchema
  defaultValues: z.infer<TSchema>
  onSubmit: (values: z.infer<TSchema>) => void | Promise<void>
  validationMode?: "onChange" | "onBlur" | "onSubmit"
}) {
  return useAppForm({
    defaultValues,
    validators: {
      [validationMode]: schema,
    },
    onSubmit: async ({ value }) => {
      await onSubmit(value as z.infer<TSchema>)
    },
  })
}

/**
 * Form wrapper component that provides form context and handles submission
 *
 * @example
 * <Form form={form}>
 *   <FormField form={form} name="email">
 *     {(field) => (
 *       <FormItem field={field}>
 *         <FormLabel>Email</FormLabel>
 *         <FormControl>
 *           <Input
 *             value={field.state.value}
 *             onChange={(e) => field.handleChange(e.target.value)}
 *             onBlur={field.handleBlur}
 *           />
 *         </FormControl>
 *         <FormMessage />
 *       </FormItem>
 *     )}
 *   </FormField>
 * </Form>
 */
export function Form({
  children,
  form,
  ...props
}: {
  children: React.ReactNode
  form: ReturnType<typeof useForm<any>>
} & Omit<React.ComponentProps<"form">, "onSubmit">) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        void form.handleSubmit()
      }}
      {...props}
    >
      {children}
    </form>
  )
}

export function FormLabel(props: React.ComponentProps<typeof FieldLabel>) {
  const field = useFieldContext<string>()

  return <FieldLabel htmlFor={field.name} {...props} />
}

/**
 * Description text for form field - uses FieldDescription with TanStack Form integration
 */
export function FormDescription({
  className,
  ...props
}: React.ComponentProps<typeof FieldDescription>) {
  const field = useFieldContext<string>()

  return (
    <FieldDescription
      id={`${field.name}-form-item-description`}
      className={className}
      {...props}
    />
  )
}

/**
 * Error message for form field - uses FieldError with TanStack Form integration
 */
export function FormMessage({
  className,
  children,
  ...props
}: React.ComponentProps<typeof FieldError>) {
  const field = useFieldContext()
  const errors = useStore(field.store, (state) => state.meta.errors)
  const hasSubmitted = field.form.state.submissionAttempts > 0
  const shouldShowError =
    hasSubmitted &&
    field.state.meta.isTouched &&
    field.state.meta.errors.length > 0

  if (!shouldShowError && !children) {
    return null
  }

  return (
    <FieldError
      id={`${field.name}-form-item-message`}
      errors={errors}
      className={className}
      {...props}
    >
      {errors.map((error) => (
        <div
          key={typeof error === "string" ? error : error.message}
          className="mt-1 font-bold text-red-500"
        >
          {typeof error === "string" ? error : error.message}
        </div>
      ))}
    </FieldError>
  )
}

/**
 * Re-export Field components for direct use in custom layouts
 * These can be used when you need more control over the form layout
 * and don't need the TanStack Form context integration
 *
 * @example
 * // Direct usage without context
 * <FormField form={form} name="email">
 *   {(field) => {
 *     const { isInvalid } = getFieldState(field, form)
 *     return (
 *       <Field data-invalid={isInvalid} orientation="horizontal">
 *         <FieldLabel htmlFor="email">Email</FieldLabel>
 *         <FieldContent>
 *           <Input {...getInputFieldProps(field)} id="email" />
 *           <FieldDescription>Enter your email address</FieldDescription>
 *           <FieldError errors={field.state.meta.errors} />
 *         </FieldContent>
 *       </Field>
 *     )
 *   }}
 * </FormField>
 */
export {
  Field,
  FieldContent,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
}
