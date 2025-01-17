// established a connection with db
// async functions that are based on a promise
// the promise is resolved if the response is valid
// the promise is rejected if there is an error

const db = require("mysql2");

const connection = db.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tasty-db",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
});

// ------------------------------------------------------------

async function query_MenuCategory(categoryUrl) {
  return new Promise((resolve, reject) => {
    const sqlQuery = `
      SELECT * FROM food f
      JOIN categories c ON f.category_id = c.category_id
      WHERE c.category_url = ?`;

    connection.query(sqlQuery, [categoryUrl], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

// ------------------------------------------------------------

async function query_Search() {
  return new Promise((resolve, reject) => {
    const sqlQuery = `
      SELECT * 
      FROM food;`;

    connection.query(sqlQuery, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

// ------------------------------------------------------------

async function query_ProductFood(food) {
  return new Promise((resolve, reject) => {
    const sqlQuery = `
      SELECT *
      FROM food
      WHERE food_url = ?`;

    connection.query(sqlQuery, [food], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

// ------------------------------------------------------------

async function query_ProfileAccountUser(user) {
  return new Promise((resolve, reject) => {
    const sqlQuery = `
      SELECT user_id, username, user_created_at
      FROM users
      WHERE username = ?`;

    connection.query(sqlQuery, [user], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

// ------------------------------------------------------------

async function query_ProfileSignUp(username, user_email, user_password) {
  return new Promise((resolve, reject) => {
    const sqlQuery = `
      INSERT INTO users (username, user_email, user_password)
      VALUES (?, ?, ?);`;

    connection.query(sqlQuery, [username, user_email, user_password], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

// ------------------------------------------------------------

async function query_CheckUsername(username) {
  return new Promise((resolve, reject) => {
    const sqlQuery = `
      SELECT username
      FROM users
      Where username = ?`;

    connection.query(sqlQuery, [username], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

// ------------------------------------------------------------

async function query_ProfileLogin(username, password) {
  return new Promise((resolve, reject) => {
    const sqlQuery = `
      SELECT * 
      FROM users 
      Where username = ? AND user_password = ?;`;

    connection.query(sqlQuery, [username, password], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

// ------------------------------------------------------------

async function query_Cart(userId) {
  return new Promise((resolve, reject) => {
    const sqlQuery = `
      SELECT *
      FROM food AS f
      JOIN carts AS c ON f.food_id = c.food_id
      WHERE c.user_id = ?;`;

    connection.query(sqlQuery, [userId], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

// ------------------------------------------------------------

async function query_CheckFoodInCart(userId, foodId) {
  return new Promise((resolve, reject) => {
    const sqlQuery = `
    SELECT *
    FROM carts
    Where user_id = ? and food_id = ?`;

    connection.query(sqlQuery, [userId, foodId], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

// ------------------------------------------------------------

async function query_updateCartQuantity() {
  return new Promise((resolve, reject) => {
    const sqlQuery = `
    UPDATE carts
    SET added_at = NOW(), quantity = quantity + 1
    WHERE user_id = 6 AND food_id = 7;`;

    connection.query(sqlQuery, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

// ------------------------------------------------------------

async function query_updateCartMenu(userId, foodId) {
  return new Promise((resolve, reject) => {
    const sqlQuery = `
    INSERT INTO carts(user_id, food_id, added_at, quantity) 
    VALUES (?, ?, NOW(), 1)`;

    connection.query(sqlQuery, [userId, foodId], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

// ------------------------------------------------------------

async function query_CheckEmail(email) {
  return new Promise((resolve, reject) => {
    const sqlQuery = `
    SELECT *
    FROM users
    Where user_email = ?`;

    connection.query(sqlQuery, [email], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

// ------------------------------------------------------------

async function query_AddResetKey(userId, uniqueKey) {
  return new Promise((resolve, reject) => {
    const sqlQuery = `
    INSERT INTO password_resets(user_id, reset_key, used_key) VALUES (?, ?, 0)`;

    connection.query(sqlQuery, [userId, uniqueKey], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

// ------------------------------------------------------------

async function query_CheckResetKey(resetKey) {
  return new Promise((resolve, reject) => {
    const sqlQuery = `
    SELECT *
    FROM password_resets
    Where reset_key = ?`;

    connection.query(sqlQuery, [resetKey], (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

// ------------------------------------------------------------

module.exports = {
  query_MenuCategory,
  query_Search,
  query_ProductFood,
  query_ProfileAccountUser,
  query_ProfileSignUp,
  query_CheckUsername,
  query_ProfileLogin,
  query_Cart,
  query_CheckFoodInCart,
  query_updateCartQuantity,
  query_updateCartMenu,
  query_CheckEmail,
  query_AddResetKey,
  query_CheckResetKey,
};

// ------------------------------------------------------------

// async function functionName() {
//   return new Promise((resolve, reject) => {
//     const sqlQuery = "the query goes here";
//     connection.query(sqlQuery, (error, result) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(result);
//       }
//     });
//   });
// }
