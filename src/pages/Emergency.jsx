import React from 'react'
import { useState } from "react"
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle, Phone, MapPin, Clock, CheckCircle, Loader2, ArrowLeft } from "lucide-react"

export default function Emergency() {
  const [isLoading, setIsLoading] = useState(false)
  const [alertSent, setAlertSent] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    location: "",
    animalType: "",
    symptoms: "",
    ownerName: "",
    phone: "",
    comments: "",
  })

  const handleEmergencyAlert = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call to /api/emergency
    setTimeout(() => {
      setIsLoading(false)
      setAlertSent(true)
    }, 2000)
  }

  if (alertSent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 flex items-center justify-center p-4 pt-20">
        <Card className="max-w-2xl w-full shadow-2xl border-0 bg-white">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Emergency Alert Sent!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Your emergency alert has been sent to the nearest veterinarians. Help is on the way!
            </p>

            <div className="bg-red-50 p-6 rounded-lg mb-8 border border-red-200">
              <h3 className="font-semibold text-red-900 mb-3">Emergency Response Activated</h3>
              <div className="space-y-2 text-red-800 text-left">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span>Nearest emergency veterinarians have been notified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span>You will receive a call within 5 minutes</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span>Emergency veterinarian is being dispatched to your location</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Emergency Hotline</h4>
                <p className="text-2xl font-bold text-red-600">1-800-VETPULSE</p>
                <p className="text-sm text-gray-600">Available 24/7</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Reference ID</h4>
                <p className="text-lg font-mono text-blue-600">
                  EMG-{Math.random().toString(36).substr(2, 8).toUpperCase()}
                </p>
                <p className="text-sm text-gray-600">Keep this for reference</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Button
                className="bg-red-600 hover:bg-red-700 text-lg py-3 rounded-xl shadow-md transition-all duration-300 ease-in-out"
                asChild
              >
                <Link to="tel:1-800-VETPULSE">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Emergency Line
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/">Return Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 pt-20">
      {/* Content starts below the global navbar */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            Emergency Services
          </h1>

          <Button variant="outline" size="sm" asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Emergency Banner */}
          <Alert className="mb-8 border-red-200 bg-red-50">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <AlertDescription className="text-red-800 text-lg">
              <strong>VETERINARY EMERGENCY ALERT SYSTEM</strong> - For life-threatening situations requiring immediate
              veterinary attention
            </AlertDescription>
          </Alert>

          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">⚠️ Emergency Alert</h1>
            <p className="text-xl text-gray-600">Immediate veterinary assistance for critical situations</p>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-2 border-red-200 bg-red-50">
              <CardContent className="p-6 text-center">
                <Phone className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-bold text-red-900 mb-2">Call Emergency Line</h3>
                <p className="text-sm text-red-700 mb-4">Speak directly with emergency veterinarian</p>
                <Button
                  className="w-full bg-red-600 hover:bg-red-700 text-lg py-3 rounded-xl shadow-md transition-all duration-300 ease-in-out"
                  asChild
                >
                  <Link to="tel:1-800-VETPULSE">Call Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 bg-orange-50">
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-bold text-orange-900 mb-2">Find Nearest Clinic</h3>
                <p className="text-sm text-orange-700 mb-4">Locate emergency veterinary clinics</p>
                <Button
                  variant="outline"
                  className="w-full border-orange-300 text-orange-700 hover:bg-orange-100 bg-transparent"
                >
                  Find Clinics
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-blue-900 mb-2">24/7 Support</h3>
                <p className="text-sm text-blue-700 mb-4">Round-the-clock emergency assistance</p>
                <Button
                  variant="outline"
                  className="w-full border-blue-300 text-blue-700 hover:bg-blue-100 bg-transparent"
                >
                  Get Support
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Emergency Form */}
          <Card className="shadow-2xl border-2 border-red-200">
            <CardHeader className="bg-gradient-to-r from-red-50 to-red-100">
              <CardTitle className="text-2xl text-red-900">Emergency Alert Form</CardTitle>
              <CardDescription className="text-red-700">
                Fill out this form to send an immediate alert to nearby veterinarians
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleEmergencyAlert} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="ownerName">Your Name *</Label>
                    <Input
                      id="ownerName"
                      placeholder="Enter your name"
                      value={formData.ownerName}
                      onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                      className="h-11"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-11"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Current Location (Optional)</Label>
                  <Input
                    id="location"
                    placeholder="Enter your current address or location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="animalType">Animal Type *</Label>
                  <Select
                    value={formData.animalType}
                    onValueChange={(value) => setFormData({ ...formData, animalType: value })}
                  >
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select animal type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dog">🐕 Dog</SelectItem>
                      <SelectItem value="cat">🐱 Cat</SelectItem>
                      <SelectItem value="cow">🐄 Cow</SelectItem>
                      <SelectItem value="horse">🐴 Horse</SelectItem>
                      <SelectItem value="rabbit">🐰 Rabbit</SelectItem>
                      <SelectItem value="sheep">🐑 Sheep</SelectItem>
                      <SelectItem value="goat">🐐 Goat</SelectItem>
                      <SelectItem value="pig">🐷 Pig</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="symptoms">Emergency Symptoms *</Label>
                  <Textarea
                    id="symptoms"
                    placeholder="Describe the emergency symptoms (e.g., difficulty breathing, seizures, severe bleeding, unconsciousness, etc.)"
                    value={formData.symptoms}
                    onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comments">Additional Comments</Label>
                  <Textarea
                    id="comments"
                    placeholder="Any additional information that might help the veterinarian..."
                    value={formData.comments}
                    onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                    className="min-h-[80px]"
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full h-16 text-xl font-semibold bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 rounded-xl shadow-lg shadow-red-500/50 transition-all duration-300 ease-in-out"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending Emergency Alert...
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="mr-2 h-5 w-5" />
                        Send Emergency Alert
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Emergency Guidelines */}
          <Card className="mt-8 bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="text-yellow-900">Emergency Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-3">When to Use Emergency Alert:</h4>
                  <ul className="space-y-2 text-yellow-800 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Difficulty breathing or choking
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Seizures or convulsions
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Severe bleeding or trauma
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Unconsciousness or collapse
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Suspected poisoning
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-yellow-900 mb-3">While Waiting for Help:</h4>
                  <ul className="space-y-2 text-yellow-800 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Keep your animal calm and comfortable
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Do not give food or water unless instructed
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Apply pressure to bleeding wounds
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Keep airways clear if possible
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Stay on the line with emergency services
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}