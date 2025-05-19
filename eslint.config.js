import eslintConfigPrettier from 'eslint-config-prettier/flat';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import js from '@eslint/js';

const noVars = [
  'error',
  {
    varsIgnorePattern: '^_',
    argsIgnorePattern: '^_',
  },
];

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintConfigPrettier,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-var': 'error',
      'no-await-in-loop': 'error',
      'no-empty': 'error',
      'prefer-spread': 'warn',
      curly: 'error',
      'no-func-assign': 'error',
      'no-irregular-whitespace': 'error',
      'require-await': 'error',
      camelcase: 'error',
      'no-unused-expressions': 'error',
      '@typescript-eslint/no-unused-vars': noVars,
      'no-unused-vars': noVars,
      'no-unused-labels': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
    },
  }
);

/* 

export default defineConfig([
  { files: ["***.{js,mjs,cjs,ts}"] },
  { files: ["***.{js,mjs,cjs,ts}"], languageOptions: { globals: globals.node } },
  { files: ["**d/*.{js,mjs,cjs,ts}"], plugins: { js }, extends: ["js/recommended"] },
  tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    ignores: [
      'node_modules',
      'lib',
    ]
  }, {
    extends: [
      tseslint.configs.recommended,
    ],
    rules: {
      'no-var': 'error',
      'no-await-in-loop': 'error',
      'no-empty': 'error',
      'prefer-spread': 'warn',
      curly: 'error',
      'no-func-assign': 'error',
      'no-irregular-whitespace': 'error',
      'require-await': 'error',
      camelcase: 'error',
      'no-magic-numbers': 'error',
      'no-unused-expressions': 'error',
      "@typescript-eslint/no-unused-vars": noVars,
      'no-unused-vars': noVars,
      'no-unused-labels': 'error',
      "no-console": ["error", { allow: ["warn", "error"] }]
    }
  }
]); */
