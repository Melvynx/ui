import { type Registry } from "shadcn/schema"

export const hooks: Registry["items"] = [
  {
    name: "use-mobile",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-mobile.ts",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-is-client",
    type: "registry:hook",
    title: "useIsClient",
    description:
      "A React hook to check if the component is rendered on the client side, useful for SSR/hydration scenarios.",
    files: [
      {
        path: "hooks/use-is-client.ts",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-warn-if-unsaved-changes",
    type: "registry:hook",
    title: "Use Warn If Unsaved Changes",
    description:
      "A React hook that warns users before leaving the page when there are unsaved changes.",
    files: [
      {
        path: "hooks/use-warn-if-unsaved-changes.ts",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-debounce-fn",
    type: "registry:hook",
    title: "Use Debounce Function",
    description:
      "A React hook that debounces function calls to improve performance and prevent excessive API calls.",
    files: [
      {
        path: "hooks/use-debounce-fn.ts",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-copy-to-clipboard",
    type: "registry:hook",
    title: "Use Copy to Clipboard",
    description:
      "A React hook for copying text to the clipboard with fallback support and feedback state management.",
    files: [
      {
        path: "hooks/use-copy-to-clipboard.ts",
        type: "registry:hook",
      },
    ],
  },
]
