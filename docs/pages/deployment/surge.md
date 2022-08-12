
# Preparing for Deployment on Surge
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

## 3. Deployment of your project to Surge
First you need to run your build process with `npm run build` command.
```
npm run build
```

### Pre-requisites
Make sure you have:
  - Surge cli install `npm install --global surge`
  - Surge account

### Go to Surge site by  https://surge.sh/
  a) Run the below command and provide the email and password for initiate
```
surge
```
  b) Give the build folder path like: `C:\\[folderPath]\dist` \
  c) Give the domain name you want like: `[your tezjs project name].surge.sh`
### References:
- [Surge Docs](https://surge.sh/)
- [Getting Started with Surge](https://surge.sh/help/getting-started-with-surge)
- [Deploy Static Side to Surge](https://www.howtogeek.com/devops/how-to-deploy-static-websites-for-free-with-surge-sh/)

## 4.  Deployed Url:
http://tezjs-deploy.surge.sh
