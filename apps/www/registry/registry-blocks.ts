import { type Registry } from "shadcn/schema"

export const blocks: Registry["items"] = [
  {
    name: "better-auth-otp",
    type: "registry:block",
    title: "Better Auth OTP",
    description: "A component for signing in with email OTP.",
    registryDependencies: [
      "button",
      "input",
      "label",
      "textarea",
      "card",
      "input-otp",
      "sonner",
    ],
    dependencies: ["motion", "react-use-measure", "@hookform/resolvers"],
    files: [
      {
        path: "blocks/better-auth-otp/components/better-auth-otp.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/better-auth-otp/hooks/use-countdown.ts",
        type: "registry:hook",
      },
    ],
    categories: ["authentication"],
  },
  {
    name: "better-auth-signin",
    type: "registry:block",
    title: "Better Auth Sign In Page",
    description:
      "A complete and customizable sign-in page with email/password, OTP, and OAuth provider support using Better Auth.",
    registryDependencies: [
      "button",
      "input",
      "label",
      "card",
      "avatar",
      "sonner",
      "https://ui.nowts.app/r/better-auth-otp.json",
    ],
    files: [
      {
        path: "blocks/better-auth-signin/sign-in-page.tsx",
        type: "registry:page",
        target: "app/sign-in/page.tsx",
      },
      {
        path: "blocks/better-auth-signin/sign-in-auth-methods.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/better-auth-signin/sign-in-password-form.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/better-auth-signin/sign-in-provider-button.tsx",
        type: "registry:component",
      },
      {
        path: "blocks/better-auth-signin/divider.tsx",
        type: "registry:component",
      },
    ],
    categories: ["authentication"],
  },
  {
    name: "better-auth-signup",
    type: "registry:block",
    title: "Better Auth Sign Up",
    description:
      "A complete sign-up form component with email and password authentication using Better Auth.",
    registryDependencies: [
      "button",
      "input",
      "label",
      "card",
      "sonner",
      "https://ui.nowts.app/r/extended-form.json",
    ],
    dependencies: ["zod", "react-hook-form", "@hookform/resolvers"],
    files: [
      {
        path: "blocks/better-auth-signup/better-auth-signup.tsx",
        type: "registry:page",
        target: "app/sign-up/page.tsx",
      },
    ],
    categories: ["authentication"],
  },
  {
    name: "server-toast",
    type: "registry:block",
    title: "Server Toast",
    description: "A library for server-side toast notifications.",
    registryDependencies: ["sonner"],
    files: [
      {
        path: "blocks/server-toast/server-toast.type.ts",
        type: "registry:lib",
        target: "lib/server-toast/server-toast.type.ts",
      },
      {
        path: "blocks/server-toast/server-toast.ts",
        type: "registry:lib",
        target: "lib/server-toast/server-toast.ts",
      },
      {
        path: "blocks/server-toast/server-toast.server.tsx",
        type: "registry:lib",
        target: "lib/server-toast/server-toast.server.tsx",
      },
      {
        path: "blocks/server-toast/server-toast.client.tsx",
        type: "registry:lib",
        target: "lib/server-toast/server-toast.client.tsx",
      },
    ],
    categories: ["notifications"],
  },
  {
    name: "dialog-manager",
    type: "registry:block",
    title: "Dialog Manager",
    description:
      "A powerful dialog manager for handling confirm, input, and custom dialogs with global state management.",
    registryDependencies: [
      "alert-dialog",
      "button",
      "input",
      "label",
      "sonner",
    ],
    dependencies: ["zustand"],
    files: [
      {
        path: "blocks/dialog-manager/dialog-types.ts",
        type: "registry:lib",
        target: "lib/dialog-manager/dialog-types.ts",
      },
      {
        path: "blocks/dialog-manager/dialog-factory.ts",
        type: "registry:lib",
        target: "lib/dialog-manager/dialog-factory.ts",
      },
      {
        path: "blocks/dialog-manager/dialog-store.ts",
        type: "registry:lib",
        target: "lib/dialog-manager/dialog-store.ts",
      },
      {
        path: "blocks/dialog-manager/dialog-manager.ts",
        type: "registry:lib",
        target: "lib/dialog-manager/dialog-manager.ts",
      },
      {
        path: "blocks/dialog-manager/dialog-component.tsx",
        type: "registry:lib",
        target: "lib/dialog-manager/dialog-component.tsx",
      },
      {
        path: "blocks/dialog-manager/dialog-manager-renderer.tsx",
        type: "registry:lib",
        target: "lib/dialog-manager/dialog-manager-renderer.tsx",
      },
    ],
    categories: ["dialogs"],
  },
  {
    name: "form-management",
    type: "registry:block",
    title: "Form Management",
    description:
      "A comprehensive form management system with auto-save, unsaved changes warning, and sticky action bar for enhanced UX.",
    registryDependencies: [
      "button",
      "tooltip",
      "https://ui.nowts.app/r/submit-button.json",
      "https://ui.nowts.app/r/extended-form.json",
      "https://ui.nowts.app/r/use-debounce-fn.json",
      "https://ui.nowts.app/r/use-warn-if-unsaved-changes.json",
      "https://ui.nowts.app/r/use-is-client.json",
    ],
    dependencies: ["motion", "react-hotkeys-hook", "lucide-react"],
    files: [
      {
        path: "blocks/form-management/form-management.tsx",
        type: "registry:lib",
        target: "lib/form-management/form-management.tsx",
      },
      {
        path: "blocks/form-management/form-management-sticky-bar.tsx",
        type: "registry:lib",
        target: "lib/form-management/form-management-sticky-bar.tsx",
      },
    ],
    categories: ["forms"],
  },
  {
    name: "form-management-tanstack",
    type: "registry:block",
    title: "Form Management TanStack",
    description:
      "A comprehensive form management system built with TanStack Form, featuring auto-save, unsaved changes warnings, and sticky action bar for enhanced UX.",
    registryDependencies: [
      "button",
      "tooltip",
      "https://ui.nowts.app/r/submit-button.json",
      "https://ui.nowts.app/r/tanstack-form.json",
      "https://ui.nowts.app/r/use-debounce-fn.json",
      "https://ui.nowts.app/r/use-warn-if-unsaved-changes.json",
      "https://ui.nowts.app/r/use-is-client.json",
    ],
    dependencies: ["motion", "react-hotkeys-hook", "lucide-react"],
    files: [
      {
        path: "blocks/form-management-tanstack/form-management.tsx",
        type: "registry:lib",
        target: "lib/form-management-tanstack/form-management.tsx",
      },
      {
        path: "blocks/form-management-tanstack/form-management-sticky-bar.tsx",
        type: "registry:lib",
        target: "lib/form-management-tanstack/form-management-sticky-bar.tsx",
      },
    ],
    categories: ["forms"],
  },
]
