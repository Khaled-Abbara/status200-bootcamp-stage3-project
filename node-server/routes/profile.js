const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "eb1361a6071dcf",
    pass: "8a2da5c3f4f772",
  },
});

const {
  query_ProfileAccountUser,
  query_ProfileSignUp,
  query_ProfileLogin,
  query_CheckUsername,
  query_CheckEmail,
} = require("../database/queries");

router.get("/profile/account/:user", async (req, res) => {
  const { user } = req.params;

  try {
    const result = await query_ProfileAccountUser(user);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve data" });
  }
});

router.get("/profile/login", async (req, res) => {
  const { username, password } = req.query;

  try {
    const result = await query_ProfileLogin(username, password);
    if (result.length > 0) {
      res.status(200).json({
        userKey: {
          username: result[0].username,
          user_id: result[0].user_id,
          login: true,
        },
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Login Failed" });
  }
});

router.get("/profile/sign-up", async (req, res) => {
  const { username, email, password } = req.query;

  if (!username) {
    return res.status(400).json({ error: "Username is required" });
  }

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  if (!password) {
    return res.status(400).json({ error: "Password is required" });
  }

  if (username) {
    const nameResult = await query_CheckUsername(username);
    if (nameResult.length > 0) {
      return res.status(400).json({ error: "Username already exists" });
    } else {
      try {
        const result = await query_ProfileSignUp(username, email, password);
        res.status(200).json(result);
      } catch (error) {
        res.status(500).json({ error: "failed to send data" });
      }
    }
  }
});

router.get("/profile/reset-password", async (req, res) => {
  const { email } = req.query;

  try {
    const checkEmailresult = await query_CheckEmail(email);
    const userId = checkEmailresult[0].user_id;

    if (checkEmailresult.length > 0) {
      const uniqueKey =
        Math.random().toString(36).substring(2, 15) + Date().toString(36).substring(2, 15);

      const result = await query_AddUniqueKey(userId, uniqueKey);

      const mailOptions = {
        from: "noreply@tasty.com",
        to: email,
        subject: "reset password",
        text: `Hello, this is a test email sent from Node.js!
        Click the link below to reset your password: ${uniqueKey}`,
      };

      transport.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log("Error:", error);
        }
        console.log("Email sent: " + info.response);
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Login Failed" });
  }
});

router.get("/profile/reset-key", async (req, res) => {
  const { key } = req.query;

  try {
    const result = await query_CheckResetKey(key);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve data" });
  }
});

module.exports = router;
