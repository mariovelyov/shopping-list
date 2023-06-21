## Shopping List App

This is a Shopping List web application built using React, TypeScript, Redux and GitHub Pages(gh-pages library). The app allows you to add products to a list, also update and remove them.

## Live demo

You can view a live demo of the project here: https://mariovelyov.github.io/shopping-list/

GitHub Pages is hosting the app and it is deployed directly from the GitHub repository thanks to gh-pages library.

## Features

Automatically generate a random list of products (5-15 elements) on initialization

Add products to the list with the desired amount

Update the product name and/or amount in the list

Remove products from the list

# How to build and deploy the app to GitHub Pages

Step 1 - Open terminal window and navigate to the root of the project

Step 2 - yarn build

Step 3 - yarn deploy

Step 4 - Check in the repository - Actions page if build and deploy completed successfully

# Dependencies

## React

React is a JavaScript library for building user interfaces. It is the core library used in this web application for structuring and rendering the UI.

## TypeScript

TypeScript is a superset of JavaScript that adds static types to the language. In this web application, TypeScript is used to ensure type safety and making the code more robust.

## Redux

Redux is a state management library that provides a centralized store for our application's state. It makes the state management more predictable. In this project, Redux is used to manage the list of products.

## Jest

Jest is a framework that allows us to write and execute tests for our code, while Testing Library is a set of tools that helps us test components in React. In this project, both technoligies are used to write and run tests.

## GitHub Pages

GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on GitHub, optionally runs the files through a build process, and publishes a website. In this project, the technology is used in order to deploy the application and provide a live demo.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
