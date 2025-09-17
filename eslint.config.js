import jsdoc from 'eslint-plugin-jsdoc';
import tsdoc from 'eslint-plugin-tsdoc';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Ignore all JS files and the coverage folder
  {
    ignores: ['**/*.js', 'coverage/', 'dist/', 'node_modules', '.git'],
  },

  // Configure eslint for implementation files
  ...tseslint.configs.recommended,
  {
    rules: {
      // Typescript rules
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },

  // Configure tsdoc
  {
    files: ['src/**/*.ts'],
    plugins: { tsdoc, jsdoc, tseslint },
    rules: {
      'tsdoc/syntax': 'error',
      ...jsdoc.configs['flat/recommended-typescript-flavor-error'].rules,
      'jsdoc/require-description': 'error',
      'jsdoc/require-param-type': 'off',
      'jsdoc/require-jsdoc': [
        'off',
        {
          require: {
            FunctionDeclaration: true,
            FunctionExpression: true,
            MethodDefinition: true,
            ClassDeclaration: true,
            ClassExpression: true,
            ArrowFunctionExpression: true,
          },
          contexts: [
            'TSInterfaceDeclaration',
            'TSTypeAliasDeclaration',
            'TSEnumDeclaration',
            'TSPropertySignature',
          ],
          publicOnly: true,
        },
      ],
      'jsdoc/require-returns-type': 'off',
      'jsdoc/require-returns': 'off',
    },
  },

  // Configure eslint for test files
  {
    files: ['**/*.spec.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      jsdoc: 'off',
    },
  },
];
