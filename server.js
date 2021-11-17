const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const usersRoute = require('./routes/users/usersRoute');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());

const { DB_NAME, DB_HOST, DB_USER, DB_PASS, PORT } = process.env;

// mongoose setup --------------------------------------------------------

const dbUrl = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose
	.connect(dbUrl)
	.then(() => console.log('Database is connected'))
	.catch((err) => console.log(`Database connection failed: ${err}`));

// expresss ---------------------------------------------------------------

app.use('/users', usersRoute);

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(PORT, (req, res) => console.log('Server is listening.'));
