"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Users, Activity, Shield } from "lucide-react"
import Link from "next/link"

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

export function ResourcesDropdown() {
  return (
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
            <DropdownMenuItem key={resource.title} asChild>
              <Link
                href={resource.href}
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
  )
}