"use client"

import { PlusIcon, XIcon } from "lucide-react"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Field, FieldContent } from "@/components/ui/field"
import {
  FormLabel,
  FormMessage,
  useForm,
} from "@/registry/nowts/ui/tanstack-form"

const teamSchema = z.object({
  teamName: z.string().min(2, "Team name must be at least 2 characters"),
  users: z
    .array(
      z.object({
        email: z.string().email("Please enter a valid email address"),
      })
    )
    .min(1, "You must add at least one user")
    .max(10, "Maximum 10 users allowed"),
})

export default function TanstackFormArrayDemo() {
  const form = useForm({
    schema: teamSchema,
    defaultValues: {
      teamName: "",
      users: [{ email: "" }],
    },
    onSubmit: async (values) => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success("Team created!", {
        description: `${values.teamName} with ${values.users.length} members`,
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
          <h3 className="text-lg font-semibold">Create Team</h3>
          <p className="text-muted-foreground text-sm">
            Add team members by email address
          </p>
        </div>

        <form.AppField name="teamName">
          {(field) => (
            <Field>
              <FormLabel>Team Name</FormLabel>
              <FieldContent>
                <field.Input placeholder="Engineering Team" />
                <FormMessage />
              </FieldContent>
            </Field>
          )}
        </form.AppField>

        <form.AppField name="users" mode="array">
          {(usersField) => (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium">Team Members</h4>
                  <p className="text-muted-foreground text-sm">
                    Add email addresses for team members (1-10 users)
                  </p>
                </div>
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={() => usersField.pushValue?.({ email: "" })}
                  disabled={usersField.state.value.length >= 10}
                >
                  <PlusIcon className="mr-2 size-4" />
                  Add User
                </Button>
              </div>

              <div className="space-y-2">
                {usersField.state.value.map((_, index) => (
                  <form.AppField key={index} name={`users[${index}].email`}>
                    {(field) => (
                      <div className="flex items-start gap-2">
                        <div className="flex-1">
                          <field.Input
                            type="email"
                            placeholder="user@example.com"
                          />
                          <FormMessage />
                        </div>
                        <Button
                          type="button"
                          size="icon"
                          variant="ghost"
                          onClick={() => usersField.removeValue?.(index)}
                          disabled={usersField.state.value.length === 1}
                        >
                          <XIcon className="size-4" />
                        </Button>
                      </div>
                    )}
                  </form.AppField>
                ))}
              </div>

              <FormMessage />
            </div>
          )}
        </form.AppField>

        <form.AppForm>
          <form.SubmitButton className="w-full">
            {form.state.isSubmitting ? "Creating..." : "Create Team"}
          </form.SubmitButton>
        </form.AppForm>
      </form>
    </Card>
  )
}
