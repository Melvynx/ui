"use client"

import { Check, Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useCopyToClipboard } from "@/registry/nowts/hooks/use-copy-to-clipboard"

export function UseCopyToClipboardDemo() {
  const { isCopied, copyToClipboard } = useCopyToClipboard()

  const handleCopyText = () => {
    copyToClipboard(
      "Hello, World! This text has been copied to your clipboard."
    )
  }

  const handleCopyCode = () => {
    const code = `const greeting = "Hello, World!";
console.log(greeting);`
    copyToClipboard(code)
  }

  return (
    <div className="space-y-4 p-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Basic Copy</h3>
        <Button
          onClick={handleCopyText}
          variant={isCopied ? "default" : "outline"}
        >
          {isCopied ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="mr-2 h-4 w-4" />
              Copy Text
            </>
          )}
        </Button>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Copy Code</h3>
        <div className="relative">
          <pre className="bg-muted overflow-x-auto rounded-md p-3 text-sm">
            <code>{`const greeting = "Hello, World!";
console.log(greeting);`}</code>
          </pre>
          <Button
            size="sm"
            variant="ghost"
            onClick={handleCopyCode}
            className="absolute top-2 right-2 h-8 w-8 p-0"
          >
            {isCopied ? (
              <Check className="h-3 w-3" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
