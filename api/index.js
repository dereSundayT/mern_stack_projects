//
const express = require('express')
const app = express()

//
const dotenv = require('dotenv')
dotenv.config()

//
const authRoute = require('./routes/auth')

//mongodb connection
const mongoose = require('mongoose')
mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		// useCreateIndex: true,
	})
	.then(() => console.log('db connected'))
	.catch((err) => console.log(err))
//allows json
app.use(express.json())
//
app.use('/api/auth', authRoute)
//
app.listen(8800, () => {
	console.log('backend server is running')
})
