// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [js.configs.recommended, ...tseslint.configs.recommended, {
  files: ['**/*.js', '**/*.ts'],
}, {
  ignores: [
    '**/node_modules/**',
    '**/dist/**',
    '**/.husky/**'
  ]
}, ...storybook.configs["flat/recommended"]];
 