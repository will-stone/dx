# DX

My shared configs and developer experience helpers for my projects.

## Configs

- ESLint Config: https://www.npmjs.com/package/@will-stone/eslint-config
- Prettier Config: https://www.npmjs.com/package/@will-stone/prettier-config

### Quick Setup

Run:

```bash
npm i -D eslint @will-stone/eslint-config prettier @will-stone/prettier-config husky pinst lint-staged
```

Package.json:

```jsonc
{
  "scripts": {
    "lint": "eslint . --ignore-path .gitignore",
    "postinstall": "husky install",
    "prepublishOnly": "pinst --disable",
    "postpublish": "pinst --enable"
  },
  "eslintConfig": {
    "extends": [
      // There are two base configs to choose from.
      "@will-stone/eslint-config/javascript",
      "@will-stone/eslint-config/typescript",

      // You can then add the specific linting configs for the tools you are using
      "@will-stone/eslint-config/react",
      "@will-stone/eslint-config/node",
      "@will-stone/eslint-config/jest"
    ]
  },
  "prettier": "@will-stone/prettier-config",
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["eslint --fix"],
    "*.{css,json,md}": ["prettier --write"]
  }
}
```

Then run the following to setup the Husky git-hook:

```bash
npx husky add .husky/pre-commit "npx --no lint-staged"
```
