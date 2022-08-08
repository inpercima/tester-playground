# Test angular apollo graphql

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

Simple angular app working against the graphql `https://apollo-fullstack-tutorial.herokuapp.com/graphql` to check apollo and graphql.
This project shows how query, mutation and subscription work partially with `subscription-transport-ws` and `graphql-ws`.
The used endpoint seems not fully updated for `graphql-ws` so `subscription-transport-ws` is used as default.
In the environment variables you can choose the one or the other one library on startup.
Check the [configuration](#configuration).

This project was generated with [swaaplate](https://github.com/inpercima/swaaplate) version 2.3.7.

## Prerequisites

### Angular CLI

* `angular-cli 14.1.0` or higher

### Node, npm or yarn

* `node 16.16.0` or higher in combination with
  * `npm 8.12.2` or higher or
  * `yarn 1.22.19` or higher, used in this repository

## Getting started

```bash
# clone project
git clone https://github.com/inpercima/test-angular-apollo-graphql/
cd test-angular-apollo-graphql

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

### Graphql

```bash
# generate graphql schema from backend
yarn gql
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
* [wsType](#wsType)

### `api`

Defines the URL to the backend.

* default: `https://apollo-fullstack-tutorial.herokuapp.com/graphql`
* type: `string`

### `appname`

Applicationwide title of the app, displayed in title and toolbar.

* default: `Test angular apollo graphql`
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

### `wsType`

Name of the library to use for Websocket.

* default: `subscriptions-transport-ws`
* type: `string`
* values: `subscriptions-transport-ws`/`graphql-ws`
