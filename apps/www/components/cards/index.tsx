import DialogManagerDemo from "@/registry/nowts/examples/dialog-manager-demo"
import FormManagementDemo from "@/registry/nowts/examples/form-management-demo"
import ServerToastDemo from "@/registry/nowts/examples/server-toast-demo"
import TanstackFormDemo from "@/registry/nowts/examples/tanstack-form-demo"
import TypographyDemo from "@/registry/nowts/examples/typography-demo"

export function CardsDemo() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="space-y-4">
        <ServerToastDemo />
        <TypographyDemo />
      </div>
      <div className="space-y-4">
        <DialogManagerDemo />
        <TanstackFormDemo />
      </div>
      <div className="space-y-4">
        <FormManagementDemo />
      </div>
    </div>
  )
}
