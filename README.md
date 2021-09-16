# Angular apollo graphql

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)
[![dependencies Status](https://status.david-dm.org/gh/inpercima/angular-apollo-graphql.svg)](https://david-dm.org/inpercima/angular-apollo-graphql)
[![devDependencies Status](https://status.david-dm.org/gh/inpercima/angular-apollo-graphql.svg?type=dev)](https://david-dm.org/inpercima/angular-apollo-graphql?type=dev)

Simple angular app working against the public api of angular.schule to learn apollo and graphql.

This project was generated with [swaaplate](https://github.com/inpercima/swaaplate) version 2.3.1.

## Prerequisites

### Angular CLI

* `angular-cli 12.2.5` or higher

### Node, npm or yarn

* `node 14.16.1` or higher in combination with
  * `npm 6.14.12` or higher or
  * `yarn 1.22.5` or higher, used in this repository

## Dependency check

Some libraries could not be updated b/c of peer dependencies or knowing issues.

| library    | current version | last version | reason |
| ---------- | --------------- | ------------ | ------ |
| rxjs       | 6.6.6           | 7.3.0        | "@angular/flex-layout@12.0.0-beta.34" has incorrect peer dependency "rxjs@^6.0.0" |
| typescript | 4.3.2           | 4.4.2        | "@angular-devkit/build-angular@12.2.5" has incorrect peer dependency "typescript@~4.2.3 \|\| ~4.3.2 |

## Getting started

```bash
# clone project
git clone https://github.com/inpercima/angular-apollo-graphql/
cd angular-apollo-graphql

# install tools and frontend dependencies
yarn
```

Create environment files for `devMode` and `prodMode`.

```bash
cp src/environments/environment.ts src/environments/environment.dev.ts
cp src/environments/environment.ts src/environments/environment.prod.ts
```

**Note**: These files will not be under version control but listed in .gitignore.

## Usage

### Recommendation

It is recommanded to use a server to get full access of all angular.
For the other options your app should run on a server which you like.

### Run in devMode

```bash
# build, reachable on http://localhost/app/path/to/dist/
yarn build:dev

# build and starts a server, rebuild after changes, reachable on http://localhost:4200/
yarn serve:dev

# build, rebuild after changes, reachable on http://localhost/app/path/to/dist/
yarn watch:dev
```

### Package

```bash
# build in prodMode, compressed
yarn build:prod
```

### Tests

```bash
# test
ng test

# e2e
ng e2e
```

## Configuration

### General

All options have to been set in the environment files but some of them do not need to be changed.
All defaults refer to the environment file (`environment.ts`), they are prepared in devMode (`environment.dev.ts`).
Change for prodMode the option `production` to `true`.

### Table of contents

* [api](#api)
* [appname](#appname)
* [defaultRoute](#defaultRoute)
* [production](#production)
* [theme](#theme)

### `api`

Defines the URL to the backend.

* default: `https://api.angular.schule/graphql/`
* type: `string`

### `appname`

Applicationwide title of the app, displayed in title and toolbar.

* default: `Angular apollo graphql`
* type: `string`

### `defaultRoute`

The default route and the route to be redirected after a login if no route is stored or if a route does not exist.

* default: `dashboard`
* type: `string`

### `production`

Defines whether the app is in production or not.

* default: `false`
* type: `boolean`
* values: `true`/`false`

### `theme`

Name of a build-in theme from angular-material or a custom light or dark theme.

* default: `indigo-pink`
* type: `string`
* values: `deeppurple-amber`/`indigo-pink`/`pink-bluegrey`/`purple-green`/`custom-light`/`custom-dark`

To create a custom light or dark theme just edit the colors and themes in `themes.scss`.
