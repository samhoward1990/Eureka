// const express = require('express');
// const router = express.Router();
// const { ensureAuthenticated, forwardAuthenticated } = require('../config/models/auth');

// //welcome page
// router.get('/', (req, res ) => res.render('welcome'));
// //dashboard
// router.get('/dashboard', ensureAuthenticated, (req, res) => 
// res.render('dashboard', {
//     user: req.user
// }));

// module.exports = router;

const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;