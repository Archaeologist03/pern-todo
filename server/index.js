const express = require('express');
const app = express();
const cors = require('cors');

const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json()); // => allows us to access the req.body


// ROUTES

app.get('/', (req, res) => {
	res.send('hello world');
});

// create a todo
app.post('/todos', async (req, res) => {
	console.log(req.body);

	try {
		console.log(req.body);
	} catch (err) {
		console.error(err.message);
	}
});

// get all todos

// get a todo

// update a todo

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log('Server has started on port ' + PORT);
});
