// If the pathname is as specifed then
// try to query based on the pathname, and await a response
// catch any errors and send to the client

const { homeRequestQuery } = require("../queries");

async function handleRequest_Home(response) {
  try {
    const result = await homeRequestQuery();
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(result));
  } catch (error) {
    response.writeHead(500, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ error: "Failed to retrieve data" }));
  }
}

module.exports = { handleRequest_Home };
