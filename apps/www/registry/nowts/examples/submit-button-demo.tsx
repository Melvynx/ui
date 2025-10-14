"use client"

import { toast } from "sonner"
import { z } from "zod"

import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ExtendedForm, useZodForm } from "@/registry/nowts/ui/extended-form"
import { LoadingButton } from "@/registry/nowts/ui/submit-button"

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export default function SubmitButtonDemo() {
  const form = useZodForm({
    schema: formSchema,
    defaultValues: {
      email: "",
      message: "",
    },
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    toast.success("Form submitted successfully!")
    console.log(data)
    form.reset()
  }

  return (
    <Card className="p-6">
      <ExtendedForm form={form} onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            {...form.register("email")}
          />
          {form.formState.errors.email && (
            <p className="text-destructive text-sm">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Input
            id="message"
            placeholder="Type your message here..."
            {...form.register("message")}
          />
          {form.formState.errors.message && (
            <p className="text-destructive text-sm">
              {form.formState.errors.message.message}
            </p>
          )}
        </div>

        <LoadingButton
          type="submit"
          className="w-full"
          loading={form.formState.isSubmitting}
        >
          Submit Form
        </LoadingButton>
      </ExtendedForm>
    </Card>
  )
}
