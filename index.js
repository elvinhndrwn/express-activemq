const express = require("express");
const bodyParser = require("body-parser");
const stompit = require("stompit");
const config = require("./config/activemq");
const router = require("./router/message_router");
const listener = require("./listener");

const app = express();
const port = 3000;
app.use(bodyParser.json());

app.use("/message", router);

// Message Listener
listener();


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
