import Link from "next/link"

import { siteConfig } from "@/lib/config"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function DocsSidebarCta({ className }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "group bg-surface text-surface-foreground relative flex flex-col gap-2 overflow-hidden rounded-lg p-6 text-sm",
        className
      )}
    >
      <div className="bg-surface/80 absolute inset-0" />

      <div className="relative z-10 text-base leading-tight font-semibold text-balance group-hover:underline">
        Build Your SaaS in Days, Not Months
      </div>
      <div className="text-muted-foreground relative z-10">
        NOW.TS is the Next.js 15 boilerplate with everything you need to launch
        your SaaS—auth, payments, database, and AI-ready infrastructure.
      </div>
      <Button size="sm" className="relative z-10 mt-2 w-fit">
        Get Started
      </Button>
      <Link
        href={siteConfig.utm.agents}
        target="_blank"
        rel="noreferrer"
        className="absolute inset-0 z-20"
      >
        <span className="sr-only">Learn more about NOW.TS</span>
      </Link>
    </div>
  )
}
