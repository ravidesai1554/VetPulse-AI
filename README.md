# VetCare Pro

## Overview

VetCare Pro is a comprehensive veterinary management system designed to streamline pet healthcare operations. The application provides tools for managing animal records, diagnoses, appointments, and more.

## Project Structure

The project follows a clean, React-like structure:

```
/
├── public/                  # Static assets
├── src/                     # Source code
│   ├── app/                 # Next.js app router pages
│   │   ├── api/             # API routes
│   │   ├── login/           # Authentication pages
│   │   ├── dashboard/       # Dashboard pages
│   │   └── [other pages]/   # Other application pages
│   ├── components/          # Reusable UI components
│   │   ├── layout/          # Layout components
│   │   └── ui/              # UI components (buttons, cards, etc.)
│   ├── hooks/               # Custom React hooks
│   ├── context/             # React context providers
│   ├── services/            # API services
│   ├── utils/               # Utility functions
│   ├── lib/                 # Utility libraries
│   ├── constants/           # Application constants
│   └── config/              # Configuration files
├── .next/                   # Next.js build output
├── jsconfig.json            # JavaScript configuration
├── next.config.mjs          # Next.js configuration
└── [config files]           # Other configuration files
```

## Features

- **Authentication**: User registration and login
- **Animal Management**: Register and manage animal records
- **Health Records**: Track animal health history
- **Diagnosis**: Create and manage diagnoses
- **Appointments**: Schedule and manage veterinary appointments
- **Emergency Services**: Quick access to emergency care information

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Running the Application

You have several options to run the application:

#### Development Mode

```bash
npm run dev        # Start development server
npm run dev:clean  # Clean cache and start development server
```

#### Production Mode

```bash
npm run build      # Build for production
npm start          # Start production server
npm run start:prod # Build and start production server
```

#### Using the Start Script

For a more interactive experience, use:

```bash
.\start.bat
```

This provides a menu with options to start the application in different modes.

## Development Workflow

### Available Scripts

- `npm run clean` - Remove build artifacts
- `npm run lint` - Run linter
- `npm run lint:fix` - Run linter and fix issues
- `npm run format` - Format code with Prettier

## Toast Notification System

The application uses a toast notification system for user feedback. You can use the `useToast` hook to display notifications:

```javascript
import { useToast } from "@/hooks/use-toast";

const { toast } = useToast();

toast({
  title: "Success",
  description: "Operation completed successfully",
  variant: "success",
});
```

## Contributing

1. Make sure your code follows the project's coding standards
2. Run `npm run format` before committing changes
3. Test your changes thoroughly

## License

This project is licensed under the MIT License.