"use client"

import { toast } from "sonner"
import { z } from "zod"

import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FormManagement } from "@/registry/nowts/blocks/form-management/form-management"
import { FormAutoSaveStickyBar } from "@/registry/nowts/blocks/form-management/form-management-sticky-bar"
import { useZodForm } from "@/registry/nowts/ui/extended-form"

const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  bio: z.string().max(200, "Bio must be less than 200 characters"),
})

export default function FormManagementDemo() {
  const form = useZodForm({
    schema: profileSchema,
    defaultValues: {
      name: "John Doe",
      email: "john@example.com",
      bio: "Full-stack developer passionate about building great products",
    },
  })

  const onSubmit = async (data: z.infer<typeof profileSchema>) => {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    toast.success("Profile saved successfully!")
    form.reset(data)
  }

  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Form Management</h3>
        <p className="text-muted-foreground text-sm">
          Edit and see the sticky save bar appear (CMD+S to save)
        </p>
      </div>

      <FormManagement form={form} onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" {...form.register("name")} />
          {form.formState.errors.name && (
            <p className="text-destructive text-sm">
              {form.formState.errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...form.register("email")} />
          {form.formState.errors.email && (
            <p className="text-destructive text-sm">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            {...form.register("bio")}
            placeholder="Tell us about yourself"
            rows={3}
          />
          {form.formState.errors.bio && (
            <p className="text-destructive text-sm">
              {form.formState.errors.bio.message}
            </p>
          )}
        </div>

        <FormAutoSaveStickyBar />
      </FormManagement>
    </Card>
  )
}
