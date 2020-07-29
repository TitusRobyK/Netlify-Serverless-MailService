## Netlify Serverless Mail Service API 

If you want your own copy to play around with, the quickest way to get it up
and running is clicking the Deploy to Netlify button below. It will clone
this repository into your own account, and deploy the API to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/TitusRobyK/Netlify-Serverless-MailService)

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
Set the following Environment Variables in Netlify Environment UI Console
```
MAIL_SERVICE = gmail
MAIL_HOST= smtp.gmail.com
MAIL_AUTH_USERNAME = username@gmail.com
MAIL_AUTH_PASSWORD = mail_password
```
Invoke `localhost:9000/sendMail` in your Rest Client as POST Request with the following Request Payload 
```
{
    "senderMailId":"'User <no-reply@xyz.com>'",
    "subject":"Sending Email using Netlify Function API",
    "mailContent":"This is a Test Mail ... !",
    "receiverMailId":"xyz@abc.com"
}
```
