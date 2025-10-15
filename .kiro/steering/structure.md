# Project Structure

## Root Directory
```
├── .env.local              # Environment variables (Sanity credentials)
├── .env.local.example      # Environment template
├── package.json            # Dependencies and scripts
├── next.config.ts          # Next.js configuration
├── sanity.config.ts        # Sanity Studio configuration
├── sanity.cli.ts           # Sanity CLI configuration
├── tsconfig.json           # TypeScript configuration
├── postcss.config.mjs      # PostCSS/Tailwind configuration
├── eslint.config.mjs       # ESLint configuration
├── README.md               # Project documentation
└── SANITY_SETUP.md         # Sanity setup guide
```

## Source Structure (`src/`)
```
src/
├── app/                    # Next.js App Router
│   ├── studio/[[...tool]]/ # Embedded Sanity Studio
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   └── favicon.ico         # Site favicon
├── components/             # React components
│   ├── ui/                 # Reusable UI components
│   └── nav.tsx             # Navigation component
├── lib/                    # Utility libraries
│   ├── sanity.ts           # Sanity client configuration
│   └── utils.ts            # General utilities
└── sanity/                 # Sanity CMS configuration
    ├── env.ts              # Environment variables
    ├── structure.ts        # Studio structure
    ├── lib/                # Sanity utilities
    └── schemaTypes/        # Content schemas
```

## Key Conventions

### File Naming
- **Components**: PascalCase for component files (`NavBar.tsx`)
- **Pages**: lowercase for route files (`page.tsx`, `layout.tsx`)
- **Utilities**: camelCase for utility files (`utils.ts`)
- **Schemas**: camelCase for schema files

### Import Paths
- Use `@/` alias for src imports: `import { cn } from '@/lib/utils'`
- Relative imports for same-directory files
- Absolute imports for cross-directory references

### Component Organization
- **UI Components**: Reusable components in `src/components/ui/`
- **Feature Components**: Feature-specific components in `src/components/`
- **Layout Components**: App-wide layouts in `src/app/`

### Sanity Organization
- **Schemas**: Content type definitions in `src/sanity/schemaTypes/`
- **Structure**: Studio navigation in `src/sanity/structure.ts`
- **Client**: API client configuration in `src/lib/sanity.ts`

### Styling Approach
- **Tailwind Classes**: Primary styling method
- **CSS Modules**: For component-specific styles when needed
- **Global Styles**: In `src/app/globals.css`
- **Component Variants**: Using Class Variance Authority

## Environment Files
- `.env.local`: Local development environment variables
- `.env`: Shared environment variables (committed)
- Never commit sensitive credentials to version control