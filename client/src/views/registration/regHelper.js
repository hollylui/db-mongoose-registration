const axios = require('axios');

// username
export const userNameHandler = (e, setUsername) => setUsername(e.target.value);

// password
export const passwordHandler = (e, setPassword) => setPassword(e.target.value);

// first name
export const fnameHandler = (e, setFirstName) => setFirstName(e.target.value);

// last name
export const lnameHandler = (e, setLastName) => setLastName(e.target.value);

// email
export const emailHandler = (e, setEmail) => setEmail(e.target.value);

// date of birth
export const dateOfBirthHandler = (e, setDateOfBirth) =>
	setDateOfBirth(e.target.value);

// telephone
export const telephoneHandler = (e, setTelephone) =>
	setTelephone(e.target.value);

// gender
export const genderHandler = (e, setActive, setGender) => {
	e.target.value === 'n/a'
		? setActive(0)
		: e.target.value === 'male'
		? setActive(1)
		: e.target.value === 'female'
		? setActive(2)
		: setActive(3);

	setGender(e.target.value);
};

// register button
export const registerHandler = async (
	e,
	username,
	setUsername,
	password,
	setPassword,
	firstName,
	setFirstName,
	lastName,
	setLastName,
	dateOfBirth,
	email,
	setEmail,
	telephone,
	setTelephone,
	gender,
	setGender,
	setActive,
	setDateOfBirth
) => {
	e.preventDefault();
	const postUrl = 'http://localhost:3001/users/register';
	try {
		await axios.post(postUrl, {
			username,
			password,
			firstName,
			lastName,
			dateOfBirth,
			email,
			telephone,
			gender
		});
	} catch (error) {
		console.log('Something goes wrong');
	}

	setUsername('');
	setPassword('');
	setFirstName('');
	setLastName('');
	setEmail('');
	setDateOfBirth('');
	setTelephone('');
	setGender('n/a');
	setActive(0);
};
