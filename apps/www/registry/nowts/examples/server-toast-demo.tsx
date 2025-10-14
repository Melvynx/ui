"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ServerToastDemo() {
  const handleSuccess = () => {
    toast.success("Success! Your action was completed.")
  }

  const handleError = () => {
    toast.error("Error! Something went wrong.")
  }

  const handleInfo = () => {
    toast.info("Info: This is an informational message.")
  }

  const handleWarning = () => {
    toast.warning("Warning: Please review this action.")
  }

  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Server Toast</h3>
        <p className="text-muted-foreground text-sm">
          Display toast notifications from server actions
        </p>
      </div>

      <div className="grid gap-2">
        <Button onClick={handleSuccess} variant="default" className="w-full">
          Success Toast
        </Button>
        <Button onClick={handleError} variant="destructive" className="w-full">
          Error Toast
        </Button>
        <Button onClick={handleInfo} variant="secondary" className="w-full">
          Info Toast
        </Button>
        <Button onClick={handleWarning} variant="outline" className="w-full">
          Warning Toast
        </Button>
      </div>
    </Card>
  )
}
