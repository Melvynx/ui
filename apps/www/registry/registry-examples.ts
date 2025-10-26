import { type Registry } from "shadcn/schema"

export const examples: Registry["items"] = [
  {
    name: "spinner-demo",
    type: "registry:example",
    registryDependencies: ["https://ui.nowts.app/r/spinner.json", "card"],
    files: [
      {
        path: "examples/spinner-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "submit-button-demo",
    type: "registry:example",
    registryDependencies: [
      "https://ui.nowts.app/r/submit-button.json",
      "https://ui.nowts.app/r/extended-form.json",
      "card",
      "input",
      "label",
      "sonner",
    ],
    dependencies: ["zod"],
    files: [
      {
        path: "examples/submit-button-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "extended-form-demo",
    type: "registry:example",
    registryDependencies: [
      "https://ui.nowts.app/r/extended-form.json",
      "card",
      "input",
      "label",
      "button",
      "sonner",
    ],
    dependencies: ["zod"],
    files: [
      {
        path: "examples/extended-form-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "next-top-loader-demo",
    type: "registry:example",
    registryDependencies: [
      "https://ui.nowts.app/r/next-top-loader.json",
      "card",
      "button",
    ],
    files: [
      {
        path: "examples/next-top-loader-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tanstack-form-demo",
    type: "registry:example",
    registryDependencies: [
      "https://ui.nowts.app/r/tanstack-form.json",
      "field",
      "card",
      "sonner",
    ],
    dependencies: ["zod"],
    files: [
      {
        path: "examples/tanstack-form-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tanstack-form-complex-demo",
    type: "registry:example",
    registryDependencies: [
      "https://ui.nowts.app/r/tanstack-form.json",
      "field",
      "card",
      "select",
      "switch",
      "sonner",
    ],
    dependencies: ["zod", "lucide-react"],
    files: [
      {
        path: "examples/tanstack-form-complex-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tanstack-form-array-demo",
    type: "registry:example",
    registryDependencies: [
      "https://ui.nowts.app/r/tanstack-form.json",
      "field",
      "card",
      "button",
      "sonner",
    ],
    dependencies: ["zod", "lucide-react"],
    files: [
      {
        path: "examples/tanstack-form-array-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-demo",
    type: "registry:example",
    registryDependencies: ["https://ui.nowts.app/r/typography.json", "card"],
    files: [
      {
        path: "examples/typography-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "server-toast-demo",
    type: "registry:example",
    registryDependencies: ["card", "button", "sonner"],
    files: [
      {
        path: "examples/server-toast-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dialog-manager-demo",
    type: "registry:example",
    registryDependencies: [
      "https://ui.nowts.app/r/dialog-manager.json",
      "card",
      "button",
      "sonner",
    ],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "examples/dialog-manager-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "form-management-demo",
    type: "registry:example",
    registryDependencies: [
      "https://ui.nowts.app/r/form-management.json",
      "https://ui.nowts.app/r/extended-form.json",
      "card",
      "input",
      "label",
      "textarea",
      "sonner",
    ],
    dependencies: ["zod"],
    files: [
      {
        path: "examples/form-management-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "form-management-tanstack-demo",
    type: "registry:example",
    registryDependencies: [
      "https://ui.nowts.app/r/form-management-tanstack.json",
      "https://ui.nowts.app/r/tanstack-form.json",
      "card",
      "sonner",
    ],
    dependencies: ["zod"],
    files: [
      {
        path: "examples/form-management-tanstack-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "better-auth-signin-demo",
    type: "registry:example",
    registryDependencies: [
      "https://ui.nowts.app/r/better-auth-signin.json",
      "sonner",
    ],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "examples/better-auth-signin-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "better-auth-signup-demo",
    type: "registry:example",
    registryDependencies: [
      "https://ui.nowts.app/r/better-auth-signup.json",
      "sonner",
    ],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "examples/better-auth-signup-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "better-auth-otp-demo",
    type: "registry:example",
    registryDependencies: [
      "https://ui.nowts.app/r/better-auth-otp.json",
      "card",
      "button",
    ],
    files: [
      {
        path: "examples/better-auth-otp-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "use-debounce-fn-demo",
    type: "registry:example",
    registryDependencies: [
      "https://ui.nowts.app/r/use-debounce-fn.json",
      "input",
      "label",
    ],
    files: [
      {
        path: "examples/use-debounce-fn-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "use-is-client-demo",
    type: "registry:example",
    registryDependencies: ["https://ui.nowts.app/r/use-is-client.json", "card"],
    files: [
      {
        path: "examples/use-is-client-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "use-warn-if-unsaved-changes-demo",
    type: "registry:example",
    registryDependencies: [
      "https://ui.nowts.app/r/use-warn-if-unsaved-changes.json",
      "card",
      "input",
      "label",
      "button",
      "textarea",
    ],
    files: [
      {
        path: "examples/use-warn-if-unsaved-changes-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "use-copy-to-clipboard-demo",
    type: "registry:example",
    registryDependencies: [
      "https://ui.nowts.app/r/use-copy-to-clipboard.json",
      "card",
      "button",
      "input",
    ],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "examples/use-copy-to-clipboard-demo.tsx",
        type: "registry:example",
      },
    ],
  },
]
