
# Preparing for Deployment on Firebase Hosting
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

## 3. Deployment of your project to Firebase
First you need to run your build process with `npm run build` command.
```
npm run build
```

### Pre-requisites
Make sure you have:
  - Firebase account.
  - node installed in your machine.
  - created a firebase project.

### Go to https://console.firebase.google.com/ to create a firebase project 
1. Install the firebase-cli:
   ```
   npm install -g firebase-tools
   ```
2. Login into firebase by running this below command:
   ```
   firebase login
   ```
    You can test if the CLI is correctly installed by running `firebase projects:list`, which should show you a list of your Firebase Projects.     
3. Initialize the firebase using command:
   ```
   firebase init
   ```
5. Deploy the dist into firebase using command:
   ```
   firebase deploy
   ```
###  References:
  - [Firebase cli reference](https://firebase.google.com/docs/cli)
  - [Get Started with Firebase Hosting](https://firebase.google.com/docs/hosting/quickstart)

## 4.  Deployed Url:
 - https://tezjs-deploy-firebase.web.app/
