const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

const client = new SESClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: "",
    secretAccessKey: "",
  },
});

const createEmailParams = (content, to, subject) => {
  const params = {
    Destination: {
      CcAddresses: [],
      ToAddresses: [to],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: content,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
    },
    //@TODO: trocar email source pelo do Moderna
    Source: "plataformasolarsys@gmail.com",
    ReplyToAddresses: [],
  };

  return params;
};

async function sendEmail(params) {
  try {
    const data = await client.send(new SendEmailCommand(params));
    return data;
  } catch (e) {
    console.log(e.message);
  }
}

const emailParams = createEmailParams();
sendEmail(emailParams).then(() => {
  console.log("Email sent");
});
module.exports = { sendEmail, createEmailParams };
