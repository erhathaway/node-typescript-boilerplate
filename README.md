# node-typescript-boilerplate

[![Actions Status](https://github.com/erhathaway/node-typescript-boilerplate/workflows/Continous%20Integration/badge.svg)](https://github.com/erhathaway/node-typescript-boilerplate/actions)

![](https://api.dependabot.com/badges/status?host=github&repo=erhathaway/node-typescript-boilerplate)

Just a basic boilerplate for node projects

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
6. Run the example app `npm run start`
