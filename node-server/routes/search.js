const express = require("express");
const router = express.Router();

const { query_Search } = require("../database/queries");

router.get("/search", async (req, res) => {
  try {
    const result = await query_Search();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve data" });
  }
});

module.exports = router;
