"use client"

import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { useIsClient } from "@/registry/nowts/hooks/use-is-client"

export function UseIsClientDemo() {
  const isClient = useIsClient()
  const [count, setCount] = useState(0)
  const [currentTime, setCurrentTime] = useState<string>("")

  useEffect(() => {
    if (isClient) {
      const updateTime = () => {
        setCurrentTime(new Date().toLocaleTimeString())
      }

      updateTime()
      const interval = setInterval(updateTime, 1000)

      return () => clearInterval(interval)
    }
  }, [isClient])

  if (!isClient) {
    return (
      <div className="max-w-md rounded-lg border p-6">
        <div className="mb-4 flex items-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-yellow-500"></div>
          <span className="text-muted-foreground text-sm">
            Server rendering...
          </span>
        </div>
        <p className="text-muted-foreground">Loading client-side content...</p>
      </div>
    )
  }

  return (
    <div className="max-w-md space-y-4 rounded-lg border p-6">
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-green-500"></div>
        <span className="text-sm font-medium text-green-600">
          Client-side rendered!
        </span>
      </div>

      <div className="space-y-2">
        <p className="text-muted-foreground text-sm">
          Current time: <span className="font-mono">{currentTime}</span>
        </p>

        <div className="flex items-center gap-2">
          <Button onClick={() => setCount((c) => c + 1)} size="sm">
            Count: {count}
          </Button>
        </div>

        <p className="text-muted-foreground text-xs">
          User Agent: {navigator.userAgent.slice(0, 50)}...
        </p>
      </div>
    </div>
  )
}
