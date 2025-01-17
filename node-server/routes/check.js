const express = require("express");
const router = express.Router();

const { query_CheckUsername } = require("../database/queries");

router.get("/check/username", async (req, res) => {
  const { name } = req.query;

  try {
    const result = await query_CheckUsername(name);
    if (result.length > 0) {
      res.status(200).json({ exists: false });
    } else {
      res.status(200).json({ exists: true });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve data" });
  }
});

module.exports = router;
