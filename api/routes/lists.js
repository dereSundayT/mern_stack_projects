const router = require('express').Router()
const List = require('../models/List')
const verify = require('../verifyToken')

//CREATE
router.post('/', verify, async (req, res) => {
	if (req.user.isAdmin) {
		const newList = new List(req.body)
		try {
			const savedList = await newList.save()
			res.status(200).json(newList)
		} catch (err) {
			res.status(500).json(err.message)
		}
	} else {
		res.status(419).json('You are not allowed')
	}
})
//DELETE
router.delete('/:id', verify, async (req, res) => {
	if (req.user.isAdmin) {
		try {
			await findByIdAndDelete(req.params.id)
			res.status(200).json('The Item has been deleted')
		} catch (err) {
			res.status(500).json(err.message)
		}
	} else {
		res.status(419).json('You are not allowed')
	}
})
// get
router.get('/', verify, async (req, res) => {
	const typeQuery = req.query.type
	const genreQuery = req.query.genre
	let list = []

	try {
		if (typeQuery) {
			if (genreQuery) {
				list = await List.aggregate([
					{
						$sample: { size: 10 },
					},
					{ $match: { type: typeQuery, genre: genreQuery } },
				])
			} else {
				list = await List.aggregate([
					{
						$sample: { size: 10 },
					},
					{ $match: { type: typeQuery } },
				])
			}
		} else {
			list = await List.aggregate([
				{
					$sample: { size: 10 },
				},
			])
		}
		res.status(200).json(list)
	} catch (error) {
		res.status(500).json(error.message)
	}
})

module.exports = router
