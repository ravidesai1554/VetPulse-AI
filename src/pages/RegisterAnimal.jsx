import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Loader2, Upload } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

export default function RegisterAnimal() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    breed: '',
    age: '',
    ageUnit: 'years',
    weight: '',
    weightUnit: 'kg',
    gender: '',
    temperature: '',
    symptoms: [],
    additionalNotes: '',
    image: null,
  })

  // Sample symptoms list
  const symptoms = [
    'Loss of appetite',
    'Lethargy',
    'Vomiting',
    'Diarrhea',
    'Coughing',
    'Sneezing',
    'Limping',
    'Excessive thirst',
    'Frequent urination',
    'Weight loss',
    'Difficulty breathing',
    'Skin irritation',
    'Eye discharge',
    'Ear infection',
    'Fever',
  ]

  const handleNext = () => {
    setCurrentStep(currentStep + 1)
  }

  const handleBack = () => {
    setCurrentStep(currentStep - 1)
  }

  const handleSymptomToggle = (symptom) => {
    if (formData.symptoms.includes(symptom)) {
      setFormData({
        ...formData,
        symptoms: formData.symptoms.filter((s) => s !== symptom),
      })
    } else {
      setFormData({
        ...formData,
        symptoms: [...formData.symptoms, symptom],
      })
    }
  }

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        image: e.target.files[0],
      })
    }
  }

  const handleSubmit = () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to results page or show success message
      window.location.href = '/prediction-results'
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-blue-600 border-blue-300 px-3 py-1">
                Step {currentStep} of 3
              </Badge>
            </div>
            <Link to="/" className="text-sm text-gray-500 hover:text-gray-700">
              Cancel
            </Link>
          </div>
          <Progress value={(currentStep / 3) * 100} className="h-2 bg-gray-200" />
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-8">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Register Your Animal</h1>
                <p className="text-gray-600">Enter basic information about your animal</p>
              </div>

              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                  <CardDescription>Fill in the details about your animal</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Enter animal name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-11"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="type">Animal Type *</Label>
                      <Select
                        value={formData.type}
                        onValueChange={(value) => setFormData({ ...formData, type: value })}
                      >
                        <SelectTrigger id="type" className="h-11">
                          <SelectValue placeholder="Select animal type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dog">Dog</SelectItem>
                          <SelectItem value="cat">Cat</SelectItem>
                          <SelectItem value="bird">Bird</SelectItem>
                          <SelectItem value="rabbit">Rabbit</SelectItem>
                          <SelectItem value="horse">Horse</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="breed">Breed</Label>
                      <Input
                        id="breed"
                        placeholder="Enter breed"
                        value={formData.breed}
                        onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                        className="h-11"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Age *</Label>
                      <div className="flex space-x-2">
                        <Input
                          placeholder="Age"
                          value={formData.age}
                          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                          className="h-11"
                          required
                        />
                        <Select
                          value={formData.ageUnit}
                          onValueChange={(value) => setFormData({ ...formData, ageUnit: value })}
                        >
                          <SelectTrigger className="h-11 w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="months">Months</SelectItem>
                            <SelectItem value="years">Years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Weight *</Label>
                      <div className="flex space-x-2">
                        <Input
                          placeholder="Weight"
                          value={formData.weight}
                          onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                          className="h-11"
                          required
                        />
                        <Select
                          value={formData.weightUnit}
                          onValueChange={(value) => setFormData({ ...formData, weightUnit: value })}
                        >
                          <SelectTrigger className="h-11 w-20">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kg">kg</SelectItem>
                            <SelectItem value="lbs">lbs</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Gender *</Label>
                      <Select
                        value={formData.gender}
                        onValueChange={(value) => setFormData({ ...formData, gender: value })}
                      >
                        <SelectTrigger className="h-11">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="temperature">Temperature (°C)</Label>
                    <Input
                      id="temperature"
                      placeholder="Enter temperature"
                      value={formData.temperature}
                      onChange={(e) => setFormData({ ...formData, temperature: e.target.value })}
                      className="h-11"
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                  disabled={!formData.name || !formData.type || !formData.age || !formData.weight || !formData.gender}
                >
                  Continue to Symptoms
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Symptoms */}
          {currentStep === 2 && (
            <div className="space-y-8">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Symptom Assessment</h1>
                <p className="text-gray-600">Select all symptoms that apply to your animal</p>
              </div>

              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Current Symptoms</CardTitle>
                  <CardDescription>
                    Check all symptoms your animal is currently experiencing. This helps our AI provide accurate
                    predictions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {symptoms.map((symptom) => (
                      <div
                        key={symptom}
                        className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${formData.symptoms.includes(symptom)
                            ? "border-blue-300 bg-blue-50"
                            : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                          }`}
                        onClick={() => handleSymptomToggle(symptom)}
                      >
                        <Checkbox
                          checked={formData.symptoms.includes(symptom)}
                          onChange={() => handleSymptomToggle(symptom)}
                        />
                        <span className="text-sm font-medium">{symptom}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      placeholder="Describe any other symptoms or observations..."
                      value={formData.additionalNotes}
                      onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                      className="min-h-[100px]"
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-between">
                <Button variant="outline" onClick={handleBack}>
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                >
                  Continue to Upload
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Image Upload & Submit */}
          {currentStep === 3 && (
            <div className="space-y-8">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Final Step</h1>
                <p className="text-gray-600">Upload an image and submit for AI analysis</p>
              </div>

              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Image Upload (Optional)</CardTitle>
                  <CardDescription>Upload a clear photo of your animal to help with visual analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <div className="space-y-2">
                      <p className="text-lg font-medium text-gray-700">
                        {formData.image ? formData.image.name : "Click to upload or drag and drop"}
                      </p>
                      <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Summary */}
              <Card className="shadow-lg border-0 bg-blue-50">
                <CardHeader>
                  <CardTitle>Registration Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p>
                        <strong>Name:</strong> {formData.name}
                      </p>
                      <p>
                        <strong>Type:</strong> {formData.type}
                      </p>
                      <p>
                        <strong>Age:</strong> {formData.age} {formData.ageUnit}
                      </p>
                      <p>
                        <strong>Weight:</strong> {formData.weight} {formData.weightUnit}
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong>Gender:</strong> {formData.gender}
                      </p>
                      <p>
                        <strong>Breed:</strong> {formData.breed || "Not specified"}
                      </p>
                      <p>
                        <strong>Temperature:</strong> {formData.temperature || "Not measured"}
                      </p>
                      <p>
                        <strong>Symptoms:</strong> {formData.symptoms.length} selected
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-between">
                <Button variant="outline" onClick={handleBack}>
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back
                </Button>
                <Button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing with AI...
                    </>
                  ) : (
                    <>
                      Submit for Analysis
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}