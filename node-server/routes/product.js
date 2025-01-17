const express = require("express");
const router = express.Router();

const { query_ProductFood } = require("../database/queries");

router.get("/product/:food", async (req, res) => {
  const { food } = req.params;

  try {
    const result = await query_ProductFood(food);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve data" });
  }
});

module.exports = router;
