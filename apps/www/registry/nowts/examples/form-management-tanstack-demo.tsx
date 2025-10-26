"use client"

import { toast } from "sonner"
import { z } from "zod"

import { Card } from "@/components/ui/card"
import { FormManagement } from "@/registry/nowts/blocks/form-management-tanstack/form-management"
import { FormManagementStickyBar } from "@/registry/nowts/blocks/form-management-tanstack/form-management-sticky-bar"
import {
  FormDescription,
  FormLabel,
  FormMessage,
  useForm,
} from "@/registry/nowts/ui/tanstack-form"

const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  bio: z.string().max(200, "Bio must be less than 200 characters"),
})

export default function FormManagementTanstackDemo() {
  const form = useForm({
    schema: profileSchema,
    defaultValues: {
      name: "John Doe",
      email: "john@example.com",
      bio: "Full-stack developer passionate about building great products",
    },
    onSubmit: async (values) => {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      toast.success("Profile saved successfully!")
      form.reset()
    },
  })

  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">
          Form Management with TanStack Form
        </h3>
        <p className="text-muted-foreground text-sm">
          Edit and see the sticky save bar appear (CMD+S to save)
        </p>
      </div>

      <FormManagement form={form}>
        <div className="space-y-4">
          <form.Field name="name">
            {(field) => (
              <div className="space-y-2">
                <FormLabel>Name</FormLabel>
                <form.FieldComponents.Input placeholder="Enter your name" />
                <FormMessage />
              </div>
            )}
          </form.Field>

          <form.Field name="email">
            {(field) => (
              <div className="space-y-2">
                <FormLabel>Email</FormLabel>
                <form.FieldComponents.Input
                  type="email"
                  placeholder="Enter your email"
                />
                <FormMessage />
              </div>
            )}
          </form.Field>

          <form.Field name="bio">
            {(field) => (
              <div className="space-y-2">
                <FormLabel>Bio</FormLabel>
                <form.FieldComponents.Textarea
                  placeholder="Tell us about yourself"
                  rows={3}
                />
                <FormDescription>
                  Maximum 200 characters ({field.state.value?.length || 0}/200)
                </FormDescription>
                <FormMessage />
              </div>
            )}
          </form.Field>
        </div>

        <FormManagementStickyBar />
      </FormManagement>
    </Card>
  )
}
