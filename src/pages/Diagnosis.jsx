import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Heart, ArrowLeft, ArrowRight } from "lucide-react"

const animals = [
  { id: "dog", name: "Dog", icon: "🐕", description: "Canine health assessment" },
  { id: "cat", name: "Cat", icon: "🐱", description: "Feline health assessment" },
  { id: "cow", name: "Cow", icon: "🐄", description: "Bovine health assessment" },
  { id: "horse", name: "Horse", icon: "🐴", description: "Equine health assessment" },
  { id: "rabbit", name: "Rabbit", icon: "🐰", description: "Lagomorph health assessment" },
  { id: "sheep", name: "Sheep", icon: "🐑", description: "Ovine health assessment" },
  { id: "goat", name: "Goat", icon: "🐐", description: "Caprine health assessment" },
  { id: "pig", name: "Pig", icon: "🐷", description: "Porcine health assessment" },
]

export default function Diagnosis() {
  const [selectedAnimal, setSelectedAnimal] = useState(null)
  const [currentStep, setCurrentStep] = useState(1)

  const handleAnimalSelect = (animalId) => {
    setSelectedAnimal(animalId)
    setCurrentStep(2)
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      if (currentStep === 2) {
        setSelectedAnimal(null)
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-20">

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Diagnosis Progress</span>
            <span className="text-sm text-gray-500">{currentStep}/4</span>
          </div>
          <Progress value={(currentStep / 4) * 100} className="h-2" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {currentStep === 1 && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI-Powered Animal Health Diagnosis</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Select your animal type to begin the comprehensive health assessment with our advanced AI system
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {animals.map((animal) => (
                <Card
                  key={animal.id}
                  className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 border-2 hover:border-blue-300"
                  onClick={() => handleAnimalSelect(animal.id)}
                >
                  <CardHeader className="text-center">
                    <div className="text-6xl mb-4">{animal.icon}</div>
                    <CardTitle className="text-xl">{animal.name}</CardTitle>
                    <CardDescription>{animal.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                        AI-Optimized
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm border max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Why Choose Our AI Diagnosis?</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div>
                    <div className="font-medium text-blue-600">98% Accuracy</div>
                    <div>Advanced ML algorithms</div>
                  </div>
                  <div>
                    <div className="font-medium text-green-600">500+ Diseases</div>
                    <div>Comprehensive database</div>
                  </div>
                  <div>
                    <div className="font-medium text-purple-600">Instant Results</div>
                    <div>Real-time analysis</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && selectedAnimal && (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{animals.find((a) => a.id === selectedAnimal)?.icon}</div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {animals.find((a) => a.id === selectedAnimal)?.name} Health Assessment
              </h1>
              <p className="text-gray-600">
                Let's gather some basic information about your{" "}
                {animals.find((a) => a.id === selectedAnimal)?.name.toLowerCase()}
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Please provide the following details to personalize the diagnosis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pet Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter pet name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 3 years"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Breed</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter breed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Weight</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 25 lbs"
                    />
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg" onClick={() => setCurrentStep(3)}>
                  Continue to Symptoms <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {currentStep === 3 && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Symptom Assessment</h1>
              <p className="text-gray-600">
                Select all symptoms that apply to your pet. Our AI will analyze these to provide an accurate diagnosis.
              </p>
            </div>

            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Physical Symptoms
                    <Badge variant="outline">Select all that apply</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Loss of appetite",
                      "Vomiting",
                      "Diarrhea",
                      "Lethargy",
                      "Excessive thirst",
                      "Difficulty breathing",
                      "Limping",
                      "Fever",
                    ].map((symptom) => (
                      <label
                        key={symptom}
                        className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50 cursor-pointer"
                      >
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-sm">{symptom}</span>
                      </label>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Behavioral Changes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Hiding or withdrawal",
                      "Excessive vocalization",
                      "Aggression",
                      "Restlessness",
                      "Changes in sleep patterns",
                      "Excessive grooming",
                      "Loss of house training",
                      "Confusion",
                    ].map((symptom) => (
                      <label
                        key={symptom}
                        className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50 cursor-pointer"
                      >
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-sm">{symptom}</span>
                      </label>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Duration & Severity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How long have you noticed these symptoms?
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Select duration</option>
                      <option>Less than 24 hours</option>
                      <option>1-3 days</option>
                      <option>4-7 days</option>
                      <option>1-2 weeks</option>
                      <option>More than 2 weeks</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Severity Level</label>
                    <div className="flex space-x-4">
                      {["Mild", "Moderate", "Severe"].map((level) => (
                        <label key={level} className="flex items-center space-x-2">
                          <input type="radio" name="severity" className="text-blue-600 focus:ring-blue-500" />
                          <span className="text-sm">{level}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg" onClick={() => setCurrentStep(4)}>
                Analyze Symptoms with AI <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Diagnosis Complete</h1>
              <p className="text-gray-600">
                Our advanced AI has analyzed the symptoms and generated a comprehensive health assessment
              </p>
            </div>

            <div className="grid gap-6">
              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Primary Diagnosis</CardTitle>
                    <Badge className="bg-green-100 text-green-800">87% Confidence</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Gastroenteritis (Mild)</h3>
                      <p className="text-gray-600">
                        Based on the symptoms of loss of appetite, mild vomiting, and lethargy, your pet likely has mild
                        gastroenteritis. This is a common condition that typically resolves with proper care.
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-2">Recommended Actions:</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Withhold food for 12-24 hours</li>
                        <li>• Provide small amounts of water frequently</li>
                        <li>• Gradually reintroduce bland diet</li>
                        <li>• Monitor for improvement within 48 hours</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Treatment Plan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">Medication</span>
                        <Badge variant="outline">Optional</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">Diet Modification</span>
                        <Badge className="bg-orange-100 text-orange-800">Required</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">Rest & Monitoring</span>
                        <Badge className="bg-blue-100 text-blue-800">Essential</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Next Steps</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button className="w-full bg-transparent" variant="outline" asChild>
                        <Link to="/veterinarians">Consult Veterinarian</Link>
                      </Button>
                      <Button className="w-full bg-transparent" variant="outline">
                        Schedule Follow-up
                      </Button>
                      <Button className="w-full bg-transparent" variant="outline">
                        Download Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-yellow-50 border-yellow-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">!</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-yellow-900 mb-1">Important Notice</h3>
                      <p className="text-yellow-800 text-sm">
                        This AI diagnosis is for informational purposes only and should not replace professional
                        veterinary care. If symptoms persist or worsen, please consult with a licensed veterinarian
                        immediately.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}