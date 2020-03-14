# React - Redux Kit

React Redux Kit is a react boilerplate application for building web apps using react, material-ui, redux, saga middleware, react-router and redux-persist. This kit serves as a starting point for creating complex single page apps for starters and helps to keep the best practices.

## Getting Started

These instructions helps you set up the app and get you going.

#### Requirements

- Operating System - Mac OS, Windows, or Linux
- Runtime environment - [NodeJS](https://nodejs.org/en/)
- Package manager - [Yarn](https://yarnpkg.com/)

#### 1. Clone the app

Start by cloning this app on your machine by running:

```
$ git clone https://github.com/tdshivendran/react-redux-kit.git
$ cd react-redux-kit
```

#### 2. Run `yarn install`

This installs all the dependencies in [package.json](./package.json) file

#### 3. Run `yarn start`

This command will build the app from the source files (`/src`). The app will be served on [http://localhost:3000/](http://localhost:3000/) after the build.

## App Layout

Before you start, take a moment to see how the project structure looks like:

```
.
├── /node_modules/              # 3rd-party libraries and utilities
├── /public/
├── /src/
│   ├── /app-core/              # Data store and side effects - redux, selectors saga middleware
│   ├── /app-ui/                # UI components and pages - React, material-ui
│   ├── /app-web/               # Containers and app routing - react-router, data props to UI

├── .eslintignore               # Linting ignore definitions
├── .eslintrc	                # Linting rules
├── .prettierrc	                # Prettier rules
├── package.json                # Reference for libraries and dependencies
└── yarn.lock                   # Locked versions of all the dependencies
```

## Other Links

- [Create React App](https://github.com/facebookincubator/create-react-app)
- [Redux](https://redux.js.org/docs/introduction/)
- [react-router](https://reacttraining.com/react-router/)
- [saga](https://redux-saga.js.org/docs/introduction/)
- [material-ui](http://www.material-ui.com/#/)

## Authors

- **[Shivendran Tiruchanpalli](https://github.com/tdshivendran)** ♥ Always awesome
