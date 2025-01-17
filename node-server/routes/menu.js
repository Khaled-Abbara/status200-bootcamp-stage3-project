const express = require("express");
const router = express.Router();

const { query_MenuCategory } = require("../database/queries");

router.get("/menu/:category", async (req, res) => {
  const { category } = req.params;

  try {
    const result = await query_MenuCategory(category);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve data" });
  }
});

module.exports = router;
