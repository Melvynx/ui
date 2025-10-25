"use client"

import { toast } from "sonner"
import { z } from "zod"

import { Card } from "@/components/ui/card"
import { Field, FieldContent } from "@/components/ui/field"
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import {
  FormDescription,
  FormLabel,
  FormMessage,
  useForm,
} from "@/registry/nowts/ui/tanstack-form"

const registrationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  role: z.enum(["developer", "designer", "manager"], {
    required_error: "Please select a role",
  }),
  bio: z
    .string()
    .min(10, "Bio must be at least 10 characters")
    .max(200, "Bio must be at most 200 characters"),
  newsletter: z.boolean(),
  notifications: z.boolean(),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
})

export default function TanstackFormComplexDemo() {
  const form = useForm({
    schema: registrationSchema,
    defaultValues: {
      name: "",
      email: "",
      role: "developer" as const,
      bio: "",
      newsletter: false,
      notifications: true,
      terms: false,
    },
    onSubmit: async (values) => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success("Registration successful!", {
        description: `Welcome, ${values.name}!`,
      })
      console.log(values)
    },
  })

  return (
    <Card className="mx-auto w-full max-w-2xl p-6">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
        className="space-y-6"
      >
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Create Account</h3>
          <p className="text-muted-foreground text-sm">
            Fill out the form below to create your account
          </p>
        </div>

        <form.AppField name="name">
          {(field) => (
            <Field>
              <FormLabel>Full Name</FormLabel>
              <FieldContent>
                <field.Input placeholder="John Doe" />
                <FormMessage />
              </FieldContent>
            </Field>
          )}
        </form.AppField>

        <form.AppField name="email">
          {(field) => (
            <Field>
              <FormLabel>Email Address</FormLabel>
              <FieldContent>
                <field.Input type="email" placeholder="john@example.com" />
                <FormMessage />
              </FieldContent>
            </Field>
          )}
        </form.AppField>

        <form.AppField name="role">
          {(field) => (
            <Field>
              <FormLabel>Role</FormLabel>
              <FieldContent>
                <field.Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="developer">Developer</SelectItem>
                    <SelectItem value="designer">Designer</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                  </SelectContent>
                </field.Select>
                <FormDescription>
                  Choose the role that best describes you
                </FormDescription>
                <FormMessage />
              </FieldContent>
            </Field>
          )}
        </form.AppField>

        <form.AppField name="bio">
          {(field) => (
            <Field>
              <FormLabel>Bio</FormLabel>
              <FieldContent>
                <field.Textarea
                  placeholder="Tell us about yourself..."
                  rows={4}
                />
                <FormDescription>
                  Write a short bio (10-200 characters)
                </FormDescription>
                <FormMessage />
              </FieldContent>
            </Field>
          )}
        </form.AppField>

        <form.AppField name="newsletter">
          {(field) => (
            <div className="flex items-start gap-3">
              <field.Checkbox id="newsletter" />
              <div className="space-y-1 leading-none">
                <FormLabel htmlFor="newsletter" className="font-normal">
                  Subscribe to newsletter
                </FormLabel>
                <FormDescription>
                  Receive weekly updates about new features
                </FormDescription>
                <FormMessage />
              </div>
            </div>
          )}
        </form.AppField>

        <form.AppField name="notifications">
          {(field) => (
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel>Push Notifications</FormLabel>
                <FormDescription>
                  Receive push notifications about account activity
                </FormDescription>
              </div>
              <Switch
                checked={Boolean(field.state.value)}
                onCheckedChange={(checked) =>
                  field.handleChange(Boolean(checked))
                }
              />
            </div>
          )}
        </form.AppField>

        <form.AppField name="terms">
          {(field) => (
            <div className="flex items-start gap-3">
              <field.Checkbox id="terms" />
              <div className="space-y-1 leading-none">
                <FormLabel htmlFor="terms" className="font-normal">
                  I accept the terms and conditions
                </FormLabel>
                <FormDescription>
                  You agree to our Terms of Service and Privacy Policy
                </FormDescription>
                <FormMessage />
              </div>
            </div>
          )}
        </form.AppField>

        <form.AppForm>
          <form.SubmitButton className="w-full">
            {form.state.isSubmitting ? "Creating account..." : "Create Account"}
          </form.SubmitButton>
        </form.AppForm>
      </form>
    </Card>
  )
}
