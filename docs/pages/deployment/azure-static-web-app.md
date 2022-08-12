
# Preparing for Deployment on Azure Static Web App
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

## 3. Deployment of your project to Azure Static Web App
First you need to run your build process with `npm run build` command.
```
npm run build
```

### Pre-requisites
Make sure you have:
  - Azure account.
  - node installed in your machine.
  - created a Static Web App on Azure.

### Go to https://portal.azure.com/ to create a Static Web App on Azure  
a)  Deployment from Github Repository:   
#### select below configurations while creating Static Web App on Azure to setup Auto Deploy

- Source as a `Github` in Deployment details on create page
- connect github account
- select organization, repository and branch
- select `Custom` build Preset
- select App location as `/`
- select Output location as `dist` and Api location leave it blank


### References
  - [Static App Deploy Azure Static Web App](https://docs.microsoft.com/en-us/azure/static-web-apps/get-started-portal?tabs=angular&pivots=github)

## 4.  Deployed Url:
https://gentle-bush-08da5cf00.1.azurestaticapps.net/
