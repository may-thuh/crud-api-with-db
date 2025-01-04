const Item = require('../models/item');

// CREATE - Add a new item
exports.createItem = async (req, res) => {
    try {
        const { name, price } = req.body;
        const newItem = new Item({ name, price });
        await newItem.save();
        res.status(201).json(newItem); // Send the newly created item
    } catch (error) {
        res.status(500).json({ message: 'Error creating item', error: error.message });
    }
};

// READ - Get all items
exports.getItems = async (req, res) => {
    try {
        const items = await Item.find(); // Fetch all items from the database
        res.status(200).json(items); // Return the items
    } catch (error) {
        res.status(500).json({ message: 'Error fetching items', error: error.message });
    }
};

// READ - Get a single item by ID
exports.getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id); // Find item by ID
        if (!item) {
            return res.status(404).json({ message: 'Item not found' }); // Item not found
        }
        res.status(200).json(item); // Return the item
    } catch (error) {
        res.status(500).json({ message: 'Error fetching item', error: error.message });
    }
};

// UPDATE - Update an existing item by ID
exports.updateItem = async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ message: 'Item not found' }); // Item not found
        }
        res.status(200).json(updatedItem); // Return the updated item
    } catch (error) {
        res.status(500).json({ message: 'Error updating item', error: error.message });
    }
};

// DELETE - Delete an item by ID
exports.deleteItem = async (req, res) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id); // Delete item by ID
        if (!deletedItem) {
            return res.status(404).json({ message: 'Item not found' }); // Item not found
        }
        res.status(200).json({ message: 'Item deleted successfully' }); // Confirmation message
    } catch (error) {
        res.status(500).json({ message: 'Error deleting item', error: error.message });
    }
};
