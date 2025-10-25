"use client"

import { toast } from "sonner"
import { z } from "zod"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldContent } from "@/components/ui/field"
import {
  FormLabel,
  FormMessage,
  useForm,
} from "@/registry/nowts/ui/tanstack-form"

const accountSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

export default function TanstackFormDemo() {
  const form = useForm({
    schema: accountSchema,
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success("Account created successfully!")
      console.log(values)
    },
  })

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Create Account</CardTitle>
        <CardDescription>TanStack Form with Zod validation</CardDescription>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
          }}
          className="space-y-4"
        >
          <form.AppField name="email">
            {(field) => (
              <Field>
                <FormLabel>Email</FormLabel>
                <FieldContent>
                  <field.Input type="email" placeholder="you@example.com" />
                  <FormMessage />
                </FieldContent>
              </Field>
            )}
          </form.AppField>

          <form.AppField name="password">
            {(field) => (
              <Field>
                <FormLabel>Password</FormLabel>
                <FieldContent>
                  <field.Input type="password" placeholder="••••••••" />
                  <FormMessage />
                </FieldContent>
              </Field>
            )}
          </form.AppField>

          <form.AppForm>
            <form.SubmitButton className="w-full">
              Create Account
            </form.SubmitButton>
          </form.AppForm>
        </form>
      </CardContent>
    </Card>
  )
}
