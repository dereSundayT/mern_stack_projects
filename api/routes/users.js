const router = require('express').Router()
const User = require('../models/User')
const CryptoJs = require('crypto-js')
const verify = require('../verifyToken')

//UPDATE
router.put('/:id', verify, async (req, res) => {
	if (req.user.id === req.params.id || req.user.isAdmin) {
		if (req.body.password) {
			//
			req.body.password = CryptoJs.AES.encrypt(
				req.body.password,
				process.env.SECRET_KEY
			).toString()
		}
		try {
			const updatedUser = await User.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
			)
			//
			res.status(200).json(updatedUser)
		} catch (err) {
			res.json(500).json(err)
		}
	} else {
		res.status(419).json('You are not allowed to edit this user')
	}
})
//DELETE
router.delete('/:id', verify, async (req, res) => {
	if (req.user.id === req.params.id || req.user.isAdmin) {
		try {
			await User.findByIdAndDelete(req.params.id)
			//
			res.status(200).json('User deleted Succesfully')
		} catch (err) {
			res.status(500).json(err)
		}
	} else {
		res.status(419).json('You are not allowed to edit this user')
	}
})
// GET
router.get('/find/:id', async (req, res) => {
	try {
		const user = User.findById(req.params.id)
		const { password, ...info } = user._doc
		res.status(200).json(info)
	} catch (err) {
		res.status(500).json(err)
	}
})
// GET ALL
router.get('/', verify, async (req, res) => {
	const query = req.query.new
	if (req.user.isAdmin) {
		try {
			const users = query
				? await User.find().sort({ _id: -1 }).limit(10)
				: await User.find()
			res.status(200).json(users)
		} catch (err) {
			res.json(500).json(err)
		}
	} else {
		res.status(419).json('You are not allowed to see all user')
	}
})
// GET USER STATS
router.get('/stats', verify, async (req, res) => {
	//
	const today = new Date()
	const lastYear = today.setFullYear(today.setFullYear() - 1)
	const months = ['Jan', 'Feb']

	try {
		//
		const data = await User.aggregate([
			{
				$project: {
					month: { $month: '$createdAt' },
				},
			},
			{
				$group: {
					_id: '$month',
					total: { $sum: 1 },
				},
			},
		])
		res.json(200).json(data)
	} catch (error) {
		res.json(500).json(error)
	}
})

module.exports = router
