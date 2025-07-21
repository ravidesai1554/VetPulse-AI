# VetCare Pro - Project Structure

## Visual Structure

```
VetCare Pro
│
├── 📁 public/                  # Static assets
│   ├── 🖼️ placeholder-logo.svg
│   ├── 🖼️ placeholder-user.jpg
│   └── 🖼️ placeholder.svg
│
├── 📁 src/                     # Source code
│   │
│   ├── 📁 app/                 # Next.js app router pages
│   │   ├── 📁 api/             # API routes
│   │   │   └── 📁 auth/        # Authentication API
│   │   ├── 📁 login/           # Login page
│   │   ├── 📁 diagnosis/       # Diagnosis pages
│   │   ├── 📁 health-records/  # Health records pages
│   │   ├── 📄 layout.jsx       # Root layout
│   │   └── 📄 page.jsx         # Home page
│   │
│   ├── 📁 components/          # Reusable UI components
│   │   ├── 📁 layout/          # Layout components
│   │   │   └── 📄 professional-navbar.jsx
│   │   ├── 📄 theme-provider.jsx
│   │   └── 📁 ui/              # UI components
│   │       ├── 📄 button.jsx
│   │       ├── 📄 card.jsx
│   │       └── 📄 ... (other UI components)
│   │
│   ├── 📁 hooks/               # Custom React hooks
│   │   ├── 📄 use-mobile.jsx
│   │   └── 📄 use-toast.js
│   │
│   ├── 📁 context/             # React context providers
│   │   ├── 📄 auth-context.jsx # Authentication context
│   │   └── 📄 index.jsx
│   │
│   ├── 📁 services/            # API services
│   │   ├── 📄 animal-service.js
│   │   ├── 📄 api-client.js
│   │   ├── 📄 auth-service.js
│   │   └── 📄 index.js
│   │
│   ├── 📁 utils/               # Utility functions
│   │   ├── 📄 date-utils.js
│   │   ├── 📄 index.js
│   │   └── 📄 string-utils.js
│   │
│   ├── 📁 lib/                 # Utility libraries
│   │   └── 📄 utils.js
│   │
│   ├── 📁 constants/           # Application constants
│   │   └── 📄 index.js
│   │
│   └── 📁 config/              # Configuration files
│       ├── 📄 index.js
│       └── 📄 site.js
│
├── 📄 jsconfig.json            # JavaScript configuration
├── 📄 next.config.mjs          # Next.js configuration
├── 📄 package.json             # Package dependencies
├── 📄 tailwind.config.js       # Tailwind CSS configuration
├── 📄 README.md                # Project documentation
└── 📄 QUICK-START.md           # Quick start guide
```

## Module Relationships

```
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│                 │      │                 │      │                 │
│  Components     │◄─────┤  Pages (app)    │◄─────┤  Services       │
│                 │      │                 │      │                 │
└────────┬────────┘      └────────┬────────┘      └────────┬────────┘
         │                        │                        │
         │                        │                        │
         ▼                        ▼                        ▼
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│                 │      │                 │      │                 │
│  Hooks          │◄─────┤  Context        │◄─────┤  Utils          │
│                 │      │                 │      │                 │
└─────────────────┘      └─────────────────┘      └─────────────────┘
```

## Key Directories Explained

### `/src/app`
Contains all the pages of the application using Next.js App Router. Each subdirectory represents a route in the application.

### `/src/components`
Reusable UI components organized by purpose:
- `layout`: Components for page layouts
- `ui`: Generic UI components like buttons, cards, etc.

### `/src/hooks`
Custom React hooks that encapsulate reusable stateful logic.

### `/src/context`
React context providers for state management across components.

### `/src/services`
API service modules for handling data fetching and manipulation.

### `/src/utils`
Utility functions for common operations like date formatting, string manipulation, etc.

### `/src/lib`
Shared libraries and utility functions.

### `/src/constants`
Application-wide constants and configuration values.

### `/src/config`
Configuration files for different aspects of the application.