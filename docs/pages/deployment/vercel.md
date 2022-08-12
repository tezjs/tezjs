
# Preparing for Deployment on Vercel
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

## 3. Deployment of your project to Vercel
First you need to run your build process with `npm run build` command.
```
npm run build
```

### Pre-requisites
Make sure you have:
  - Need a vercel account.
  - To deploy your Tezjs project, make sure it has been pushed to a Git repository.

###  Go to Vercel dashboard for creating project: https://vercel.com/
  a) Create a new project in Vercel.\
  b) Import your git repository while creating that project.\
  c) Give the root directory: `dist` and Framework name: `vue.js` \
  d) Then you can deploy a TezJs project, with the following Deploy Button on vercel:

![image](https://user-images.githubusercontent.com/78401922/183408190-46829e89-ae6d-41fc-ac25-9366257908e3.png)

### References:
- [Vercel Docs](https://vercel.com/docs)
- [Vercel Deployment](https://vercel.com/guides/deploying-vuejs-to-vercel)


## 4.  Deployed Url:
https://tezjs-deploy-vercel.vercel.app/
