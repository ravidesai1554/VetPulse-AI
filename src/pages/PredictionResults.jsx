import React from 'react'
import { Link } from 'react-router-dom'
import {
  Heart,
  Stethoscope,
  CheckCircle,
  AlertTriangle,
  Download,
  Share,
  RotateCcw,
  Calendar,
  Pill,
  Apple,
  Syringe,
  TrendingUp,
  ArrowLeft,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function PredictionResults() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-20">
      {/* Content starts below the global navbar */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Diagnosis Report
          </h1>
          
          <div className="flex items-center space-x-4">
            <Badge className="bg-green-100 text-green-800">
              <CheckCircle className="w-3 h-3 mr-1" />
              Analysis Complete
            </Badge>
            <Button variant="outline" size="sm">
              <Link to="/" className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Link>
              </Button>
            </div>
          </div>
        </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Content Section */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <p className="text-xl text-gray-600">AI-powered health analysis for your animal</p>
          </div>

          {/* Main Diagnosis */}
          <Card className="mb-8 shadow-lg border-2 border-green-200 bg-gradient-to-r from-green-50 to-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl text-green-900">✅ Predicted Disease</CardTitle>
                  <CardDescription className="text-green-700">Primary diagnosis based on AI analysis</CardDescription>
                </div>
                <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">92.5% Confidence</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Gastroenteritis (Mild to Moderate)</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Based on the symptoms of loss of appetite, mild vomiting, and lethargy, your animal likely has
                    gastroenteritis. This is a common condition affecting the digestive system that typically responds
                    well to proper treatment and care.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Immediate Recommendations
                  </h4>
                  <ul className="text-blue-800 space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Withhold food for 12-24 hours to rest the digestive system
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Provide small amounts of water frequently to prevent dehydration
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Monitor closely for any worsening of symptoms
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Consult veterinarian if symptoms persist beyond 48 hours
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Treatment Plans Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Medicine Plan */}
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
                <CardTitle className="flex items-center text-purple-900">
                  <Pill className="w-6 h-6 mr-2" />💊 Medicine Plan
                </CardTitle>
                <CardDescription className="text-purple-700">Recommended medications and dosages</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-start p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">Metoclopramide</h4>
                      <p className="text-sm text-gray-600">Anti-nausea medication</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">0.5mg/kg</p>
                      <p className="text-sm text-gray-600">Twice daily</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-start p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">Probiotics</h4>
                      <p className="text-sm text-gray-600">Digestive support</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">1 capsule</p>
                      <p className="text-sm text-gray-600">Daily with food</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-start p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">Electrolyte Solution</h4>
                      <p className="text-sm text-gray-600">Hydration support</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">50ml</p>
                      <p className="text-sm text-gray-600">Every 2 hours</p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <p className="text-sm text-yellow-800">
                      <strong>Duration:</strong> 3-5 days or until symptoms resolve
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Diet Plan */}
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-green-50 to-green-100">
                <CardTitle className="flex items-center text-green-900">
                  <Apple className="w-6 h-6 mr-2" />🥗 Diet Plan
                </CardTitle>
                <CardDescription className="text-green-700">Nutritional recommendations for recovery</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-start p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">Bland Rice & Chicken</h4>
                      <p className="text-sm text-gray-600">Easy to digest protein</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">Small portions</p>
                      <p className="text-sm text-gray-600">3-4 times daily</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-start p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">Bone Broth</h4>
                      <p className="text-sm text-gray-600">Hydration & nutrients</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">100ml</p>
                      <p className="text-sm text-gray-600">Between meals</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-start p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">Pumpkin Puree</h4>
                      <p className="text-sm text-gray-600">Fiber & digestive aid</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">1-2 tbsp</p>
                      <p className="text-sm text-gray-600">Mixed with food</p>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="text-sm text-green-800">
                      <strong>Avoid:</strong> Fatty foods, dairy, treats, and regular kibble for 3-5 days
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vaccination Plan */}
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
                <CardTitle className="flex items-center text-blue-900">
                  <Syringe className="w-6 h-6 mr-2" />💉 Vaccination Plan
                </CardTitle>
                <CardDescription className="text-blue-700">Preventive care schedule</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-start p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">DHPP Booster</h4>
                      <p className="text-sm text-gray-600">Core vaccination</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">Due in 2 weeks</p>
                      <p className="text-sm text-gray-600">After recovery</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-start p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">Rabies Vaccine</h4>
                      <p className="text-sm text-gray-600">Annual requirement</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">Due in 3 months</p>
                      <p className="text-sm text-gray-600">Schedule ahead</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-start p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">Deworming</h4>
                      <p className="text-sm text-gray-600">Preventive treatment</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">Next month</p>
                      <p className="text-sm text-gray-600">Routine schedule</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> Wait until full recovery before administering vaccines
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Button
              className="h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            >
              <Link to="/doctor-visit">
                <Calendar className="w-5 h-5 mr-2" />
                Book Veterinarian
              </Link>
            </Button>

            <Button variant="outline" className="h-14 border-2 hover:bg-gray-50 bg-transparent">
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </Button>

            <Button variant="outline" className="h-14 border-2 hover:bg-gray-50 bg-transparent">
              <Share className="w-5 h-5 mr-2" />
              Share Results
            </Button>

            <Button variant="outline" className="h-14 border-2 hover:bg-gray-50 bg-transparent">
              <Link to="/register-animal">
                <RotateCcw className="w-5 h-5 mr-2" />
                Re-assess
              </Link>
            </Button>
          </div>

          {/* Additional Information */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                  Recovery Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">Day 1-2: Symptom monitoring</p>
                      <p className="text-sm text-gray-600">Rest and hydration focus</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">Day 3-5: Gradual improvement</p>
                      <p className="text-sm text-gray-600">Reintroduce bland diet</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">Day 6-7: Full recovery expected</p>
                      <p className="text-sm text-gray-600">Return to normal diet</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center text-red-900">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  When to Seek Emergency Care
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-red-800">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Persistent vomiting for more than 24 hours
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Signs of severe dehydration
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Blood in vomit or stool
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Extreme lethargy or collapse
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Difficulty breathing
                  </li>
                </ul>
                <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">
                  <Link to="/emergency">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Emergency Alert
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Disclaimer */}
          <Card className="mt-8 bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-yellow-900 mb-2">Important Medical Disclaimer</h3>
                  <p className="text-yellow-800 text-sm leading-relaxed">
                    This AI diagnosis is for informational purposes only and should not replace professional veterinary
                    care. The predictions are based on machine learning algorithms and symptom analysis. Always consult
                    with a licensed veterinarian for proper diagnosis, treatment, and medical advice. If your animal's
                    condition worsens or you have concerns, seek immediate veterinary attention.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}