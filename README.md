# Shared SDK Setup Guide

A modular and reusable SDK for the Bid-Scents Marketplace, built with TypeScript, Zustand, and Zod. This SDK provides stores, API clients, and utilities shared across web and mobile apps. React Query is used in the consuming applications for data fetching.

---

## Quick Start

### 1. Clone and Initialize
```bash
git clone https://github.com/BidScents/shared-sdk.git
cd shared-sdk
bun install  # or npm install
```

### 2. Build the SDK
```bash
bun run build
```

### 3. Regenerate the API (when backend is live)
```bash
bun run generate-api
```

---

## Project Structure

```
shared-sdk/
├── src/
│   ├── api/                # OpenAPI-generated client
│   ├── config/             # Configuration
│   ├── stores/             # Zustand stores (auth, listings, etc.)
│   ├── utils/              # Utility modules
│   ├── types/              # Shared types
│   └── index.ts            # Main SDK export
├── dist/                   # Compiled output (auto-generated)
├── tests/                  # Future tests
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

## Available Scripts

```json
"scripts": {
  "build": "tsc",
  "dev": "tsc --watch",
  "clean": "rm -rf dist",
  "generate-api": "openapi-typescript-codegen --input http://localhost:3000/api-docs --output src/api",
  "prepublishOnly": "bun run clean && bun run build",
  "test": "echo \"No tests yet\" && exit 0"
}
```

---

## Dependencies

| Category | Packages |
|----------|----------|
| **Core** | `zustand`, `zod` |
| **Peer** | `react >= 18.0.0` |
| **Dev** | `typescript`, `@types/react`, `@types/node`, `openapi-typescript-codegen` |

---

## How It Works

- **Zustand** manages client-side state (auth, listings, etc.)
- **Zod** handles runtime schema validation
- **OpenAPI codegen** auto-generates `src/api` client functions from your backend
- **React Query** is used in consuming apps to handle remote data fetching
- All modules are re-exported from `src/index.ts` for clean usage

## Usage in Apps

The SDK provides the building blocks, while apps handle data fetching:

```typescript
// In your web/mobile app
import { apiClient, authStore } from '@bid-scents/shared-sdk'
import { useQuery } from '@tanstack/react-query'

// App-specific React Query hooks
const useListings = () => {
  return useQuery({
    queryKey: ['listings'],
    queryFn: () => apiClient.getListings(),
    // App-specific configuration
  })
}

// Use SDK stores directly
const { user, login } = authStore()
```

---

## Publishing

For scoped publishing to npm:

```bash
bun login
bun publish --access public
```

Make sure `package.json` has `"name": "@bid-scents/shared-sdk"` and correct `main`/`types`/`files`.

---

## Final Notes

Use this SDK to abstract business logic and API clients from your web and mobile apps. Keep stores small and focused, validate all inputs with Zod, and auto-generate API clients whenever your backend changes. 

Apps should implement their own React Query hooks using the SDK's API client functions, allowing for app-specific caching strategies and data fetching patterns.
