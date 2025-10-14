import { Card } from "@/components/ui/card"
import { Spinner } from "@/registry/nowts/ui/spinner"

export default function SpinnerDemo() {
  return (
    <Card className="flex items-center justify-center p-8">
      <Spinner size={32} />
    </Card>
  )
}
