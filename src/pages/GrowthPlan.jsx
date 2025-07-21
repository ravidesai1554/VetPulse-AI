import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Stethoscope,
  TrendingUp,
  Calendar,
  Apple,
  Syringe,
  Target,
  CheckCircle,
  Clock,
  Award,
  ArrowLeft,
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const weightData = [
  { month: "Jan", weight: 8.2, ideal: 8.5 },
  { month: "Feb", weight: 9.1, ideal: 9.2 },
  { month: "Mar", weight: 10.3, ideal: 10.1 },
  { month: "Apr", weight: 11.8, ideal: 11.2 },
  { month: "May", weight: 13.2, ideal: 12.5 },
  { month: "Jun", weight: 14.9, ideal: 14.0 },
];

const nutritionData = [
  { nutrient: "Protein", current: 85, target: 90 },
  { nutrient: "Carbs", current: 78, target: 80 },
  { nutrient: "Fats", current: 92, target: 85 },
  { nutrient: "Vitamins", current: 88, target: 95 },
  { nutrient: "Minerals", current: 82, target: 90 },
];

export default function GrowthPlan() {
  const [selectedAnimal, setSelectedAnimal] = useState("dog");
  const [selectedAge, setSelectedAge] = useState("puppy");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-20">
      {/* Content starts below the global navbar */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Growth Plan Dashboard
          </h1>
          
          <div className="flex items-center space-x-4">
            <Badge className="bg-green-100 text-green-800">
              <TrendingUp className="w-3 h-3 mr-1" />
              Growth Tracking Active
            </Badge>
            <Button variant="outline" size="sm" asChild>
              <Link to="/" className="flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Dashboard Content */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <p className="text-xl text-gray-600">AI-powered growth optimization and health tracking</p>
          </div>

          {/* Animal Selection */}
          <Card className="mb-8 shadow-lg border-0">
            <CardHeader>
              <CardTitle>Select Animal & Age Group</CardTitle>
              <CardDescription>Choose your animal type and life stage for personalized recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Animal Type</label>
                  <Select value={selectedAnimal} onValueChange={setSelectedAnimal}>
                    <SelectTrigger className="h-11">
                      <SelectValue />
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
                  <label className="text-sm font-medium text-gray-700">Life Stage</label>
                  <Select value={selectedAge} onValueChange={setSelectedAge}>
                    <SelectTrigger className="h-11">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="puppy">Puppy/Young (0-1 year)</SelectItem>
                      <SelectItem value="adult">Adult (1-7 years)</SelectItem>
                      <SelectItem value="senior">Senior (7+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Growth Charts */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                  Weight Growth Tracking
                </CardTitle>
                <CardDescription>Monitor weight progression vs. ideal growth curve</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={weightData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="weight" stroke="#3b82f6" strokeWidth={3} name="Actual Weight" />
                      <Line
                        type="monotone"
                        dataKey="ideal"
                        stroke="#10b981"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        name="Ideal Weight"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      <span>Actual Weight</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span>Ideal Range</span>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">On Track</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Apple className="w-5 h-5 mr-2 text-green-600" />
                  Nutrition Balance
                </CardTitle>
                <CardDescription>Current nutrition levels vs. recommended targets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={nutritionData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="nutrient" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="current" fill="#3b82f6" name="Current" />
                      <Bar dataKey="target" fill="#10b981" name="Target" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      <span>Current Levels</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span>Target Levels</span>
                    </div>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">Needs Adjustment</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recommendations Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Feed Plan */}
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-green-50 to-green-100">
                <CardTitle className="flex items-center text-green-900">
                  <Apple className="w-6 h-6 mr-2" />
                  Recommended Feed Plan
                </CardTitle>
                <CardDescription className="text-green-700">
                  Optimized nutrition for current growth stage
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold">High-Quality Puppy Food</h4>
                      <p className="text-sm text-gray-600">Premium protein blend</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">2.5 cups</p>
                      <p className="text-sm text-gray-600">Daily</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold">Calcium Supplement</h4>
                      <p className="text-sm text-gray-600">Bone development</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">1 tablet</p>
                      <p className="text-sm text-gray-600">With dinner</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold">Omega-3 Oil</h4>
                      <p className="text-sm text-gray-600">Coat & brain health</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">1 tsp</p>
                      <p className="text-sm text-gray-600">Mixed in food</p>
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <p className="text-sm text-green-800">
                      <strong>Feeding Schedule:</strong> 3 meals daily at 7 AM, 1 PM, and 6 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vaccination Schedule */}
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
                <CardTitle className="flex items-center text-blue-900">
                  <Syringe className="w-6 h-6 mr-2" />
                  Next Vaccination Schedule
                </CardTitle>
                <CardDescription className="text-blue-700">Upcoming immunizations and preventive care</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold">DHPP Booster</h4>
                      <p className="text-sm text-gray-600">Core vaccination</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-orange-600">Due in 2 weeks</p>
                      <p className="text-sm text-gray-600">March 15</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold">Rabies Vaccine</h4>
                      <p className="text-sm text-gray-600">Annual requirement</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-green-600">Completed</p>
                      <p className="text-sm text-gray-600">Feb 10</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold">Deworming</h4>
                      <p className="text-sm text-gray-600">Quarterly treatment</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-blue-600">Next month</p>
                      <p className="text-sm text-gray-600">April 1</p>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                    <Link to="/doctor-visit">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Appointment
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Milestone Tracker */}
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
                <CardTitle className="flex items-center text-purple-900">
                  <Target className="w-6 h-6 mr-2" />
                  Milestone Tracker
                </CardTitle>
                <CardDescription className="text-purple-700">Development milestones and achievements</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="font-medium">House Training</p>
                      <p className="text-sm text-gray-600">Completed at 4 months</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="font-medium">Basic Commands</p>
                      <p className="text-sm text-gray-600">Sit, Stay, Come mastered</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-orange-500" />
                    <div>
                      <p className="font-medium">Socialization</p>
                      <p className="text-sm text-gray-600">In progress - 75% complete</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Overall Development</span>
                      <span>82%</span>
                    </div>
                    <Progress value={82} className="h-2" />
                  </div>

                  <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                    <p className="text-sm text-purple-800">
                      <strong>Next Goal:</strong> Advanced training and leash walking
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Button
              className="h-14 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
              asChild
            >
              <Link to="/doctor-visit">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Check-up
              </Link>
            </Button>

            <Button variant="outline" className="h-14 border-2 hover:bg-gray-50 bg-transparent">
              <TrendingUp className="w-5 h-5 mr-2" />
              View Full Report
            </Button>

            <Button variant="outline" className="h-14 border-2 hover:bg-gray-50 bg-transparent">
              <Apple className="w-5 h-5 mr-2" />
              Nutrition Guide
            </Button>

            <Button variant="outline" className="h-14 border-2 hover:bg-gray-50 bg-transparent">
              <Award className="w-5 h-5 mr-2" />
              Training Tips
            </Button>
          </div>

          {/* Growth Insights */}
          <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-50 to-purple-50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-blue-600" />
                AI Growth Insights
              </CardTitle>
              <CardDescription>Personalized recommendations based on your animal's progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Excellent Weight Progress</h4>
                      <p className="text-sm text-gray-600">
                        Your puppy is maintaining ideal weight gain trajectory. Continue current feeding schedule.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-orange-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Nutrition Adjustment Needed</h4>
                      <p className="text-sm text-gray-600">
                        Consider increasing protein intake by 10% to support muscle development during growth spurt.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Vaccination On Schedule</h4>
                      <p className="text-sm text-gray-600">
                        All core vaccines are up to date. Next booster due in 2 weeks - reminder set.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-purple-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Development Milestone</h4>
                      <p className="text-sm text-gray-600">
                        Ready for advanced training. Consider enrolling in intermediate obedience classes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}