//initilized express
const express = require('express')
const app = express()
// .env config
const dotenv = require('dotenv')
dotenv.config()

// import route files
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const movieRoute = require('./routes/movies')
const listRoute = require('./routes/lists')

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
app.use('/api/users', userRoute)
app.use('/api/movies', movieRoute)
app.use('/api/lists', listRoute)

//
app.listen(8800, () => {
	console.log('backend server is running')
})
