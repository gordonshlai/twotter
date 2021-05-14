const express = require("express");
const serveStatic = require("serve-static");
const history = require("connect-history-api-fallback");
const enforce = require("express-sslify");

const app = express();

// Heroku specific, forces the users to use the secure version of the website.
// Heroku automatically give us SSL certificate.
app.use(enforce.HTTPS({ trustProtoHeader: true }));

// Heroku will lok at the 'build' command in package.json before serving.
// The 'build' command will compile all the source code into the '/dist' folder. (compile into webpack chuncks.)
// '__dirname' will point to the directory name in the server.
app.use(serveStatic(__dirname + "/dist"));

// Uses the router history.
app.use(history());

// Look into the environment variable call PORT, serve it using that value or port 5000.
app.listen(process.env.PORT || 5000);
