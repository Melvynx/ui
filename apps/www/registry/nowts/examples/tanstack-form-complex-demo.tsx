"use client"

import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  getCheckboxFieldProps,
  getInputFieldProps,
  getSelectFieldProps,
  getSwitchFieldProps,
  getTextareaFieldProps,
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
      role: undefined,
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
      <Form form={form} className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Create Account</h3>
          <p className="text-muted-foreground text-sm">
            Fill out the form below to create your account
          </p>
        </div>

        <FormField form={form} name="name">
          {(field) => (
            <FormItem field={field} form={form}>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input {...getInputFieldProps(field)} placeholder="John Doe" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        </FormField>

        <FormField form={form} name="email">
          {(field) => (
            <FormItem field={field} form={form}>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  {...getInputFieldProps(field)}
                  type="email"
                  placeholder="john@example.com"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        </FormField>

        <FormField form={form} name="role">
          {(field) => (
            <FormItem field={field} form={form}>
              <FormLabel>Role</FormLabel>
              <FormControl>
                <Select {...getSelectFieldProps(field)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="developer">Developer</SelectItem>
                    <SelectItem value="designer">Designer</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                Choose the role that best describes you
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        </FormField>

        <FormField form={form} name="bio">
          {(field) => (
            <FormItem field={field} form={form}>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  {...getTextareaFieldProps(field)}
                  placeholder="Tell us about yourself..."
                  rows={4}
                />
              </FormControl>
              <FormDescription>
                Write a short bio (10-200 characters)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        </FormField>

        <FormField form={form} name="newsletter">
          {(field) => (
            <FormItem field={field} form={form}>
              <div className="flex items-start gap-3">
                <FormControl>
                  <Checkbox {...getCheckboxFieldProps(field)} id="newsletter" />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel htmlFor="newsletter" className="font-normal">
                    Subscribe to newsletter
                  </FormLabel>
                  <FormDescription>
                    Receive weekly updates about new features
                  </FormDescription>
                </div>
              </div>
              <FormMessage />
            </FormItem>
          )}
        </FormField>

        <FormField form={form} name="notifications">
          {(field) => (
            <FormItem field={field} form={form}>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel>Push Notifications</FormLabel>
                  <FormDescription>
                    Receive push notifications about account activity
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch {...getSwitchFieldProps(field)} />
                </FormControl>
              </div>
            </FormItem>
          )}
        </FormField>

        <FormField form={form} name="terms">
          {(field) => (
            <FormItem field={field} form={form}>
              <div className="flex items-start gap-3">
                <FormControl>
                  <Checkbox {...getCheckboxFieldProps(field)} id="terms" />
                </FormControl>
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
            </FormItem>
          )}
        </FormField>

        <Button
          type="submit"
          disabled={form.state.isSubmitting}
          className="w-full"
        >
          {form.state.isSubmitting ? "Creating account..." : "Create Account"}
        </Button>
      </Form>
    </Card>
  )
}
