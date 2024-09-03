const stompit = require("stompit");
const config = require("./config/activemq");

const listener = () => {
  stompit.connect(config, (err, client) => {
    if (err) {
      console.log(err);
    } else {
      client.subscribe(
        { destination: "/queue/test", ack: "client-individual" },
        (err, message) => {
          if (err) {
            console.log(err);
            return;
          }

          message.readString("utf-8", (error, body) => {
            if (error) {
              console.log("Read message error " + error.message);
              return;
            }

            console.log("Received message: " + body);

            // Acknowledge the message
            client.ack(message);
          });
        }
      );
    }
  });
};

module.exports = listener;
