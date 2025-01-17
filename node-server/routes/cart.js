const express = require("express");
const router = express.Router();

const {
  query_Cart,
  query_CheckFoodInCart,
  query_updateCartQuantity,
  query_updateCartMenu,
} = require("../database/queries");

router.get("/cart", async (req, res) => {
  const { id } = req.query;

  try {
    const result = await query_Cart(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve data" });
  }
});

router.get("/cart/add-to-cart", async (req, res) => {
  const { user, food } = req.query;
  let result = [];

  try {
    const initialResult = await query_CheckFoodInCart(user, food);
    if (initialResult.length > 0) {
      console.log("Length" + initialResult.length);
      result = await query_updateCartQuantity(user, food);
    } else {
      result = await query_updateCartMenu(user, food);
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve data" });
  }
});
module.exports = router;
