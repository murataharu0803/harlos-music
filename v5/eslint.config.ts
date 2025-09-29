import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import parser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

// https://stackoverflow.com/questions/76707089/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reactRecommended = react.configs.recommended as any
reactRecommended.plugins = { react }
reactRecommended.languageOptions = { parserOptions: reactRecommended.parserOptions }
delete reactRecommended.parserOptions

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reactHooksRecommended = reactHooks.configs.recommended as any
reactRecommended.plugins = { react }
reactHooksRecommended.plugins = { react }
reactHooksRecommended.languageOptions = { parserOptions: reactHooksRecommended.parserOptions }
delete reactHooksRecommended.parserOptions
// End fix

export default tseslint.config(
  {
    ignores: ['node_modules', 'dist', 'docs'],
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactRecommended,
      reactHooks.configs.recommended,
    ],
    files: ['src/**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      ts: tseslint.plugin,
      '@stylistic': stylistic,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      react: react as any,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      'curly': ['warn', 'multi-or-nest'],
      'object-shorthand': ['warn', 'always'],
      'eqeqeq': ['warn', 'always'],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
      '@stylistic/max-len': ['warn', 100],
      '@stylistic/indent': ['warn', 2],
      '@stylistic/semi': ['warn', 'never'],
      '@stylistic/quotes': ['warn', 'single'],
      '@stylistic/comma-dangle': ['warn', 'always-multiline'],
      '@stylistic/arrow-parens': ['warn', 'as-needed'],
      '@stylistic/brace-style': ['warn', '1tbs', { allowSingleLine: true }],
      '@stylistic/multiline-ternary': ['off'],
      '@stylistic/no-multiple-empty-lines': ['off'],
      '@stylistic/space-before-function-paren': ['warn', 'never'],
      '@stylistic/object-curly-spacing': ['warn', 'always'],
      '@stylistic/eol-last': ['warn', 'always'],
      '@stylistic/space-infix-ops': ['warn'],
      '@stylistic/space-before-blocks': ['warn', 'always'],
      '@stylistic/keyword-spacing': ['warn'],
      '@stylistic/arrow-spacing': ['warn'],
      '@stylistic/key-spacing': ['warn', { 'mode': 'minimum' }],
      '@stylistic/comma-spacing': ['warn'],
      '@stylistic/no-trailing-spaces': ['warn'],
      '@stylistic/type-annotation-spacing': ['warn'],
      '@stylistic/member-delimiter-style': [
        'warn',
        {
          multiline: { delimiter: 'none' },
          singleline: { delimiter: 'comma', requireLast: false },
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
)
