// Make controller to send message to queue
const stompit = require("stompit");
const config = require("../config/activemq"); // Import config file

class message_controller {
  static send(req, res) {
    stompit.connect(config, (error, client) => {
      if (error) {
        console.error("Connect error " + error.message);
        return res.status(500).send("Failed to connect to ActiveMQ");
      }

      const frame = client.send({
        destination: "/queue/test", // Ganti dengan queue Anda
        "content-type": "text/plain",
      });

      // Write message to queue
      frame.write(req.body.message);
      frame.end();

      // Disconnect after the message is sent
      client.disconnect((err) => {
        if (err) {
          console.error("Disconnect error: ", err.message);
        }
        res.send("Message sent");
      });
    });
  }
}

module.exports = message_controller;
