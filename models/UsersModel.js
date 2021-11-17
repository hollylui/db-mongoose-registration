const mongoose = require('mongoose');

const usersSchemaPattern = {
	username: { type: String, required: true, minLength: 4, maxLength: 10 },
	password: { type: String, required: true, minLength: 8 },
	firstName: { type: String, required: true, minLength: 2 },
	lastName: { type: String, required: true, minLength: 2 },
	dateOfBirth: { type: Date, required: true },
	email: { type: String, required: true },
	telephone: String,
	gender: {
		type: String,
		enum: ['male', 'female', 'other', 'n/a'],
		default: 'n/a',
		lowercase: true
	}
};

const UserSchema = new mongoose.Schema(usersSchemaPattern);
const UsersModel = mongoose.model('users', UserSchema);

module.exports = UsersModel;
