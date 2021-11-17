const express = require('express');
const UsersModel = require('../../models/UsersModel');
const router = express.Router();

// POST --------------------------------------------
router.post('/register', async (req, res) => {
	const { body } = req;
	try {
		const newUser = await UsersModel.create({
			...body,
			dateOfBirth: new Date().toLocaleDateString()
		});

		return res
			.status(200)
			.send(`You are registered with this information: ${newUser}`);
	} catch (error) {
		return res.status(400).send(error.message);
	}
});

// GET ----------------------------------------------

router.get('/list', (req, res) => {
	const allUsers = UsersModel.find();
	return allUsers
		.then((allUsers) => res.status(200).send(allUsers))
		.catch((err) => console.log(err));
});

module.exports = router;
