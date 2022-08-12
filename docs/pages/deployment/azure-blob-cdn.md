
# Preparing for Deployment on Azure blob and cdn
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

## 3. Deployment of your project to Azure blob and cdn
First you need to run your build process with `npm run build` command.
```
npm run build
```

### Pre-requisites
Make sure you have:
  - Azure account.
  - Node installed in your machine.

### Go to https://www.portal.azure.com/ and login, create team. 

- Create Resource group and Storage account from Azure Portal
- Enable static website option from data management section
- Primary url get like https://tezjsblobcdn.z29.web.core.windows.net/
- Add index.html in Index document name of static website option from data management section
- Upload dist folder content to $web folder
- Select and configure Azure CDN option from Security + networking section
- Create new CDN Profile
- Select Origin hostname as a static web app


## 4.  Deployed Url:
https://tezjsblobcdn.azureedge.net/
