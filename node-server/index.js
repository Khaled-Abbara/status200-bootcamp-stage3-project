const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const searchRouter = require("./routes/search");
app.use(searchRouter);

const menuRouter = require("./routes/menu");
app.use(menuRouter);

const productRouter = require("./routes/product");
app.use(productRouter);

const profileRouter = require("./routes/profile");
app.use(profileRouter);

const checkRouter = require("./routes/check");
app.use(checkRouter);

const cartRouter = require("./routes/cart");
app.use(cartRouter);

app.listen(3000, () => {
  console.log("listening on Port 3000");
});

// http://localhost:3000/home
// http://localhost:3000/menu
// http://localhost:3000/menu/category
// http://localhost:3000/menu/category/food

// http://localhost:3000/login
// http://localhost:3000/sign-up
// http://localhost:3000/reset-password

// http://localhost:3000/cart:
