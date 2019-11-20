const router = require("express").Router();
const Chatkit = require('@pusher/chatkit-server');

// Matches with "/api/user"
// 

const chatkit = new Chatkit.default({
    instanceLocator: process.env.CHATKIT_INSTANCE_LOCATOR,
    key: process.env.CHATKIT_SECRET_KEY,
  });



router.post('/users', (req, res) => {
    const { userId } = req.body;
  console.log('/users')
    chatkit
      .createUser({
        id: userId,
        name: userId,
      })
      .then(() => {
        res.sendStatus(201);
        console.log('.then')
      })
      .catch(err => {
        console.log('.catch')
        console.log(err)
        if (err.error === 'services/chatkit/user_already_exists') {
          console.log(`User already exists: ${userId}`);
          res.sendStatus(200);
  
          
        } else {
          res.status(err.status).json(err);
        }
      });
  });
router.post('/authenticate', (req, res) => {
    console.log('authenticate')
    const authData = chatkit.authenticate({
      userId: req.query.user_id,
    });
    res.status(authData.status).send(authData.body);
  });





module.exports = router;