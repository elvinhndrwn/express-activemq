const stompit = require("stompit");

const config = {
    host: "localhost",  // Ganti dengan host ActiveMQ Anda
    port: 61613,
    connectHeaders: {
        host: "localhost",
        login: "", // Ganti dengan username ActiveMQ Anda
        passcode: "", // Ganti dengan password ActiveMQ Anda
    },
};

module.exports = config;