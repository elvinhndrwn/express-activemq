# EXPRESS-ACTIVEMQ

A simple REST API built using Express.js with ActiveMQ integration to send and receive messages.

## Features

- **Send Message**: REST API endpoint to send messages to ActiveMQ.
- **Receive Message**: A listener to consume and process incoming messages from ActiveMQ.

## Prerequisites

- [Node.js](https://nodejs.org/en/) - Version 20.x or higher
- [ActiveMQ](https://activemq.apache.org/) - Make sure ActiveMQ is installed and running

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/elvinhndrwn/express-activemq.git
   cd express-activemq
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Configure ActiveMQ
   ```
   Update the ActiveMQ connection details in the config/activemq.js file
   ```

4. Run Application
   ```
   node .
   ```


## Testing
Send message:
```
curl -XPOST -H "Content-type: application/json" -d '{"message":"hello world!"}' 'http://localhost:3000/message/send'
```

message listener: <br>
![image](https://github.com/user-attachments/assets/d0772ebc-7819-4ecf-ab9f-4ff2a454ed81)
