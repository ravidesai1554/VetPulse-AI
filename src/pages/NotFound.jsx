import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

/**
 * 404 Not Found page
 */
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="text-7xl font-bold text-gray-300 dark:text-gray-700">404</h1>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Page Not Found
          </h2>
          <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
          <Button asChild variant="default">
            <Link to="/">Go to homepage</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/veterinarians">Find a veterinarian</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}