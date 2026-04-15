# ignix-lite
 
A browser-native, agent-optimized UI library built for the AI-first era.
 
---
 
## Overview
 
ignix-lite is a lightweight UI component library designed primarily for AI agents (Copilot, Claude, Cursor) while remaining intuitive for human developers.
 
Unlike traditional UI libraries, ignix-lite is built with:
 
* Native HTML elements
* Minimal JavaScript
* Token-efficient API design
* MCP (Model Context Protocol) integration
 
---
 
## Key Features
 
*  **Browser-native components** (no class-based styling)
*  **Intent-driven API** using `data-intent`
*  **Optimized for AI-generated code**
*  **Ultra-lightweight (~8KB total)**
*  **Automatic dark mode (no JS)**
*  **Built-in MCP server for agent interaction**
 
---
 
## Core Principles
 
* **No class names** — ever
* **Native HTML first**
* **Token minimal design**
* **Agent-first architecture**
 
---
 
## Project Structure
 
```
packages/
  core/       # CSS + Web Components
  react/      # React adapter (planned)
  vue/        # Vue adapter (planned)
  svelte/     # Svelte adapter (planned)
  mcp/        # MCP server (agent integration)
 
devtools/     # Browser extension (planned)
docs/         # Documentation site
examples/     # Usage examples
```
 
---
 
## Tech Stack
 
* Turborepo + pnpm (monorepo)
* TypeScript (MCP + adapters)
* tsup (build system)
* ESLint + Prettier (code quality)
* Vitest (testing)
 
