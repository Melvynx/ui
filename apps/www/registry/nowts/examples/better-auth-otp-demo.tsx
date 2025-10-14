"use client"

import { useState } from "react"
import { toast } from "sonner"

import { OtpForm } from "@/registry/nowts/blocks/better-auth-otp/components/better-auth-otp"

// Mock authClient for demo
const mockAuthClient = {
  emailOtp: {
    sendVerificationOtp: async ({ email }: { email: string; type: string }) => {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Simulate error for certain emails
      if (email === "error@example.com") {
        return { error: { message: "Failed to send OTP" } }
      }

      return { data: { success: true } }
    },
  },
  signIn: {
    emailOtp: async ({ email, otp }: { email: string; otp: string }) => {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Simulate success if OTP = "123456"
      if (otp === "123456") {
        return { data: { user: { email, id: "1" } } }
      }

      return { error: { message: "Invalid OTP code" } }
    },
  },
}

export function BetterAuthOtpDemo() {
  const [isSuccess, setIsSuccess] = useState(false)

  if (isSuccess) {
    return (
      <div className="w-[400px] rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950/20">
        <div className="space-y-3 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
            <svg
              className="h-6 w-6 text-green-600 dark:text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">
            Successfully signed in!
          </h3>
          <p className="text-sm text-green-600 dark:text-green-300">
            You are now logged into your account.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="text-sm text-green-700 underline hover:no-underline dark:text-green-300"
          >
            Restart demo
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="w-[400px] space-y-4">
      <div className="space-y-2 text-center">
        <h2 className="text-lg font-semibold">Better Auth OTP Demo</h2>
        <p className="text-muted-foreground text-sm">
          Enter your email to receive a verification code
        </p>
      </div>

      <div className="bg-card rounded-lg border p-6">
        <OtpForm
          sendOtp={async (email) => {
            const result = await mockAuthClient.emailOtp.sendVerificationOtp({
              email,
              type: "sign-in",
            })
            if (result.error) throw new Error(result.error.message)
          }}
          verifyOtp={async (email, otp) => {
            const result = await mockAuthClient.signIn.emailOtp({ email, otp })
            if (result.error) throw new Error(result.error.message)
          }}
          onSuccess={() => {
            toast.success("Successfully signed in!")
            setIsSuccess(true)
          }}
          onError={(error) => toast.error(error)}
          defaultEmail="demo@example.com"
          resendCooldown={10} // Reduced for demo
        />
      </div>

      <div className="text-muted-foreground bg-muted/30 space-y-1 rounded border p-3 text-xs">
        <p>
          <strong>💡 Demo tips:</strong>
        </p>
        <p>
          • Use code <code className="bg-background rounded px-1">123456</code>{" "}
          to simulate successful sign in
        </p>
        <p>
          • Use{" "}
          <code className="bg-background rounded px-1">error@example.com</code>{" "}
          to test error handling
        </p>
        <p>• Cooldown is reduced to 10s for easier testing</p>
      </div>
    </div>
  )
}

export function BetterAuthOtpCodeExample() {
  return (
    <div className="space-y-4">
      <div className="text-foreground text-sm font-medium">
        Implementation example:
      </div>
      <div className="relative">
        <pre className="bg-muted/50 overflow-x-auto rounded-lg p-4 text-sm">
          <code>{`import { OtpForm } from "@/components/better-auth-otp";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

export function LoginPage() {
  return (
    <OtpForm
      sendOtp={async (email) => {
        const result = await authClient.emailOtp.sendVerificationOtp({
          email,
          type: "sign-in"
        });
        if (result.error) throw new Error(result.error.message);
      }}
      verifyOtp={async (email, otp) => {
        const result = await authClient.signIn.emailOtp({ email, otp });
        if (result.error) throw new Error(result.error.message);
      }}
      onSuccess={() => {
        toast.success("Signed in successfully!");
        window.location.href = "/dashboard";
      }}
      onError={(error) => toast.error(error)}
      defaultEmail="user@example.com"
      resendCooldown={60}
    />
  );
}`}</code>
        </pre>
      </div>
    </div>
  )
}
