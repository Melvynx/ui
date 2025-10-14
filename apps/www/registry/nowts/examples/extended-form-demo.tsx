"use client"

import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ExtendedForm, useZodForm } from "@/registry/nowts/ui/extended-form"

const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  username: z.string().min(3, "Username must be at least 3 characters"),
  bio: z.string().max(160, "Bio must be less than 160 characters"),
})

export default function ExtendedFormDemo() {
  const form = useZodForm({
    schema: profileSchema,
    defaultValues: {
      name: "Melvyn Malherbe",
      username: "melvynx",
      bio: "Full-stack developer passionate about building great products",
    },
  })

  const onSubmit = async (data: z.infer<typeof profileSchema>) => {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    toast.success("Profile updated successfully!")
    console.log(data)
  }

  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Edit Profile</h3>
        <p className="text-muted-foreground text-sm">
          Update your profile information with automatic validation
        </p>
      </div>

      <ExtendedForm form={form} onSubmit={onSubmit} className="space-y-4">
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
          <Label htmlFor="username">Username</Label>
          <Input id="username" {...form.register("username")} />
          {form.formState.errors.username && (
            <p className="text-destructive text-sm">
              {form.formState.errors.username.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Input
            id="bio"
            {...form.register("bio")}
            placeholder="Tell us about yourself"
          />
          {form.formState.errors.bio && (
            <p className="text-destructive text-sm">
              {form.formState.errors.bio.message}
            </p>
          )}
        </div>

        <div className="flex gap-2">
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="flex-1"
          >
            {form.formState.isSubmitting ? "Saving..." : "Save Changes"}
          </Button>
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
        </div>
      </ExtendedForm>
    </Card>
  )
}
