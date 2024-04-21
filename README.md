# Setting up your first React app

We're going to use **Vite** to create a new application via the command line. Using Vite will allow you to spend more time building your app and less time fussing with setup.

## Requirements

In order to use Vite, you need to have [Node.js](https://nodejs.org/en/) installed.
It's a good idea to run the latest long term support (LTS) version when you can.

To check your version of Node, run the following in your terminal:

```BASH
node -v
```

If Node is installed, you'll see a version number. If it isn't, you'll see an error message. To install Node, follow the instructions on the [Node.js website](https://nodejs.org/en/)

We'll use **npm** as a package manager in these tutorials. Alternative is **Yarn** package manager.

If you're using Windows, you will need to install some software to give you parity with Unix/macOS terminal in order to use the terminal commands mentioned in this tutorial. **Gitbash** (which comes as part of the git for Windows toolset) or **Windows Subsystem for Linux (WSL)** are both suitable.

Also bear in mind that React and ReactDOM produce apps that only work on a fairly modern set of browsers like Firefox, Microsoft Edge, Safari, or Chrome when working through these tutorials.

## Initializing your app

The npm package manager comes with a `create` command that allows you to create new projects from templates. We can use it to create a new app from Vite's standard React template. Make sure you `cd` to the place you'd like your app to live on your machine, then run the following in your terminal:

```BASH
npm create vite@latest moz-todo-react -- --template react
```

This creates a `moz-todo-react` directory using Vite's `react` template.

>**Note**: The `--` is necessary to pass arguments to npm commands such as `create`, and the `--template react` argument tells Vite to use its React template.

Your terminal will have printed some messages if this command was successful. You should see text prompting you to `cd` to your new directory, install the app's dependencies, and run the app locally.

Let's start with two of those commands. Run the following in your terminal:

```BASH
cd moz-todo-react
```

```BASH
npm install
```

Once the process is complete, we need to start a local development server to run our app. Here, we're going to add some command line flags to Vite's default suggestion to open the app in our browser as soon as the server starts, and use port 3000.

Run the following in your terminal:

```BASH
npm run dev -- --open --port 3000
```

Once the server starts, you should see a new browser tab containing your React app.

## Application structure

Vite gives us everything we need to develop a React application. Its initial file structure looks like this:

```
moz-todo-react
├── README.md
├── index.html
├── node_modules
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── index.css
│   └── main.jsx
└── vite.config.js
```

`**index.html**` is the most important top-level file. Vite injects your code into this file so that your browser can run it. You won't need to edit this file during our tutorial, but you should change the text inside the `<title>` element in this file to reflect the title of your application. Accurate page titles are important for accessibility.

The `**public**` directory contains static files that will be served directly to your browser without being processed by Vite's build tooling. Right now, it only contains a Vite logo.

The `**src**` directory is where we'll spend most of our time, as it's where the source code for our application lives. You'll notice that some JavaScript files in this directory end in the extension .jsx. This extension is necessary for any file that contains JSX – it tells Vite to turn the JSX syntax into JavaScript that your browser can understand. The `src/assets` directory contains the React logo you saw in the browser.

The `package.json` and `package-lock.json` files contain metadata about our project. These files are not unique to React applications: Vite populated package.json for us, and npm created package-lock.json for when we installed the app's dependencies. You don't need to understand these files at all to complete this tutorial. However, if you'd like to learn more about them, you can read about `package.json` and `package-lock.json` in the npm docs. 

## Customizing our dev script

Before we move on, you might want to change your `package.json` file a little bit so that you don't have to pass the `--open` and `--port` flags every time you run `npm run dev`. Open `package.json` in your text editor and find the scripts object. Change the `"dev"` key so that it looks like this:

```DIFF
- "dev": "vite",
+ "dev": "vite --open --port 3000",
```

>**Note**: You don't need the extra `--` here because we're passing arguments directly to vite, rather than to a pre-defined npm script.

# Exploring our first React component — `<App />`

In React, a **component** is a reusable module that renders a part of our overall application. Components can be big or small, but they are usually clearly defined: they serve a single, obvious purpose.

Let's open `src/App.jsx`, since our browser is prompting us to edit it. This file contains our first component, `<App />`:

```JSX
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
```

The `App.jsx` file consists of three main parts: some `import` statements at the top, the `App()` function in the middle, and an `export` statement at the bottom. Most React components follow this pattern.

## Import statements

The import statements at the top of the file allow `App.jsx` to use code that has been defined elsewhere. Let's look at these statements more closely.

```JSX
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
```

The first statement imports the `useState` hook from the react library. Hooks are a way of using React's features inside a component.

After that, we import `reactLogo` and `viteLogo`. Note that their import paths start with `./` and `/` respectively and that they end with the `.svg` extension at the end. This tells us that these imports are local, referencing our own files rather than npm packages.

The final statement imports the CSS related to our `<App />` component. Note that there is no variable name and no `from` directive. This is called a [side-effect import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#import_a_module_for_its_side_effects_only) — it doesn't import any value into the JavaScript file, but it tells Vite to add the referenced CSS file to the final code output, so that it can be used in the browser.

## The `App()` function

After the imports, we have a function named `App()`, which defines the structure of the App component. Whereas most of the JavaScript community prefers lower camel case names like helloWorld, React components use Pascal case (or upper camel case) variable names, like HelloWorld, to make it clear that a given JSX element is a React component and not a regular HTML tag. If you were to rename the `App()` function to `app()`, your browser would throw an error.

Let's look at `App()` more closely.

```JSX
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
```
The `App()` function returns a JSX expression. This expression defines what your browser ultimately renders to the DOM. 

Just under the return keyword is a special bit of syntax: `<>`. This is a `fragment`. React components have to return a single JSX element, and fragments allow us to do that without rendering arbitrary `<div>`s in the browser. You'll see fragments in many React applications.

## The `export` statement

There's one more line of code after the App() function:

```JSX
export default App;
```

This export statement makes our `App()` function available to other modules. We'll talk more about this later.

## Moving on to main

Let's open src/main.jsx, because that's where the <App /> component is being used. This file is the entry point for our app, and it initially looks like this:

```JSX
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

As with `App.jsx`, the file starts by importing all the JS modules and other assets it needs to run.

The first two statements import the `React` and `ReactDOM` libraries because they are referenced later in the file. We don't write a path or extension when importing these libraries because they are not local files. In fact, they are listed as dependencies in our `package.json` file. Be careful of this distinction as you work through this lesson!

We then import our `App()` function and `index.css`, which holds global styles that are applied to our whole app.

We then call the `ReactDOM.createRoot()` function, which defines the root node of our application. This takes as an argument the DOM element inside which we want our React app to be rendered. In this case, that's the DOM element with an ID of root. Finally, we chain the `render()` method onto the `createRoot()` call, passing it the JSX expression that we want to render inside our root. By writing `<App />` as this JSX expression, we're telling React to call the `App()` function which renders the App component inside the root node.

>**Note**: `<App />` is rendered inside a special `<React.StrictMode>` component. This component helps developers catch potential problems in their code.

You can read up on these React APIs, if you'd like:

- ReactDOM.createRoot()
- React.StrictMode

## Deploying to github

1. Creating a repository.
2. Installing gh-pages
   ```BASH
   npm install --save-dev gh-pages
   ```
3. Editing config files

   - **Editing `package.json`**
  
   ```JSON
   {
        "homepage": "https://<GITHUB USERNAME>.github.io/<REPOSITORY NAME>",
        "name": "vite",
        ...,
        ...,
        "scripts": {
            "predeploy": "npm run build",
            "deploy": "gh-pages -d dist",
            "dev: "vite",
            ...,
            ...,
        },
        "dependencies": {
            ...
        }
    }
   ```

   - **Editing `vite.config.js`**
  
    ```JAVASCRIPT
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    // https://vitejs.dev/config/
    export default defineConfig({
        base: "/<REPOSITORY NAME>/"
        plugins: [react()],
    })
    ```

4. Adding project to Git repository

```BASH
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<GITHUB USERNAME>/<REPOSITORY NAME>.git
git push -u origin main
```

5. Deploying project

```BASH
npm run deploy
```

### Reference: [Deploy Vite React App on GitHub in 5 Steps(Link to a Youtube Video)](https://www.youtube.com/watch?v=oPuaMcLRYdY)

## How you can access this live website

<dl>
  Use the following URL:
  <dd>
    https://olumpeter.github.io/001-setting-up-your-first-react-app/
  </dd>
  or click the following link:
  <dd>
    <a href="https://olumpeter.github.io/001-setting-up-your-first-react-app/">Visit website</a>
  </dd>
</dl>
