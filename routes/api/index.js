const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const chatRoutes = require("./chat");
const discussionRoutes = require("./discussion");


router.use("/discussion", discussionRoutes);
router.use("/user", userRoutes);
router.use("/chat", chatRoutes);
// For anything else, render the html page
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;