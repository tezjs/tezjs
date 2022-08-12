
# Preparing for Deployment on Render
Setting up your Tezjs project

## 1. Create your project
Start up creating a new Tezjs project if you don't have one set up already.
```
npm create tez@latest
```

It’ll ask for a project title or the name of the project’s directory. Continue following the prompts to choose your preferred framework and additional features.

Once everything is downloaded you will see a message with instructions for navigating to your project and running it locally.

## 2. Development of your Tezjs project
Start by going into the directory with:
```
cd [my tezjs-project]
```
Need to install dependencies via:
```
npm install
```

Start the local development server with:
```
npm run dev
```

Tezjs-project will start locally on `http://localhost:3000`

## 3. Deployment of your project to Render
First you need to run your build process with `npm run build` command.
```
npm run build
```

### Pre-requisites
Make sure you have:
  - Need to authrize with render account.
  - To deploy your Tezjs project, make sure it has been pushed to a Git repository.

### Go to render dashboard for creating project:  https://render.com/

  a) Create a new project in Render. \
  b) Connect your repository code with render app. \
  c) Give the build command - `npm run build`. \
  d) Give the build folder name - `dist`. \
  e) Click on the button - `Deploy Now`. 
  
### References:
 - [Renders Docs](https://render.com/docs/)
- [Render Deployments](https://render.com/docs/deploy-vue-js)
## 4.  Deployed Url:
https://tezjs-deploy-render.onrender.com/
