require('dotenv').config({ path: '.env' });
const bodyParser = require('body-parser');
const cors = require('cors');

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

// const chatkit = new Chatkit.default({
//   instanceLocator: process.env.CHATKIT_INSTANCE_LOCATOR,
//   key: process.env.CHATKIT_SECRET_KEY,
// });

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
console.log('mongo', process.env.MONGODB_URI);



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.post('/users', (req, res) => {
//   const { userId } = req.body;
// console.log('/users')
//   chatkit
//     .createUser({
//       id: userId,
//       name: userId,
//     })
//     .then(() => {
//       res.sendStatus(201);
//       console.log('.then')
//     })
//     .catch(err => {
//       console.log('.catch')
//       console.log(err)
//       if (err.error === 'services/chatkit/user_already_exists') {
//         console.log(`User already exists: ${userId}`);
//         res.sendStatus(200);

        
//       } else {
//         res.status(err.status).json(err);
//       }
//     });
// });

// app.post('/authenticate', (req, res) => {
//   console.log('authenticate')
//   const authData = chatkit.authenticat/e({
//     userId: req.query.user_id,
//   });
//   res.status(authData.status).send(authData.body);
// });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mernDb");
app.listen(PORT);

// app.listen(PORT, () => {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });



