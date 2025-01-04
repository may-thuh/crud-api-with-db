const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// POST - Create an item
router.post('/', itemController.createItem);

// GET - Get all items
router.get('/', itemController.getItems);

// GET - Get a single item by ID
router.get('/:id', itemController.getItemById);

// PUT - Update an item by ID
router.put('/:id', itemController.updateItem);

// DELETE - Delete an item by ID
router.delete('/:id', itemController.deleteItem);

module.exports = router;
