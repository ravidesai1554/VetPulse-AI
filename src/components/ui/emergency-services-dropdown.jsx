"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Brain, Home, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

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
    title: "Growth Plans",
    description: "Customized nutrition and development plans",
    href: "/growth-plan",
    icon: TrendingUp,
  },
  {
    title: "Find Veterinarians",
    description: "Connect with specialists in your area",
    href: "/veterinarians",
    icon: Users,
  },
]

export function EmergencyServicesDropdown() {
  return (
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
            <DropdownMenuItem key={service.title} asChild>
              <Link
                href={service.href}
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
  )
}