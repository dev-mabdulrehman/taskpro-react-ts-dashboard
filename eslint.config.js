// eslint.config.ts
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default defineConfig([
	// 1. Ignore files
	globalIgnores(['dist', 'node_modules']),

	// 2. Configuration specific to TypeScript/React files
	{
		files: ['**/*.{ts,tsx}'],

		// Use typescript-eslint parser
		parser: tseslint.parser,

		// Set up advanced language options including type-aware settings
		languageOptions: {
			ecmaVersion: 2020,
			sourceType: 'module',
			globals: globals.browser,
			parserOptions: {
				// ESSENTIAL for type-aware linting
				project: ['./tsconfig.node.json', './tsconfig.app.json'],
				tsconfigRootDir: import.meta.dirname,
			},
		},

		// Extend advanced configurations
		extends: [
			js.configs.recommended,

			// ✅ Type-aware recommended rules (Replaces tseslint.configs.recommended)
			...tseslint.configs.recommendedTypeChecked,

			// ✅ Enable lint rules for modern React components
			reactX.configs['recommended-typescript'],

			// ✅ Enable lint rules for React DOM (accessibility, etc.)
			reactDom.configs.recommended,
		],

		rules: {
			// You can add/override custom rules here
			// For instance, turning off 'react-in-jsx-scope' is common for modern React builds
			'react-x/react-in-jsx-scope': 'off',

			// Recommended: Ensure exhaustive dependencies in hooks
			'react-x/exhaustive-deps': 'warn',
		},
	},
]);
