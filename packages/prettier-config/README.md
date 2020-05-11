# Prettier Config

My personal [Prettier](https://prettier.io) config.

## Usage

Install:

```bash
yarn add -D prettier @will-stone/prettier-config
```

Edit `package.json`:

```jsonc
{
  "prettier": "@will-stone/prettier-config"
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
    "*.{css,json,md}": ["prettier --write"]
  }
}
```