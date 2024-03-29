# Angular mqtt

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

Demo app using angular and mqtt together.

This project was generated with [swaaplate](https://github.com/inpercima/swaaplate) version 2.5.3.

## Prerequisites

### Angular CLI

* `@angular/cli 16.2.0` or higher

### Node, npm or yarn

* `node 18.16.0` or higher in combination with
  * `npm 9.5.1` or higher or
  * `yarn 1.22.19` or higher, used in this repository

## Getting started

```bash
# clone project
git clone https://github.com/inpercima/test-angular-mqtt/
cd test-angular-mqtt

# install tools and frontend dependencies
yarn
```

Create environment files for `development mode` and `production mode`.

```bash
cp src/environments/environment.ts src/environments/environment.dev.ts
cp src/environments/environment.ts src/environments/environment.prod.ts
```

**Note**: These files will not be under version control but listed in .gitignore.

## Usage

### Recommendation

It is recommanded to use a server to get full access of all angular.
For the other options your app should run on a server which you like.

### Run in development mode

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
# build in production mode, compressed
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
All defaults refer to the environment file (`environment.ts`), they are prepared in `development mode` (`environment.dev.ts`).
Change for `production mode` the option `production` to `true`.

### Table of contents

* [api](#api)
* [appname](#appname)
* [defaultRoute](#defaultroute)
* [mqtt/hostname](#mqtthostname)
* [mqtt/path](#mqttpath)
* [mqtt/port](#mqttport)
* [mqtt/topic](#mqtttopic)
* [production](#production)
* [theme](#theme)

### `api`

Defines the URL to the backend.

* default: `./`
* type: `string`

### `appname`

Applicationwide title of the app, displayed in title and toolbar.

* default: `Angular mqtt`
* type: `string`

### `defaultRoute`

The default route and the route to be redirected after a login if no route is stored or if a route does not exist.

* default: `dashboard`
* type: `string`

### `mqtt/hostname`

The mqtt server to connect.

* default: `test.mosquitto.org`
* type: `string`

### `mqtt/path`

The path of the mqtt server.

* default: `/mqtt`
* type: `string`

### `mqtt/port`

The port of the mqtt server.

* default: `8080`
* type: `number`

### `mqtt/topic`

The topic to be observed from the mqtt server.
To observe a topic you need the full path.

* default: `$SYS/broker/connection/mdh/state`
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
