import storybook from "eslint-plugin-storybook";
import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,

  
  {
    files: ['**/*.js', '**/*.ts'],
  },

  
  {
    files: ['scripts/**/*.js'], 
    languageOptions: {
      globals: {
        require: 'readonly',
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
      }
    }
  },

  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.husky/**'
    ]
  },

  ...storybook.configs["flat/recommended"]
];