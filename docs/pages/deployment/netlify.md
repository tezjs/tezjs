
# Preparing for Deployment on Netlify
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

## 3. Deployment of your project to Netlify
First you need to run your build process with `npm run build` command.
```
npm run build
```

### Pre-requisites
Make sure you have:
  - Netlify account.
  - node installed in your machine.

### Go to https://www.netlify.com/ and login, create team. 
 a) Deploy manually from created dist:   
- Select add new site and choose deploy manually option from the sites page of Netlify team
- Upload dist folder which contains index.html.

 b) Import as existing project:
- Select source control option from provided
- Select repository 
- Basic Build setings are like select build command `npm run build` and select publish directory as `dist\`
- Select Deploy site


## 4.  Deployed Url:
 - https://deluxe-bublanina-c01717.netlify.app/
 - https://chimerical-gelato-c61c52.netlify.app/
