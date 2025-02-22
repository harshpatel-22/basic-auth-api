const express = require('express');
const {registerUser,loginUser,getUserProfiles} = require('../controller/authController')
const  protect  =  require('../middlewares/authMiddleware');

const router = express.Router()

router.post('/register', registerUser);

router.post('/login', loginUser)

router.get('/profiles',protect , getUserProfiles)

module.exports = router;