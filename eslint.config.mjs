import globals from 'globals'
import js from '@eslint/js'

import pluginJest from 'eslint-plugin-jest'
import pluginN from 'eslint-plugin-n'
import pluginPromise from 'eslint-plugin-promise'
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  {
    ignores: ['**/coverage']
  },
  js.configs.recommended,
  {
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest
      }
    },

    plugins: {
      jest: pluginJest,
      n: pluginN
    },

    rules: {
      'no-unused-expressions': 0,
      'n/exports-style': ['error', 'module.exports']
    }
  },
  pluginPromise.configs['flat/recommended'],
  pluginPrettierRecommended
]
