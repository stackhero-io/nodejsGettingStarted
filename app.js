const express = require('express');
const app = express();
const port = 8080;

// Define route "/"
app.get(
  '/',
  (req, res) => res.send('🎉 Congratulations! Your first NodeJS application is running on Stackhero!')
);

// Start Express server
const server = app.listen(port);

// You'll see this log directly on your Stackhero's console
console.log('🎉 The app has just start!');

// Handle termination signal
// When you will push your new code to Stackhero, we will send a termination signal (SIGTERM) to your running app.
// The goal is to let your running app close connections properly from Express, connections to databases etc...
process.on('SIGTERM', () => {
  // You'll see this log directly on your Stackhero's console
  console.info('😯 SIGTERM signal received.');

  // Close the server and all connections
  server.close(
    err => {
      if (err) {
        // You'll see this log directly on your Stackhero's console
        console.error(err);
        process.exit(1);
      }
      else {
        // You'll see this log directly on your Stackhero's console
        console.log('👋 Exit the app with status code 0');
        process.exit(0);
      }
    }
  );
});
