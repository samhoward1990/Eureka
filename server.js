const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const MongoURI = require("./config/models/keys").MongoURI
// const router = require('./routes/index');
// const userroute = require('./routes/users');
// const serverConfigs = require('./config/serverConfig');

// connect to database
// mongoose.connect(serverConfigs.DBURL);

const app = express();

// apply express configs
// require('./backend/express')(app, serverConfigs);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mernDb");
app.listen(PORT);

// app.listen(PORT, () => {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });


