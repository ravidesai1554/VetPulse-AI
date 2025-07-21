# VetCare Pro - Developer Guide

## Getting Started

This guide will help you understand the project structure and development workflow for VetCare Pro.

## Project Structure

VetCare Pro follows a clean, React-like structure with all source code organized in the `src` directory:

```
/src
├── app/                 # Next.js app router pages
├── components/          # Reusable UI components
├── hooks/               # Custom React hooks
├── context/             # React context providers
├── services/            # API services
├── utils/               # Utility functions
├── lib/                 # Utility libraries
├── constants/           # Application constants
└── config/              # Configuration files
```

For a more detailed view of the project structure, see `PROJECT-STRUCTURE.md`.

## Development Workflow

### Setting Up Your Development Environment

1. Clone the repository
2. Install dependencies:

```bash
npm install --legacy-peer-deps
```

### Running the Application

Use the `run.bat` script for a simple menu to run the application:

```bash
.\run.bat
```

Or use npm scripts directly:

```bash
# Start development server
npm run start:dev

# Clean and start development server
npm run dev:clean
```

### Code Organization

#### Pages

Pages are located in the `src/app` directory following Next.js App Router conventions:

- Each subdirectory represents a route
- `page.jsx` files define the content for each route
- `layout.jsx` files define the layout for routes
- `loading.jsx` files define loading states

#### Components

Components are organized in the `src/components` directory:

- `ui/`: Reusable UI components (buttons, cards, etc.)
- `layout/`: Layout components (navbar, sidebar, etc.)

#### State Management

State management is handled through React Context:

- Context providers are in `src/context`
- The main authentication context is in `src/context/auth-context.jsx`

#### API Services

API services are organized in the `src/services` directory:

- `api-client.js`: Base API client setup
- `auth-service.js`: Authentication-related API calls
- `animal-service.js`: Animal-related API calls

### Coding Standards

#### Naming Conventions

- **Files**: Use kebab-case for file names (e.g., `auth-service.js`)
- **Components**: Use PascalCase for component names (e.g., `Button.jsx`)
- **Functions**: Use camelCase for function names (e.g., `handleSubmit`)
- **Constants**: Use UPPER_SNAKE_CASE for constants (e.g., `API_ENDPOINTS`)

#### Code Formatting

Use Prettier to format your code:

```bash
npm run format
```

#### Linting

Use ESLint to check for code quality issues:

```bash
npm run lint
```

Fix linting issues automatically:

```bash
npm run lint:fix
```

### Adding New Features

1. **Create components**: Add new components in the appropriate directory
2. **Create pages**: Add new pages in the `src/app` directory
3. **Add services**: Add new API services in the `src/services` directory
4. **Update context**: Update context providers if needed

### Testing

Currently, the project does not have automated tests. Consider adding tests using Jest and React Testing Library.

## Deployment

To build the application for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Troubleshooting

### Common Issues

1. **Module not found errors**: Make sure the path aliases in `jsconfig.json` are correctly configured
2. **API errors**: Check that the API routes in `src/app/api/` are properly implemented
3. **Styling issues**: Verify that Tailwind CSS is properly configured

### Solutions

- Clear the `.next` cache: `npm run clean`
- Reinstall dependencies: `npm install --legacy-peer-deps`
- Check for JavaScript/TypeScript errors: `npm run lint`