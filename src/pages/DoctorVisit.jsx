import * as React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Heart,
  Stethoscope,
  Home,
  Calendar,
  Clock,
  CheckCircle,
  Loader2,
  Phone,
  AlertTriangle,
  ArrowLeft,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function DoctorVisitPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    ownerName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    animalId: "",
    animalName: "",
    animalType: "",
    symptoms: "",
    urgency: "",
    preferredDate: "",
    preferredTime: "",
    additionalNotes: "",
    homeVisit: true,
    emergencyContact: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call to /api/doctor-request
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full shadow-2xl border-0">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Request Submitted Successfully!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Your home visit request has been sent to our veterinary network. A qualified veterinarian will contact you
              within 2 hours.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-blue-900 mb-3">What happens next?</h3>
              <div className="space-y-2 text-blue-800 text-left">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Veterinarian will review your request and animal's symptoms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>You'll receive a call within 2 hours to confirm appointment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Professional veterinary care at your location</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Button
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                asChild
              >
                <Link to="/">Return Home</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/emergency">Emergency Support</Link>
              </Button>
            </div>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Reference ID:</strong> VET-{Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                <strong>Emergency Contact:</strong> 1-800-VETPULSE
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-20">
      {/* Content starts below the global navbar */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Home Visit Request
          </h1>

          <Button variant="outline" size="sm" asChild>
            <Link to="/" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Request Home Visit</h1>
            <p className="text-xl text-gray-600">Professional veterinary care at your location</p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Comfort of Home</h3>
                <p className="text-sm text-gray-600">Reduce stress for your animal with familiar surroundings</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Professional Care</h3>
                <p className="text-sm text-gray-600">Licensed veterinarians with mobile equipment</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
                <p className="text-sm text-gray-600">Same-day and emergency appointments available</p>
              </CardContent>
            </Card>
          </div>

          {/* Form */}
          <Card className="shadow-2xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl">Home Visit Request Form</CardTitle>
              <CardDescription>Please provide the following information for your veterinary home visit</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Owner Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Owner Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="ownerName">Full Name *</Label>
                      <Input
                        id="ownerName"
                        placeholder="Enter your full name"
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

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-11"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="emergencyContact">Emergency Contact</Label>
                      <Input
                        id="emergencyContact"
                        placeholder="Emergency contact number"
                        value={formData.emergencyContact}
                        onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                        className="h-11"
                      />
                    </div>
                  </div>
                </div>

                {/* Address Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Address Information</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Street Address *</Label>
                      <Input
                        id="address"
                        placeholder="123 Main Street, Apt 4B"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="h-11"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          placeholder="Enter city"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="h-11"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="zipCode">ZIP Code *</Label>
                        <Input
                          id="zipCode"
                          placeholder="12345"
                          value={formData.zipCode}
                          onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                          className="h-11"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Animal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Animal Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="animalName">Animal Name *</Label>
                      <Input
                        id="animalName"
                        placeholder="Enter animal name"
                        value={formData.animalName}
                        onChange={(e) => setFormData({ ...formData, animalName: e.target.value })}
                        className="h-11"
                        required
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
                  </div>
                </div>

                {/* Symptoms & Urgency */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Symptoms & Urgency</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="symptoms">Current Symptoms *</Label>
                      <Textarea
                        id="symptoms"
                        placeholder="Describe the symptoms your animal is experiencing..."
                        value={formData.symptoms}
                        onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="urgency">Urgency Level *</Label>
                      <Select
                        value={formData.urgency}
                        onValueChange={(value) => setFormData({ ...formData, urgency: value })}
                      >
                        <SelectTrigger className="h-11">
                          <SelectValue placeholder="Select urgency level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="routine">🟢 Routine - Can wait 24-48 hours</SelectItem>
                          <SelectItem value="urgent">🟡 Urgent - Need within 12 hours</SelectItem>
                          <SelectItem value="emergency">🔴 Emergency - Need immediately</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Scheduling */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferred Scheduling</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">Preferred Date</Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="h-11"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">Preferred Time</Label>
                      <Select
                        value={formData.preferredTime}
                        onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}
                      >
                        <SelectTrigger className="h-11">
                          <SelectValue placeholder="Select preferred time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (8 AM - 12 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                          <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                          <SelectItem value="anytime">Anytime</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="space-y-2">
                  <Label htmlFor="additionalNotes">Additional Notes</Label>
                  <Textarea
                    id="additionalNotes"
                    placeholder="Any additional information, special instructions, or concerns..."
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                    className="min-h-[100px]"
                  />
                </div>

                {/* Checkboxes */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="homeVisit"
                      checked={formData.homeVisit}
                      onCheckedChange={(checked) => setFormData({ ...formData, homeVisit: checked })}
                    />
                    <Label htmlFor="homeVisit" className="text-sm">
                      I confirm this is a request for a home visit (additional travel fees may apply)
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    className="w-full h-14 text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting Request...
                      </>
                    ) : (
                      <>
                        <Calendar className="mr-2 h-5 w-5" />
                        Submit Home Visit Request
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Emergency Alert */}
          <Alert className="mt-8 border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              <strong>Emergency Situations:</strong> If your animal is experiencing severe distress, difficulty
              breathing, seizures, or life-threatening symptoms, please call our emergency line immediately at{" "}
              <Link to="/emergency" className="font-semibold underline">
                1-800-VETPULSE
              </Link>{" "}
              or visit the nearest emergency veterinary clinic.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  )
}