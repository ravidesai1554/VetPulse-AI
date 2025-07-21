import React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Heart, Stethoscope, Eye, EyeOff, Loader2, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { Label } from "@/components/ui/animated-label" // Using animated label
import { Input } from "@/components/ui/animated-input" // Using animated input
import { cn } from "@/utils/utils"
import { IconBrandGithub, IconBrandGoogle, IconBrandApple } from "@tabler/icons-react"
import { useAuth } from "@/context/auth-context"

export default function LoginPage() {
  const { login, register, isLoading: authLoading, user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [alert, setAlert] = useState(null)
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [signupFormData, setSignupFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  
  // Redirect if user is already logged in
  useEffect(() => {
    if (user) {
      // Redirect to the page they were trying to access or to home
      const from = location.state?.from?.pathname || "/"
      navigate(from, { replace: true })
    }
  }, [user, navigate, location])

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setAlert(null)

    try {
      if (!loginFormData.email || !loginFormData.password) {
        setAlert({ type: "error", message: "Please fill in all required fields." })
        setIsLoading(false)
        return
      }
      
      const success = await login(loginFormData.email, loginFormData.password)
      
      if (success) {
        setAlert({ type: "success", message: "Login successful! Redirecting..." })
        // Redirect is handled by the useEffect
      }
    } catch (error) {
      setAlert({ 
        type: "error", 
        message: error.message || "Login failed. Please check your credentials and try again." 
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setAlert(null)

    try {
      // Validate form data
      if (
        !signupFormData.email ||
        !signupFormData.password ||
        !signupFormData.confirmPassword ||
        !signupFormData.firstName ||
        !signupFormData.lastName
      ) {
        setAlert({ type: "error", message: "Please fill in all required fields." })
        setIsLoading(false)
        return
      }
      
      // Check if passwords match
      if (signupFormData.password !== signupFormData.confirmPassword) {
        setAlert({ type: "error", message: "Passwords do not match." })
        setIsLoading(false)
        return
      }
      
      // Create full name from first and last name
      const fullName = `${signupFormData.firstName} ${signupFormData.lastName}`
      
      // Register the user
      const success = await register(
        fullName,
        signupFormData.email,
        signupFormData.password,
        'user' // Default role
      )
      
      if (success) {
        setAlert({ type: "success", message: "Account created successfully! Redirecting..." })
        // Redirect is handled by the useEffect
      }
    } catch (error) {
      setAlert({ 
        type: "error", 
        message: error.message || "Registration failed. Please try again." 
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-3 mb-6">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white absolute" />
                <Stethoscope className="w-4 h-4 text-blue-200 absolute top-2 right-2" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                VetPulse
              </h1>
            </div>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-gray-600">Access your AI-powered veterinary dashboard</p>
        </div>

        {/* Back Button */}
        <div className="absolute top-4 right-4">
          <Button variant="outline" size="sm" asChild>
            <Link to="/" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Link>
          </Button>
        </div>

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
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login" className="text-sm font-medium">
                Login
              </TabsTrigger>
              <TabsTrigger value="signup" className="text-sm font-medium">
                Sign Up
              </TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login">
              <CardHeader className="space-y-1 pb-4">
                <CardTitle className="text-2xl font-bold text-center">Sign In</CardTitle>
                <CardDescription className="text-center">Enter your credentials to access your account</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <LabelInputContainer>
                    <Label htmlFor="loginEmail">Email Address</Label>
                    <Input
                      id="loginEmail"
                      type="email"
                      placeholder="veterinarian@vetpulse.ai"
                      value={loginFormData.email}
                      onChange={(e) => setLoginFormData({ ...loginFormData, email: e.target.value })}
                      required
                    />
                  </LabelInputContainer>

                  <LabelInputContainer>
                    <Label htmlFor="loginPassword">Password</Label>
                    <div className="relative">
                      <Input
                        id="loginPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={loginFormData.password}
                        onChange={(e) => setLoginFormData({ ...loginFormData, password: e.target.value })}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </LabelInputContainer>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remember"
                        checked={loginFormData.rememberMe}
                        onCheckedChange={(checked) =>
                          setLoginFormData({ ...loginFormData, rememberMe: checked })
                        }
                      />
                      <Label htmlFor="remember" className="text-sm text-gray-600">
                        Remember me
                      </Label>
                    </div>
                    <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                      Forgot password?
                    </Link>
                  </div>

                  <button
                    className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-blue-600 to-blue-700 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] disabled:opacity-50"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signing In...
                      </>
                    ) : (
                      "Sign In →"
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
            </TabsContent>

            {/* Signup Tab */}
            <TabsContent value="signup">
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
            </TabsContent>
          </Tabs>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-600">
          <p>
            By continuing, you agree to our{" "}
            <Link to="/terms" className="text-blue-600 hover:text-blue-800 font-medium">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-blue-600 hover:text-blue-800 font-medium">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
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