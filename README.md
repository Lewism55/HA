# Ecommerce - H/A

This project is an ecommerce website built in React, using redux, react router and some bootstrap components.\
for styling, the SASS framework has been used to allow for more flexible css styling.

There is an MP4 file containing a small video of the base website available within the root folder of the repo

# repo structure

This repo represents only the frontend for the app. A seperate backend and DB was to be created, but progress was minimal.

## file structure

-public (base files from Create React App)
-src:
    -actions (redux actions)
    -API (intended folder for backend API integration)
    -components (frontend UI components, styles, assets and logic)
        -assets (image files)
        -basket (basket components)
        -blog (blog components)
        -carousel (carousel components)
        -products (product components)
        footer.jsx
        home-page.jsx
        main.jsx (actual container components for all other components)
        nav-bar.jsx
    -reducers (redux reducers)
    app.js (root file for react router and redux)
    index.js (root file for entire react app)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, assuming you have npm installed, run `npm install` to install the relevant dependencies required to run locally. 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
