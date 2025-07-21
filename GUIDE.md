# VetCare Pro - Comprehensive Guide

## Folder Structure

The VetCare Pro application follows a clean and organized folder structure:

```
/
├── app/                     # Next.js app router pages
│   ├── api/                 # API routes
│   │   └── auth/            # Authentication API endpoints
│   ├── dashboard/           # Dashboard pages
│   ├── login/               # Login page
│   └── [other pages]/       # Other application pages
├── components/              # Reusable UI components
│   ├── ui/                  # UI components (buttons, cards, etc.)
│   └── [feature components] # Feature-specific components
├── context/                 # React context providers
│   └── auth-context.jsx     # Authentication context
├── hooks/                   # Custom React hooks
│   └── use-toast.ts         # Toast notification hook
├── services/                # API services
│   └── auth-service.js      # Authentication service
├── constants/               # Application constants
│   └── index.js             # Constants and configuration values
├── public/                  # Static assets
└── [config files]           # Configuration files
```

## Running the Application

You have several options to run the VetCare Pro application:

### Option 1: Using the Start Script (Recommended)

We've created a convenient start script that provides multiple options:

```
start.bat
```

This will present you with the following options:
1. Start development server
2. Build and start production server
3. Clean, build and start production server
4. Exit

### Option 2: Using npm Commands Directly

#### Development Mode

To run the application in development mode with hot-reloading:

```
npm run dev
```

#### Production Mode

To build and run the application in production mode:

```
npm run build
npm start
```

## Project Reorganization (Optional)

If you want to reorganize the project to follow a more structured approach, we've created scripts to help you:

```
reorganize.bat
```

This will:
1. Move files to a cleaner structure
2. Update configuration files
3. Add helpful npm scripts

See `REORGANIZE-README.md` for more details on the reorganization process.

## Key Features

- **Authentication**: User registration and login
- **Dashboard**: Main application interface
- **Toast Notifications**: User feedback system
- **Responsive Design**: Works on desktop and mobile devices

## Development Workflow

1. Make changes to the code
2. Test changes with `npm run dev`
3. Build for production with `npm run build`
4. Deploy the application

## Troubleshooting

### Common Issues

1. **Module not found errors**: Make sure the path aliases in `jsconfig.json` are correctly configured
2. **API errors**: Check that the API routes in `app/api/` are properly implemented
3. **Styling issues**: Verify that Tailwind CSS is properly configured

### Solutions

- Clear the `.next` cache: `rimraf .next`
- Reinstall dependencies: `npm install`
- Check for JavaScript/TypeScript errors: `npm run lint`