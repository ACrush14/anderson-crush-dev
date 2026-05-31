import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      // Permite dangerouslySetInnerHTML (usado no blog post)
      'react/no-danger': 'off',
      // Permite any implícito em casos pontuais
      '@typescript-eslint/no-explicit-any': 'warn',
      // Não força default export em todo arquivo
      'import/prefer-default-export': 'off',
    },
  },
];

export default eslintConfig;
