# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Build & Development
- `npm run dev` - Start development server on port 3000 with hot reload
- `npm run build:prod` - Production build 
- `npm run build:dev` - Development build

### Testing
- `npm run unit` - Run all Jest unit tests
- `npm run unit -- --testPathPattern=<pattern>` - Run specific tests matching pattern

### Code Quality
- `npm run lint:ts` - Run ESLint on TypeScript files
- `npm run lint:ts:fix` - Auto-fix ESLint issues

### Storybook
- `npm run storybook` - Start Storybook dev server on port 6006
- `npm run build-storybook` - Build Storybook for production

## Project Architecture

This project follows Feature-Sliced Design (FSD) architecture with the following structure:

### Layer Structure
- **app/** - Application initialization, providers, global styles
- **pages/** - Route-level pages with lazy loading
- **widgets/** - Complex UI components (Navbar, Sidebar, etc.)
- **shared/** - Reusable utilities, UI components, configurations

### Key Architectural Patterns

#### Import Resolution
- Uses absolute imports via TypeScript path mapping (`baseUrl: "."`, `paths: {"*": ["./src/*"]}`)
- Import from layers: `import { Component } from 'widgets/Component'`

#### Theme System
- CSS custom properties with SCSS variables in `app/styles/themes/`
- Theme context provider with localStorage persistence
- Theme enum: `Theme.LIGHT` | `Theme.DARK`
- ThemeSwitcher widget toggles themes

#### Styling Convention
- CSS Modules for component styles (`.module.scss`)
- Global styles in `app/styles/`
- Utility function `classNames(base, mods, additional)` for conditional classes

#### Internationalization
- i18next with namespace-based translations
- Translation files in `public/locales/[lang]/[namespace].json`
- Browser language detection enabled
- Backend loading from `/locales/{{lng}}/{{ns}}.json`

#### Routing
- React Router v6 with enum-based route configuration
- Route config in `app/providers/router/ui/routeConfig.tsx`
- Lazy-loaded pages with Suspense boundaries

#### Testing Setup
- Jest with TypeScript support via babel-jest
- CSS modules mocked with identity-obj-proxy
- SVG files mocked with custom empty component
- setupTests.ts for global test configuration

### Component Structure Pattern
Each UI component follows this structure:
```
Component/
├── index.tsx (barrel export)
├── ui/
│   ├── Component.tsx
│   ├── Component.module.scss
│   ├── Component.stories.tsx (if applicable)
│   └── Component.test.tsx (if applicable)
```

### Error Boundaries
- Global error boundary in app providers
- BugButton component for testing error boundaries in development

### Development Notes
- Uses __IS_DEV__ global for development-specific code
- Webpack configuration supports custom build environments
- Storybook configured with custom decorators for theming