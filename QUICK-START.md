# VetCare Pro - Quick Start Guide

## Running the Application

You have several options to run the VetCare Pro application:

### Option 1: Using npm start

```bash
# Start the development server (recommended for development)
npm run start:dev

# OR

# Start the production server (after building)
npm start
```

### Option 2: Using the Start Menu

For a more interactive experience, use the start script:

```bash
.\start.bat
```

This will present you with the following options:
1. Start development server
2. Build and start production server
3. Clean, build and start production server
4. Exit

### Option 3: Using Enhanced Scripts

```bash
# Clean cache and start development server
npm run dev:clean

# Clean, build and start production server
npm run start:clean
```

## Project Structure

The project follows a clean, React-like structure:

```
/
├── public/                  # Static assets
├── src/                     # Source code
│   ├── app/                 # Next.js app router pages
│   ├── components/          # Reusable UI components
│   ├── hooks/               # Custom React hooks
│   ├── context/             # React context providers
│   ├── services/            # API services
│   ├── utils/               # Utility functions
│   ├── lib/                 # Utility libraries
│   ├── constants/           # Application constants
│   └── config/              # Configuration files
└── [config files]           # Configuration files
```

## Development Workflow

1. Make changes to the code
2. Run the application with `npm run start:dev`
3. Test your changes
4. Format your code with `npm run format`
5. Build for production with `npm run build`

## Troubleshooting

If you encounter any issues:

1. Clear the cache: `npm run clean`
2. Reinstall dependencies: `npm install --legacy-peer-deps`
3. Check for JavaScript/TypeScript errors: `npm run lint`