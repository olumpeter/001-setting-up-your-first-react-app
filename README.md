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


## Deploying to github

### Reference: [Deploy Vite React App on GitHub in 5 Steps(Link to a Youtube Video)](https://www.youtube.com/watch?v=oPuaMcLRYdY)