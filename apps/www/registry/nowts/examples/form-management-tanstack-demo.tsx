"use client"

import { toast } from "sonner"
import { z } from "zod"

import { Card } from "@/components/ui/card"
import { FormManagement } from "@/registry/nowts/blocks/form-management-tanstack/form-management"
import { FormManagementStickyBar } from "@/registry/nowts/blocks/form-management-tanstack/form-management-sticky-bar"
import { useForm } from "@/registry/nowts/ui/tanstack-form"

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
          <form.AppField name="name">
            {(field) => (
              <field.Field>
                <field.Label>Name</field.Label>
                <field.Content>
                  <field.Input placeholder="Enter your name" />
                  <field.Message />
                </field.Content>
              </field.Field>
            )}
          </form.AppField>

          <form.AppField name="email">
            {(field) => (
              <field.Field>
                <field.Label>Email</field.Label>
                <field.Content>
                  <field.Input type="email" placeholder="Enter your email" />
                  <field.Message />
                </field.Content>
              </field.Field>
            )}
          </form.AppField>

          <form.AppField name="bio">
            {(field) => (
              <field.Field>
                <field.Label>Bio</field.Label>
                <field.Content>
                  <field.Textarea
                    placeholder="Tell us about yourself"
                    rows={3}
                  />
                  <field.Description>
                    Maximum 200 characters ({field.state.value?.length || 0}
                    /200)
                  </field.Description>
                  <field.Message />
                </field.Content>
              </field.Field>
            )}
          </form.AppField>
        </div>

        <FormManagementStickyBar />
      </FormManagement>
    </Card>
  )
}
