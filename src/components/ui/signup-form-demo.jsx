import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { Label } from "@/components/ui/animated-label" // Using animated label
import { Input } from "@/components/ui/animated-input" // Using animated input
import { cn } from "@/utils/utils"
import { IconBrandGithub, IconBrandGoogle, IconBrandApple } from "@tabler/icons-react"

export default function SignupFormDemo() {
  const [isLoading, setIsLoading] = useState(false)
  const [alert, setAlert] = useState(null)
  const [signupFormData, setSignupFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleSignup = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setAlert(null)

    // Simulate API call
    setTimeout(() => {
      if (
        signupFormData.email &&
        signupFormData.password &&
        signupFormData.confirmPassword &&
        signupFormData.firstName &&
        signupFormData.lastName
      ) {
        if (signupFormData.password !== signupFormData.confirmPassword) {
          setAlert({ type: "error", message: "Passwords do not match." })
        } else {
          setAlert({ type: "success", message: "Account created successfully! Please check your email." })
        }
      } else {
        setAlert({ type: "error", message: "Please fill in all required fields." })
      }
      setIsLoading(false)
    }, 1500)
  }

  return (
    <>
      {/* Alert */}
      {alert && (
        <Alert
          className={`mb-6 ${alert.type === "success" ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}
        >
          {alert.type === "success" ? (
            <CheckCircle className="h-4 w-4 text-green-600" />
          ) : (
            <AlertCircle className="h-4 w-4 text-red-600" />
          )}
          <AlertDescription className={alert.type === "success" ? "text-green-800" : "text-red-800"}>
            {alert.message}
          </AlertDescription>
        </Alert>
      )}

      {/* Auth Card */}
      <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="space-y-1 pb-4">
          <CardTitle className="text-2xl font-bold text-center">Create Account</CardTitle>
          <CardDescription className="text-center">
            Join VetPulse AI for advanced animal healthcare management and AI-powered diagnostics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
              <LabelInputContainer>
                <Label htmlFor="firstName">First name</Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  type="text"
                  value={signupFormData.firstName}
                  onChange={(e) => setSignupFormData({ ...signupFormData, firstName: e.target.value })}
                  required
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastName">Last name</Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  type="text"
                  value={signupFormData.lastName}
                  onChange={(e) => setSignupFormData({ ...signupFormData, lastName: e.target.value })}
                  required
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="signupEmail">Email Address</Label>
              <Input
                id="signupEmail"
                placeholder="veterinarian@vetpulse.ai"
                type="email"
                value={signupFormData.email}
                onChange={(e) => setSignupFormData({ ...signupFormData, email: e.target.value })}
                required
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="signupPassword">Password</Label>
              <Input
                id="signupPassword"
                placeholder="••••••••"
                type="password"
                value={signupFormData.password}
                onChange={(e) => setSignupFormData({ ...signupFormData, password: e.target.value })}
                required
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-8">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                placeholder="••••••••"
                type="password"
                value={signupFormData.confirmPassword}
                onChange={(e) => setSignupFormData({ ...signupFormData, confirmPassword: e.target.value })}
                required
              />
            </LabelInputContainer>

            <button
              className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-blue-600 to-blue-700 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] disabled:opacity-50"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating Account...
                </>
              ) : (
                "Create Account →"
              )}
              <BottomGradient />
            </button>

            <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

            <div className="flex flex-col space-y-4">
              <button
                className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                type="button"
              >
                <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-sm text-neutral-700 dark:text-neutral-300">Continue with GitHub</span>
                <BottomGradient />
              </button>
              <button
                className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                type="button"
              >
                <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-sm text-neutral-700 dark:text-neutral-300">Continue with Google</span>
                <BottomGradient />
              </button>
              <button
                className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                type="button"
              >
                <IconBrandApple className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-sm text-neutral-700 dark:text-neutral-300">Continue with Apple</span>
                <BottomGradient />
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  )
}

const LabelInputContainer = ({ children, className }) => {
  return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>
}