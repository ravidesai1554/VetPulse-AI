import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Heart, MapPin, Star, Clock, Phone, Calendar, Search, Filter, ArrowLeft } from "lucide-react"

const veterinarians = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    specialty: "Small Animal Medicine",
    rating: 4.9,
    reviews: 127,
    location: "Downtown Veterinary Clinic",
    distance: "2.3 miles",
    availability: "Available Today",
    experience: "15 years",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Emergency & Critical Care",
    rating: 4.8,
    reviews: 89,
    location: "24/7 Animal Hospital",
    distance: "3.1 miles",
    availability: "24/7 Emergency",
    experience: "12 years",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Exotic Animal Care",
    rating: 4.9,
    reviews: 156,
    location: "Specialized Exotic Clinic",
    distance: "4.7 miles",
    availability: "Next Available: Tomorrow",
    experience: "18 years",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Large Animal Medicine",
    rating: 4.7,
    reviews: 94,
    location: "Rural Veterinary Services",
    distance: "8.2 miles",
    availability: "Home Visits Available",
    experience: "20 years",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function Veterinarians() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-20">
      {/* Content starts below the global navbar */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Find Veterinarians
          </h1>
          
          <div className="flex items-center space-x-4">
            <Badge className="bg-green-100 text-green-800">500+ Certified Vets</Badge>
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
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Expert Veterinarians Near You</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Connect with certified veterinary professionals for consultations, home visits, and emergency care
          </p>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input placeholder="Search by location, specialty, or veterinarian name..." className="pl-10 h-12" />
              </div>
              <Button variant="outline" className="h-12 px-6 bg-transparent">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <Button className="h-12 px-8 bg-blue-600 hover:bg-blue-700">Search</Button>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {["Emergency Care", "Home Visits", "Small Animals", "Large Animals", "Exotic Pets", "Surgery"].map(
                (filter) => (
                  <Badge
                    key={filter}
                    variant="outline"
                    className="cursor-pointer hover:bg-blue-50 hover:border-blue-300"
                  >
                    {filter}
                  </Badge>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <div className="text-sm text-gray-600">Certified Veterinarians</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">24/7</div>
            <div className="text-sm text-gray-600">Emergency Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">95%</div>
            <div className="text-sm text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">1K+</div>
            <div className="text-sm text-gray-600">Home Visits Monthly</div>
          </div>
        </div>

        {/* Veterinarians List */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Available Veterinarians</h2>
            <div className="text-sm text-gray-600">Showing {veterinarians.length} of 500+ veterinarians</div>
          </div>

          <div className="grid gap-6">
            {veterinarians.map((vet) => (
              <Card key={vet.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Vet Image */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
                    </div>

                    {/* Vet Info */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{vet.name}</h3>
                          <p className="text-blue-600 font-medium mb-2">{vet.specialty}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                              <span className="font-medium">{vet.rating}</span>
                              <span className="ml-1">({vet.reviews} reviews)</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              <span>{vet.distance}</span>
                            </div>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{vet.experience} experience</span>
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <Badge
                            className={
                              vet.availability.includes("24/7")
                                ? "bg-red-100 text-red-800"
                                : vet.availability.includes("Today")
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                            }
                          >
                            {vet.availability}
                          </Badge>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-gray-600 text-sm mb-2">
                          <MapPin className="w-4 h-4 inline mr-1" />
                          {vet.location}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <Calendar className="w-4 h-4 mr-2" />
                          Book Appointment
                        </Button>
                        <Button variant="outline">
                          <Phone className="w-4 h-4 mr-2" />
                          Call Now
                        </Button>
                        <Button variant="outline">View Profile</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Load More Veterinarians
            </Button>
          </div>
        </div>

        {/* Emergency Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-red-900 mb-2">Emergency Care Available</h3>
              <p className="text-red-800 mb-6">
                Need immediate veterinary assistance? Our 24/7 emergency network is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-red-600 hover:bg-red-700" size="lg">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Emergency Line
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-red-300 text-red-700 hover:bg-red-50 bg-transparent"
                >
                  Find Emergency Clinic
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}