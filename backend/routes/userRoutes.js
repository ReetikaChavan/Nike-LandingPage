// const express = require('express');
// const router = express.Router();
// const { signupUser, signinUser } = require('../controllers/userController');

// // User signup route
// router.post('/signup', signupUser);

// // User signin route
// router.post('/signin', signinUser);

// module.exports = router;

const express = require('express');
const { registerUser, loginUser } = require ('../controllers/userController.js');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;