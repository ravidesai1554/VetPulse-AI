import React from "react"
import SigninFormDemo from "@/components/ui/signin-form-demo"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SigninDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
      {/* Header */}
      <div className="absolute top-4 left-4">
        <Link to="/" className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
              <Heart className="w-5 h-5 text-white absolute" />
              <Stethoscope className="w-3 h-3 text-blue-200 absolute top-1.5 right-1.5" />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              VetPulse AI
            </h1>
          </div>
        </Link>
      </div>

      <div className="absolute top-4 right-4">
        <Button variant="outline" size="sm" asChild>
          <Link to="/login" className="flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Login
          </Link>
        </Button>
      </div>

      <div className="w-full max-w-md">
        <SigninFormDemo />
      </div>
    </div>
  )
}