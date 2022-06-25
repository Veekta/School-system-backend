const { google } = require("googleapis");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const CLIENT_ID =
  "428581574814-4k3k7cffju68ecp7354edde8qit1areg.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const CLIENT_REDIRECT = "https://developers.google.com/oauthplayground";
const CLIENT_TOKEN =
  "1//04cBUV6HZTt_ACgYIARAAGAQSNwF-L9Ir3pm5uLRde4lRcuV5A5AKlbpB49gnN8mwGZAr0QrY157QBGjbcyGwfxGuh7zuMrNDzW8";

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  CLIENT_REDIRECT
);
oAuth2Client.setCredentials({ refresh_token: CLIENT_TOKEN });

//Admin
const verifiedMail = async (email, user) => {
  try {
    const getToken = crypto.randomBytes(10).toString("hex");
    const token = jwt.sign({ getToken }, "ThisIsTheCode");

    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "skoolkodecodelab@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refresh_token: CLIENT_TOKEN,
        accessToken: accessToken.token,
      },
    });

    const mailOptions = {
      from: "Skuul ✉️ <skoolkodecodelab@gmail.com",
      to: email,
      subject: "Account Verification",
      html: `
            <h3>
                This mail, is for account verification... Please use the <a
                href="http://localhost:3000/api/admin/${user}/${token}"
                >Link to Finish</a> up your account creation 
            </h3>
            `,
    };

    const result = transport.sendMail(mailOptions, (info, error) => {
      if (error) {
        console.log(error);
      } else {
        console.log(info.response);
      }
    });
    return result;
  } catch (error) {
    return error;
  }
};
const reSendMail = async (email, user, code) => {
  try {
    const getToken = crypto.randomBytes(10).toString("hex");
    const token = jwt.sign({ getToken }, "ThisIsTheCode");

    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "skoolkodecodelab@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refresh_token: CLIENT_TOKEN,
        accessToken: accessToken.token,
      },
    });

    const mailOptions = {
      from: "Skuul ✉️ <skoolkodecodelab@gmail.com>",
      to: email,
      subject: "Account re-Verification",
      html: `
<h3>
    This mail, is for account verification... Please use the <a
    href="http://localhost:3000/api/admin/${user._id}/${code.split(" ")[-1]}"
    >Link to Finish</a> up your account creation 
</h3>
`,
    };

    const result = transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
};
const resetMail = async (email, user) => {
  try {
    const getToken = crypto.randomBytes(10).toString("hex");
    const token = jwt.sign({ getToken }, "ThisIsTheCode");

    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "skoolkodecodelab@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refresh_token: CLIENT_TOKEN,
        accessToken: accessToken.token,
      },
    });

    const mailOptions = {
      from: "Skuul ✉️ <skoolkodecodelab@gmail.com>",
      to: email,
      subject: "Reset Password Request",
      html: `
    <h3>
        This mail, is sent because you requested for a password reset... Please use the <a
        href="http://localhost:3000/api/admin/reset/${user._id}/${token}"
        >Link to Finish</a> up your password reset request!  
    </h3>
    `,
    };

    const result = transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
};
const verifiedTeacherMail = async (email, newTeacher, code) => {
  try {
    const getToken = crypto.randomBytes(10).toString("hex");
    const token = jwt.sign({ getToken }, "ThisIsTheCode");

    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "skoolkodecodelab@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refresh_token: CLIENT_TOKEN,
        accessToken: accessToken.token,
      },
    });

    const mailOptions = {
      from: "Skuul ✉️ <skoolkodecodelab@gmail.com>",
      to: email,
      subject: "Teacher Account Verification",
      html: `
            <h3>
                This mail, is for account verification for Teachers on Skuul platform... Please use the <a
                href="http://localhost:3000/api/teacher/${newTeacher}/${code}"
                >Link to Finish</a> up your account creation 
            </h3>
            `,
    };

    const result = transport.sendMail(mailOptions, (info, error) => {
      if (error) {
        console.log(error);
      } else {
        console.log(info.response);
      }
    });
    return result;
  } catch (error) {
    return error;
  }
};
const reSendTeacherMail = async (email, user, code) => {
  try {
    const getToken = crypto.randomBytes(10).toString("hex");
    const token = jwt.sign({ getToken }, "ThisIsTheCode");

    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "skoolkodecodelab@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refresh_token: CLIENT_TOKEN,
        accessToken: accessToken.token,
      },
    });

    const mailOptions = {
      from: "Skuul ✉️ <skoolkodecodelab@gmail.com>",
      to: email,
      subject: "Account re-Verification",
      html: `
<h3>
    This mail, is for account verification... Please use the <a
    href="http://localhost:2332/api/teacher/${user._id}/${user.schoolCode}"
    >Link to Finish</a> up your account creation 
</h3>
`,
    };

    const result = transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = {
  verifiedMail,
  resetMail,
  reSendMail,
  verifiedTeacherMail,
  reSendTeacherMail,
};
