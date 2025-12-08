# ⚛️ vite-react-ts-tailwind-boilerplate (Clean & Organized)

This boilerplate provides a **robust, modern, and highly-optimized minimal setup** for developing **React** applications using **TypeScript**, **Vite**, and **Tailwind CSS**.

It has been **cleaned and reorganized** with a streamlined folder structure for immediate use.

---

## 📂 Project Structure Overview

The application follows a highly modular and organized structure, separating concerns into dedicated directories for better scalability and maintainability.

| Folder | Purpose |
| :--- | :--- |
| **`src/assets`** | Static files such as images, fonts, and global stylesheets. |
| **`src/components`** | Reusable UI components (e.g., `Button`, `Header`). |
| **`src/hooks`** | Custom React Hooks for encapsulating reusable logic (e.g., `useDebounce`). |
| **`src/middlewares`** | Logic executed before processing a request, typically for API interaction or state management side effects. |
| **`src/pages`** | Top-level components that represent full pages/views (e.g., `Home`, `Settings`). |
| **`routes.ts`** | Centralized configuration file for defining application routes. |
| **`main.tsx`** | The entry point for rendering the main React application. |

---

## ⚡️ Key Features & Performance

This project is configured with performance and developer experience as top priorities:

* **Vite:** Ultrafast build and dev server.
* **TypeScript:** Strong type safety for large-scale applications.
* **Hot Module Replacement (HMR):** Instantaneous updates during development.
* **React Compiler (Enabled):** Improves component performance by automatically memoizing prop dependencies.
    * **Note:** Enabling the React Compiler will slightly impact initial Vite dev and build performance.

### ⚙️ Vite Plugins for Fast Refresh

Vite offers two official plugins for React development, both enabling **Fast Refresh**:

| Plugin | Compiler Used | Primary Benefit |
| :--- | :--- | :--- |
| **`@vitejs/plugin-react`** | [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) in [rolldown-vite](https://vite.dev/guide/rolldown)) | Standard and widely supported. |
| **`@vitejs/plugin-react-swc`** | [SWC](https://swc.rs/) | Generally **faster** for larger projects. |

---

## 🔬 Expanding the ESLint Configuration

The project uses the modern **flat config format (`eslint.config.ts`)** and is set up for type-aware linting. For production applications, we highly recommend using the configurations below for maximum code quality.

### 1. Enabling Type-Aware Linting

To enforce stricter, type-checked rules in your **`eslint.config.ts`**, update your configuration to include the necessary settings and extend the type-checked recommended rules:

```js
// ... inside the configuration object for files: ['**/*.{ts,tsx}']
    extends: [
      // Other configs...
      
      // ✅ Recommended for all production apps (replaces tseslint.configs.recommended)
      tseslint.configs.recommendedTypeChecked, 
      
      // 🚨 Alternatively, use this for the *strictest* possible rules
      // tseslint.configs.strictTypeChecked,
      
      // ✨ Optionally, add this for stylistic rules
      // tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        // ESSENTIAL: These paths allow ESLint to use TypeScript's type information
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // ... other options
    },