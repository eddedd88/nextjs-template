import { fixupConfigRules } from '@eslint/compat'
import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

const eslintConfig = defineConfig([
  // Next's React/import plugins still use rule APIs removed in ESLint 10.
  ...fixupConfigRules([...nextVitals, ...nextTs]),
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'convex/_generated/**',
  ]),
])

export default eslintConfig
