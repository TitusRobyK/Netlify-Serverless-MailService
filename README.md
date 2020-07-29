## Netlify Functions Starter Kit 

Hi there! This is a starter kit  repo to test out [Netlify’s Lambda Functions](https://www.netlify.com/docs/functions).

If you want your own copy to play around with, the quickest way to get it up
and running is clicking the Deploy to Netlify button below. It will clone
this repository into your own account, and deploy the site to Netlify.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/TitusRobyK/Netlify-Functions-Starter)

For an exhaustive understanding for the inner workings of a Netlify Function Refer https://docs.netlify.com/functions/build-with-javascript/

## Steps to run the repo in your local

To run the examples locally, here’s what you’ll need:

**System Requirements:**

* [git](https://git-scm.com)
* [NodeJS](nodejs.org) 8 or greater 

`cd` into your local copy of the repository and then follow the steps

```
cd Netlify-Functions-Starter
npm install
npm run lambda-serve
```
Invoke `localhost:9000/helloWorld` in your Rest Client or your Browser
