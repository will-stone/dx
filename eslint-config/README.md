# ESLint Config

My personal [ESLint](https://eslint.org/) config.

## Usage

Install:

```bash
yarn add -D eslint @will-stone/eslint-config
```

Edit `package.json`:

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
  }
}
```

Run on commit:

```bash
yarn add -D husky lint-staged
```

Edit `package.json`:

```jsonc
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["eslint --fix"]
  }
}
```
