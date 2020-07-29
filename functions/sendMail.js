const nodemailer = require("nodemailer");
const { MAIL_SERVICE, MAIL_HOST, MAIL_AUTH_USERNAME, MAIL_AUTH_PASSWORD } = process.env;

exports.handler = async (event, context, callback) => {
    console.log(process.env);
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: "Method Not Allowed",
            headers: { 
                'Allow': 'POST' 
            }
        };
    }

    let mailPayload = JSON.parse(event.body);

    if (!verifyReqestPayload(mailPayload)) {
        return {
            statusCode: 400,
            body: "Invalid Request Payload"
        };
    }

    let transporter = nodemailer.createTransport({
        service: `${MAIL_SERVICE}`,
        host: `${MAIL_HOST}`,
        auth: {
            user: `${MAIL_AUTH_USERNAME}`,
            pass: `${MAIL_AUTH_PASSWORD}`
        }
    });

    var mailOptions = {
        from: mailPayload.senderMailId,
        to: mailPayload.receiverMailId,
        subject: mailPayload.subject,
        text: mailPayload.mailContent
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Message sent successfully as %s', info.messageId);
    } catch (error) {
        return {
            statusCode: 500,
            body: "Service Unavailable " + error.message
        }
    }
    return {
        statusCode: 200,
        body: 'Email Sent Successfully'
    }
}

function verifyReqestPayload(requestBody) {
    if (requestBody) {
        if (requestBody.senderMailId && requestBody.subject && requestBody.mailContent) {
            return true;
        }
        return false;
    }
    return false;
}