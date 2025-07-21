import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Brain, Shield, Users, Award, Target, TrendingUp, ArrowLeft, CheckCircle, Star } from "lucide-react"

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Veterinary Officer",
    experience: "15+ years",
    specialty: "AI-Powered Diagnostics",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    name: "Dr. Michael Rodriguez",
    role: "Head of Technology",
    experience: "12+ years",
    specialty: "Machine Learning & AI",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    name: "Dr. Emily Johnson",
    role: "Director of Operations",
    experience: "10+ years",
    specialty: "Veterinary Practice Management",
    image: "/placeholder.svg?height=120&width=120",
  },
]

const achievements = [
  {
    icon: Award,
    title: "98.5% Accuracy Rate",
    description: "Industry-leading AI diagnostic accuracy",
    color: "text-blue-600",
  },
  {
    icon: Users,
    title: "50,000+ Animals Treated",
    description: "Comprehensive care across all species",
    color: "text-green-600",
  },
  {
    icon: Shield,
    title: "24/7 Emergency Support",
    description: "Round-the-clock veterinary assistance",
    color: "text-red-600",
  },
  {
    icon: Target,
    title: "500+ Certified Vets",
    description: "Network of qualified professionals",
    color: "text-purple-600",
  },
]

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-20">
      {/* Content starts below the global navbar */}

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About VetPulse AI</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing animal healthcare through advanced artificial intelligence, connecting pet owners with
            certified veterinary professionals for comprehensive, accessible, and intelligent care.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Target className="w-6 h-6 mr-3 text-blue-600" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                To democratize access to high-quality veterinary care by leveraging cutting-edge AI technology that
                empowers pet owners with instant health insights and connects them with certified veterinary
                professionals.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe every animal deserves the best possible care, regardless of location or time constraints. Our
                platform bridges the gap between pet owners and veterinary expertise through intelligent diagnostics and
                seamless care coordination.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <TrendingUp className="w-6 h-6 mr-3 text-green-600" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                To become the global leader in AI-powered veterinary care, creating a world where every animal has
                access to immediate, accurate health assessment and professional veterinary support.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We envision a future where technology and compassionate care work hand in hand to prevent diseases,
                optimize animal health, and strengthen the bond between humans and their animal companions.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Meet Our Leadership Team</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Our team combines decades of veterinary expertise with cutting-edge technology innovation
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-2">{member.experience}</p>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700">
                    {member.specialty}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Section */}
        <Card className="mb-16 shadow-lg border-0 bg-gradient-to-r from-blue-50 to-purple-50">
          <CardHeader>
            <CardTitle className="text-3xl text-center flex items-center justify-center">
              <Brain className="w-8 h-8 mr-3 text-blue-600" />
              Our Technology
            </CardTitle>
            <CardDescription className="text-center text-lg">
              Advanced AI and machine learning powering veterinary care
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">AI Diagnostic Engine</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">
                      Machine learning algorithms trained on millions of veterinary cases
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Real-time symptom analysis and pattern recognition</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Continuous learning from veterinary feedback</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Platform Features</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Secure, HIPAA-compliant data handling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">24/7 emergency response system</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">Integrated veterinarian network</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Compassionate Care</h3>
                <p className="text-gray-600">
                  Every decision we make is guided by our deep love and respect for animals and their wellbeing.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-8">
                <Brain className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We continuously push the boundaries of technology to improve animal healthcare outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-8">
                <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Trust & Reliability</h3>
                <p className="text-gray-600">
                  We maintain the highest standards of accuracy, security, and professional integrity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Veterinarians Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "VetPulse AI has revolutionized how I practice veterinary medicine. The diagnostic accuracy is
                  remarkable, and it helps me provide better care to my patients while saving valuable time."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">DR</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Dr. Rachel Martinez</div>
                    <div className="text-sm text-gray-600">Small Animal Veterinarian</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "The platform's emergency response system has been invaluable. I can quickly assess critical cases and
                  provide immediate guidance to pet owners, potentially saving lives."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">DT</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Dr. Thomas Anderson</div>
                    <div className="text-sm text-gray-600">Emergency Veterinarian</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience the Future of Veterinary Care?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of pet owners and veterinarians who trust VetPulse AI for comprehensive animal healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link to="/register-animal">Start Health Assessment</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                asChild
              >
                <Link to="/veterinarians">Find Veterinarians</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}