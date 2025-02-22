const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config()


connectDB();


const app = express()
app.use(express.json())
app.use(cors())


app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`)
})
