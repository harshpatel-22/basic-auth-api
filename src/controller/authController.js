const User = require('../model/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()

const generateToken = (id) => {
	return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: '1h' })
}

const registerUser = async (req, res) => {
	try {
		//get the credential from the body
		//check if user exist
		//then create a user
		//send response of new created user with the token

		const { name, email, password } = req.body

		const userExists = await User.findOne({ email })
		if (userExists) {
			return res.status(400).json({
				message: 'user already exist',
			})
		}

		const user = await User.create({ name, email, password })

		if (user) {
			res.status(201).json({
				_id: user.id,
				name: user.name,
				email: user.email,
				token: generateToken(user.id),
			})
		} else {
			res.status(400).json({
				message: 'Invalid user data',
			})
		}
	} catch (error) {
		res.status(500).json({
			message: error.message,
		})
	}
}

const loginUser = async (req, res) => {
	//get the credential from the body
	//find user by email , and compare password
	//return the user

	try {
		const { email, password } = req.body

        const user = await User.findOne({ email });

		if (user && (await user.matchPassword(password))) {
			res.json({
				_id: user.id,
				name: user.name,
				email: user.email,
				token: generateToken(user.id),
			})
		} else {
			res.status(401).json({
				message: 'Invalid email or password',
			})
		}
	} catch (error) {
		res.status(500).json({
			message: error.message,
		})
	}
}

const getUserProfiles = async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select('-password')

		if (user) {
			res.json(user)
		} else {
			res.status(404).json({
				message: 'user not found',
			})
		}
	} catch (error) {
		res.status(500).json({
			message: error.message,
		})
	}
}

module.exports = { getUserProfiles, registerUser, loginUser }
