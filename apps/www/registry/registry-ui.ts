import { type Registry } from "shadcn/schema"

export const ui: Registry["items"] = [
  {
    name: "submit-button",
    type: "registry:ui",
    title: "Submit Button",
    description:
      "Enhanced submit button with loading state that automatically detects form submission state using React's useFormStatus hook.",
    dependencies: ["motion", "lucide-react"],
    registryDependencies: ["button", "https://ui.nowts.app/r/spinner.json"],
    files: [
      {
        path: "ui/submit-button.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "spinner",
    type: "registry:ui",
    title: "Spinner",
    description:
      "A simple loading spinner component using Lucide's Loader2 icon with spin animation.",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "ui/spinner.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "next-top-loader",
    type: "registry:ui",
    title: "Next Top Loader",
    description:
      "A Next.js compatible top loading bar component with automatic navigation detection and customizable progress indicators.",
    dependencies: ["zustand"],
    files: [
      {
        path: "ui/next-top-loader.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "extended-form",
    type: "registry:ui",
    title: "Extended Form",
    description:
      "Enhanced form component with Zod schema validation and TypeScript support using react-hook-form.",
    dependencies: ["react-hook-form", "@hookform/resolvers", "zod"],
    registryDependencies: ["form"],
    files: [
      {
        path: "ui/extended-form.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "tanstack-form",
    type: "registry:ui",
    title: "TanStack Form",
    description:
      "A complete form management solution using TanStack Form with Zod validation, supporting all input types including arrays and nested objects.",
    dependencies: ["@tanstack/react-form", "zod"],
    registryDependencies: ["label"],
    files: [
      {
        path: "ui/tanstack-form.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "typography",
    type: "registry:ui",
    title: "Typography",
    description:
      "A polymorphic typography component with multiple variants for consistent text styling across your application.",
    dependencies: ["class-variance-authority"],
    files: [
      {
        path: "ui/typography.tsx",
        type: "registry:ui",
      },
    ],
  },
]
