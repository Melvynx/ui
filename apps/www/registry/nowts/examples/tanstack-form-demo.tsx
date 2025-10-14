"use client"

import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  getInputFieldProps,
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
        <Form form={form} className="space-y-4">
          <FormField form={form} name="email">
            {(field) => (
              <FormItem field={field} form={form}>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...getInputFieldProps(field)}
                    type="email"
                    placeholder="you@example.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          </FormField>

          <FormField form={form} name="password">
            {(field) => (
              <FormItem field={field} form={form}>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...getInputFieldProps(field)}
                    type="password"
                    placeholder="••••••••"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          </FormField>

          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </Form>
      </CardContent>
    </Card>
  )
}
