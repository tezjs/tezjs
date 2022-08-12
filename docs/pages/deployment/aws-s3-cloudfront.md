
# Preparing for Deployment on AWS3-Cloudfront
Setting up your tezjs project


## 1. Create your project
Start up creating a new tezjs project if you don't have one set up already.
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

tezjs-project will start locally on `http://localhost:3000`

## 3. Deployment of your project to AWS3-Cloudfront
First you need to run your build process with `npm run build` command.
```
npm run build
```

### Pre-requisites
Make sure you have:
  - AWS account
  - AWS-Cli install.
  - IAM-Account needed with s3 and cloudfront permission.
  - AWS need to configure.

### Go to https://aws.amazon.com/console to get started.

a) Create a S3 Bucket.\
b) Create a Cloufront which have a reference of bucket that you have see in previous step.\
c) Copy the dist to S3 bucket by using console or using given aws-cli command.
```
aws s3 cp dist/* [s3uri] --recursive
```
d) Create one purge or invalidation in Cloudfront service of path /* 
```
aws cloudfront create-invalidation --distribution-id [distributionId] --paths "/*"
```
### Reference link:
- [Deploy static site using s3 and cloudfront](https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-serve-static-website/#:~:text=To%20serve%20a%20static%20website%20hosted%20on%20Amazon%20S3%2C%20you,with%20anonymous%20(public)%20access%20allowed)
- [AWS-Cli install]( https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html )

## 4. Deployed Url:
https://d3kv2tw1u0hreu.cloudfront.net/


