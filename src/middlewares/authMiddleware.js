const jwt = require('jsonwebtoken')
const User = require('../model/User')
require('dotenv').config()

const protect = async (req, res, next) => {
    let token;
	try {
		//check if token is provided in auth header
		if (
			req.headers.authorization &&
			req.headers.authorization.startsWith('Bearer')
		) {
			token = req.headers.authorization.split(' ')[1]

			//verify token
			const decoded = jwt.verify(token, process.env.SECRET_KEY)

			//fetch user and exclude pass
			//put user on the req.user
			req.user = await User.findById(decoded.id).select('-password')

            next();
        }
        else {
            res.status(401).json({
                message: 'Not authorized, no token found'
            })
        }
	} catch (error) {
        res.status(401).json({ message: 'Invalid token' })
    }
}

module.exports = protect;