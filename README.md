# node-typescript-boilerplate

[![Actions Status](https://github.com/erhathaway/node-typescript-boilerplate/workflows/Continous%20Integration/badge.svg)](https://github.com/erhathaway/node-typescript-boilerplate/actions)

![](https://api.dependabot.com/badges/status?host=github&repo=erhathaway/node-typescript-boilerplate)

A basic boilerplate for node projects

-   Typescript
-   Rollup
-   Jest
-   TSlint
-   Prettier

# About

-   Continuous Integration (CI) is done via [GitHub Actions](https://github.com/features/actions)
-   Testing supports Typescript
-   ESLint is configured to work with Typescript, Prettier, and Jest
-   Husky is added for git-hooks. The pre-commit hook checks similar things as the CI

# Usage

1. Edit the `package.json` file and specify project attributes. All of the following should be customized:

    - `name`
    - `version`
    - `description`
    - `repository`
    - `author`
    - `license`
    - `bugs`
    - `homepage`

2. Edit the `.github/CODEOWNERS` file and add your github user name

3. Edit the Continuous Integration badge in the `README.md`. [See the github docs on action badges](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/configuring-a-workflow#adding-a-workflow-status-badge-to-your-repository)
4. Edit (or delete) the Dependabot badge in the `README.md`. Use `<username>/<reponame>` syntax
5. Install the dependencies `npm install` or `yarn install`
6. Run a dev build of `src/index.ts` code with `npm run dev`
7. Build the code `npm run build`

# Building

This template supports building a distributable, a binary, and static js files from typescript files.

Building is done with `rollup`. You can edit

## Binaries

Binaries are built from the code that lives in `src/bin.ts`.

> Note: you might want to change the line in package.json

`"node-typescript-boilerplate": "./dist/bin.js"`

to:

`"[NAME OF SCRIPT]": "./dist/bin.js"`

## Distributable

The distributable is built from `src/index.ts`

If you are trying to publish a package for use by another codebase, you'll want to use this.

## Static

Sometimes you want to just transpile TS to JS. Files in here will appear in `dist/static`.
