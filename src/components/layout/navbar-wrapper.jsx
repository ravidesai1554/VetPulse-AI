import React from "react"
import { useLocation } from "react-router-dom"
import { ProfessionalNavbar } from "../layout/professional-navbar"

export function NavbarWrapper() {
  const location = useLocation()
  const pathname = location.pathname

  // Don't render navbar on login and registration pages
  if (pathname === "/login" || pathname === "/signup-demo" || pathname === "/signin-demo") {
    return null
  }

  // Render the professional navbar on all other pages
  return <ProfessionalNavbar />
}