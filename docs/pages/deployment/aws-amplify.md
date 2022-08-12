
# Preparing for Deployment on Amplify
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
```terminal
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

## 3. Deployment of your project to Amplify
First you need to run your build process with `npm run build` command.
```
npm run build
```

### Pre-requisites
Make sure you have:
  - AWS account
  - AWS-Cli install.
  - IAM-Account needed with amplify permission.
  - AWS need to configure.
  - Create a zip of dist folder.
  - Keep that zip in local or push that zip on any s3 bucket.

### Go to https://aws.amazon.com/amplify/console/ to get started.

  a) Create a hosting web app on amplify:
  ```
  aws amplify create-app --name <projectName>
  ```
  b) Create a environment name on that created app:
  ```
  aws amplify create-branch --app-id [appId] --branch-name [branchName]
  ```
  c) Deploy created zip on amplify using aws cli:
  ```
  aws amplify start-deployment --app-id [appId] --branch-name [branchName] --source-url [s3bucket url]
  ```
  
### References:
 - [Manual deploy to Amplify](https://docs.aws.amazon.com/amplify/latest/userguide/manual-deploys.html)
## 4.  Deployed Url:
https://dev.dz3btwpjryh1f.amplifyapp.com
