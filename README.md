Shared SDK Setup Guide

A modular and reusable SDK for the Bid-Scents Marketplace, built with TypeScript, Zustand, React Query, and Zod. This SDK provides stores, hooks, and utilities shared across web and mobile apps.

⸻

Quick Start

1. Clone and Initialize

git clone https://github.com/Shawarmaa/shared-sdk.git
cd shared-sdk
bun install  # or npm install

2. Build the SDK

bun run build

3. Regenerate the API (when backend is live)

bun run generate-api

⸻

Project Structure

shared-sdk/
├── src/
│   ├── api/                # OpenAPI-generated client
│   ├── config/             # Configuration
│   ├── stores/             # Zustand stores (auth, listings, etc.)
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility modules
│   ├── types/              # Shared types
│   └── index.ts            # Main SDK export
├── dist/                   # Compiled output (auto-generated)
├── tests/                  # Future tests
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md

⸻

Available Scripts

"scripts": {
  "build": "tsc",
  "dev": "tsc --watch",
  "clean": "rm -rf dist",
  "generate-api": "openapi-typescript-codegen --input http://localhost:3000/api-docs --output src/api",
  "prepublishOnly": "npm run clean && npm run build",
  "test": "echo \"No tests yet\" && exit 0"
}

⸻

Dependencies

Category	Packages
Core	zustand, zod, @tanstack/react-query
Peer	react >= 18.0.0
Dev	typescript, @types/react, @types/node, openapi-typescript-codegen

⸻

How It Works
	•	Zustand manages state (auth, listings, etc.)
	•	React Query can be used to handle remote data
	•	Zod handles runtime schema validation
	•	OpenAPI codegen auto-generates src/api client from your backend
	•	All modules are re-exported from src/index.ts for clean usage

⸻

Publishing

For scoped publishing to npm:

npm login
npm publish --access public

Make sure package.json has "name": "@bid-scents/shared-sdk" and correct main/types/files.

⸻

Final Notes

Use this SDK to abstract logic from your web and mobile apps. Keep stores small and focused, validate all inputs with Zod, and auto-generate API clients whenever your backend changes.