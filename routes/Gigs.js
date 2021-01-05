const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.get('/', async (req, res) => {
	try {
		const todos = await Todo.findAll();
		res.json(todos);
	} catch (error) {
		res.send('Error todos not find:' + error);
	}
});

router.get('/:id', async (req, res) => {
	if (!req.params.id) res.status(400).send('ID is nod defind!');
	try {
		const todo = await Todo.findByPk(req.params.id);
		res.json(todo);
	} catch (error) {
		res.send('Error todos not find:' + error);
	}
});

router.post('/', async (req, res) => {
	if (!req.body) res.status(400).send('Body is requared!');
	if (!req.body.title || !req.body.description) {
		res.status(400).send('Title and description is requared!');
	}
	try {
		const todo = await Todo.create(req.body);
		res.status(200).json(todo);
	} catch (error) {
		res.send('Todo is not created:' + error);
	}
});

router.put('/:id', async (req, res) => {
	if (!req.params.id) res.status(400).send('ID is nod defind!');
	if (!req.body) res.status(400).send('Body is requared!');
	if (!req.body.title || !req.body.description) {
		res.status(400).send('Title and description is requared!');
	}
	try {
		await Todo.update(req.body, {
			where: {
				id: req.params.id,
			},
			returning: true,
			plain: true,
		});
		const todo = await Todo.findByPk(req.params.id);
		res.status(200).json(todo);
	} catch (error) {
		res.send('Todo is not update:' + error);
	}
});

router.delete('/:id', async (req, res) => {
	if (!req.params.id) res.status(400).send('ID is nod defind!');
	try {
		await Todo.destroy({ where: { id: req.params.id } });
		res.status(200).send('Todo remove is seccsess!');
	} catch (error) {
		res.send('Todo is not delete:' + error);
	}
});

module.exports = router;
