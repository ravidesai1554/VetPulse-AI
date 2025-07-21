# How to Run VetCare Pro

## Quick Start

To quickly set up and run the application, use the setup script:

```
setup-npm-start.bat
```

This will:
1. Update your package.json with enhanced start scripts
2. Provide options to start the development server immediately

## Running the Application

After setup, you can use any of these commands:

### Using npm

```
npm start           # Start the production server
npm run start:dev   # Start the development server (with hot reloading)
npm run start:prod  # Build and start the production server
```

### Using the Start Menu

For a more interactive experience, use:

```
start.bat
```

This provides a menu with options to:
1. Start development server
2. Build and start production server
3. Clean, build and start production server

## Folder Structure

The application follows a clean and organized structure:

```
/
├── app/                     # Next.js app router pages
│   ├── api/                 # API routes
│   ├── dashboard/           # Dashboard pages
│   ├── login/               # Login page
│   └── [other pages]/       # Other application pages
├── components/              # Reusable UI components
├── context/                 # React context providers
├── hooks/                   # Custom React hooks
├── services/                # API services
├── constants/               # Application constants
├── public/                  # Static assets
└── [config files]           # Configuration files
```

## Additional Resources

- For a comprehensive guide, see `GUIDE.md`
- For project reorganization options, see `REORGANIZE-README.md`

## Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are installed: `npm install`
2. Clear the Next.js cache: `rimraf .next` (if rimraf is installed) or `rm -rf .next`
3. Check for JavaScript/TypeScript errors: `npm run lint`