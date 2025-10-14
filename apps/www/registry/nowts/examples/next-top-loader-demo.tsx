"use client"

import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function NextTopLoaderDemo() {
  const router = useRouter()

  const simulateNavigation = () => {
    router.push("/docs")
  }

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Next.js Top Loader</h3>
          <p className="text-muted-foreground text-sm">
            A loading bar that appears at the top of the page during navigation
          </p>
        </div>

        <div className="bg-muted/50 rounded-lg border p-4">
          <p className="mb-2 text-sm font-medium">
            To use this component, add it to your layout:
          </p>
          <code className="bg-background block rounded p-2 text-xs">
            {`import { NextTopLoader } from "@/components/ui/next-top-loader"

export default function Layout({ children }) {
  return (
    <>
      <NextTopLoader />
      {children}
    </>
  )
}`}
          </code>
        </div>

        <Button onClick={simulateNavigation} className="w-full">
          Simulate Navigation
        </Button>
      </div>
    </Card>
  )
}
