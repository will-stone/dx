# Fish Functions

My custom functions for the Fish Shell.

## Install

With [fisherman]

```
fisher add will-stone/dx/packages/fish-functions
```

## Prompt

A practical Fish Shell prompt based on [Sindre Sorhus's famous Pure prompt].

![impure]

## `c`

A Fish Shell alias to Visual Studio Code's `code` command, with the addition
that running `c` without parameters opens the current directory in VSCode.

### Usage

```sh
c # code .
c ./dir/dir # code ./dir/dir
```

## `ls`

Wraps `ls` to show hidden files and folders by default.

### Usage

```sh
ls # ls -AFG
```

## `v`

Shows versions for commonly installed items.

### Usage

```sh
v

go    1.10.2
node  10.8.0
npm   6.3.0
ruby  2.5.1
yarn  1.9.1
```

[fisherman]: https://github.com/jorgebucaran/fisher
[impure]: ./screenshot.png
[sindre sorhus's famous pure prompt]: https://github.com/sindresorhus/pure
