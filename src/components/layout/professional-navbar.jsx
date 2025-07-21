import React, { useState, useEffect } from "react"
import { Button } from "../../components/ui/button"
import { Badge } from "../../components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import {
  Heart,
  Stethoscope,
  Menu,
  X,
  ChevronDown,
  Brain,
  Home,
  AlertTriangle,
  TrendingUp,
  Users,
  Phone,
  Shield,
  Activity,
} from "lucide-react"
import { Link, useLocation } from "react-router-dom"

// This component is used globally in layout.tsx through the NavbarWrapper component
// It appears consistently across all pages except login and registration pages
const services = [
  {
    title: "AI Diagnosis",
    description: "Advanced disease prediction with 98.5% accuracy",
    href: "/diagnosis",
    icon: Brain,
  },
  {
    title: "Home Visits",
    description: "Professional veterinarians at your location",
    href: "/doctor-visit",
    icon: Home,
  },
  {
    title: "Emergency Care",
    description: "24/7 emergency veterinary support",
    href: "/emergency",
    icon: AlertTriangle,
  },
  {
    title: "Growth Plans",
    description: "Personalized animal development tracking",
    href: "/growth-plan",
    icon: TrendingUp,
  },
]

const resources = [
  {
    title: "Find Veterinarians",
    description: "Connect with certified professionals",
    href: "/veterinarians",
    icon: Users,
  },
  {
    title: "Health Records",
    description: "Manage animal health history",
    href: "/health-records",
    icon: Activity,
  },
  {
    title: "Admin Dashboard",
    description: "Practice management tools",
    href: "/admin",
    icon: Shield,
  },
]

export function ProfessionalNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const pathname = location.pathname
  // This component is now used globally in layout.tsx instead of individual pages
  // It provides consistent navigation across the entire application

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Effect to control body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    // Cleanup function to reset overflow when component unmounts or menu closes
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const isActive = (path) => pathname === path

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
        : "bg-white/80 backdrop-blur-sm border-b border-gray-100"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Heart className="w-5 h-5 text-white absolute" />
                <Stethoscope className="w-3 h-3 text-blue-200 absolute top-1.5 right-1.5" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                VetPulse AI
              </h1>
              <p className="text-xs text-gray-600 font-medium">AI-Powered Veterinary Care</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center space-x-1"
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 p-4" align="start">
                <DropdownMenuLabel className="text-lg font-semibold text-gray-900 mb-2">Our Services</DropdownMenuLabel>
                <div className="grid gap-3">
                  {services.map((service) => (
                    <DropdownMenuItem key={service.href} asChild>
                      <Link
                        to={service.href}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer"
                      >
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{service.title}</div>
                          <div className="text-sm text-gray-600">{service.description}</div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center space-x-1"
                >
                  <span>Resources</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 p-4" align="start">
                <DropdownMenuLabel className="text-lg font-semibold text-gray-900 mb-2">Resources</DropdownMenuLabel>
                <div className="grid gap-3">
                  {resources.map((resource) => (
                    <DropdownMenuItem key={resource.href} asChild>
                      <Link
                        to={resource.href}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer"
                      >
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <resource.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{resource.title}</div>
                          <div className="text-sm text-gray-600">{resource.description}</div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Direct Links */}
            <Link
              to="/veterinarians"
              className={`font-medium transition-colors duration-200 ${isActive("/veterinarians") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
            >
              Find Vets
            </Link>

            <Link
              to="/about"
              className={`font-medium transition-colors duration-200 ${isActive("/about") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
            >
              About
            </Link>

            {/* Emergency Badge */}
            <Link to="/emergency">
              <Badge className="bg-red-600 text-white hover:bg-red-700 transition-all duration-300 px-3 py-1.5 text-sm font-semibold rounded-full shadow-md hover:shadow-lg flex gap-1 flex-row items-center">
                <AlertTriangle className="w-3.5 h-3.5" />
                Emergency
              </Badge>
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="outline" className="font-medium bg-transparent" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link to="/register-animal">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-4 py-6 space-y-6">
              {/* Services Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Services</h3>
                <div className="space-y-3">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <service.icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{service.title}</div>
                        <div className="text-sm text-gray-600">{service.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Resources Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Resources</h3>
                <div className="space-y-3">
                  {resources.map((resource) => (
                    <Link
                      key={resource.href}
                      to={resource.href}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <resource.icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{resource.title}</div>
                        <div className="text-sm text-gray-600">{resource.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-3">
                <Link
                  to="/about"
                  className="block font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/emergency"
                  className="flex items-center space-x-2 text-red-600 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <AlertTriangle className="w-4 h-4" />
                  <span>Emergency Support</span>
                </Link>
              </div>

              {/* Mobile CTA Buttons */}
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <Button
                  variant="outline"
                  className="w-full font-medium bg-transparent"
                  asChild
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 font-medium"
                  asChild
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link to="/register-animal">Get Started</Link>
                </Button>
              </div>

              {/* Contact Info */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>24/7 Emergency: 1-800-VETPULSE</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}