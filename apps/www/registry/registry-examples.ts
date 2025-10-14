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
      "card",
      "input",
      "label",
      "button",
      "sonner",
      "select",
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
      "card",
      "input",
      "label",
      "button",
      "select",
      "checkbox",
      "switch",
      "textarea",
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
      "card",
      "input",
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
]
