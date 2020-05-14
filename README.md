# DX

My shared configs and developer experience helpers for my projects.

## Fish Shell Functions

My [custom functions](./packages/fish-functions) for the Fish Shell.

```
fisher add will-stone/dx/packages/fish-functions
```

## Configs

- [ESLint Config](./packages/eslint-config), npm:
  https://www.npmjs.com/package/@will-stone/eslint-config
- [Prettier Config](./packages/prettier-config), npm:
  https://www.npmjs.com/package/@will-stone/prettier-config

### Quick-setup

Run:

```bash
yarn add -D eslint @will-stone/eslint-config prettier @will-stone/prettier-config husky lint-staged
```

Package.json:

```jsonc
{
  "scripts": {
    "lint": "eslint . --ignore-path .gitignore"
  },
  "eslintConfig": {
    // eslint-config is the base JS config and should always be included.
    // The other configs can be used where appropriate.
    "extends": [
      "@will-stone/eslint-config",
      "@will-stone/eslint-config/node",
      "@will-stone/eslint-config/react",
      "@will-stone/eslint-config/jest",
      // If using TS and React, make sure TS config is included after React config.
      "@will-stone/eslint-config/typescript"
    ]
  },
  "prettier": "@will-stone/prettier-config",
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["eslint --fix"],
    "*.{css,json,md}": ["prettier --write"]
  }
}
```
