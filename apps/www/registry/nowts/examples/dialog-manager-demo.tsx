"use client"

import { Trash2 } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { dialogManager } from "@/registry/nowts/blocks/dialog-manager/dialog-manager"

export default function DialogManagerDemo() {
  const handleConfirmDialog = () => {
    dialogManager.confirm({
      title: "Delete Account",
      description:
        "Are you sure you want to delete your account? This action cannot be undone.",
      action: {
        label: "Delete",
        variant: "destructive",
        onClick: async () => {
          await new Promise((resolve) => setTimeout(resolve, 1000))
          toast.success("Account deleted")
        },
      },
      icon: Trash2,
      style: "centered",
    })
  }

  const handleInputDialog = () => {
    dialogManager.input({
      title: "Create Project",
      description: "Enter a name for your new project",
      input: {
        label: "Project Name",
        placeholder: "my-awesome-project",
        defaultValue: "",
      },
      action: {
        label: "Create",
        onClick: async (value) => {
          await new Promise((resolve) => setTimeout(resolve, 1000))
          toast.success(`Project "${value}" created`)
        },
      },
    })
  }

  const handleConfirmTextDialog = () => {
    dialogManager.confirm({
      title: "Delete Everything",
      description: "This will permanently delete all your data.",
      confirmText: "DELETE",
      action: {
        label: "Delete",
        variant: "destructive",
        onClick: async () => {
          await new Promise((resolve) => setTimeout(resolve, 1000))
          toast.success("All data deleted")
        },
      },
    })
  }

  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Dialog Manager</h3>
        <p className="text-muted-foreground text-sm">
          Programmatic dialogs with confirm, input, and custom variants
        </p>
      </div>

      <div className="grid gap-2">
        <Button
          onClick={handleConfirmDialog}
          variant="default"
          className="w-full"
        >
          Confirm Dialog
        </Button>
        <Button
          onClick={handleInputDialog}
          variant="secondary"
          className="w-full"
        >
          Input Dialog
        </Button>
        <Button
          onClick={handleConfirmTextDialog}
          variant="outline"
          className="w-full"
        >
          Confirm with Text
        </Button>
      </div>
    </Card>
  )
}
