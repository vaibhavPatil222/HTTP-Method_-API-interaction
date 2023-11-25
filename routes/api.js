








const express = require('express');
const router = express.Router();
// Sample data (usually data would be fetched from a database)
let items = [
{ id: 1, name: 'Item 1' },
{ id: 2, name: 'Item 2' },
];
// GET request to retrieve all items
router.get('/items', (req, res) => {
res.json(items);
});
// POST request to add a new item
router.post('/items', (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(newItem);
    });
    // PUT request to update an item
    router.put('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const updatedItem = req.body;
    items = items.map(item => (item.id === itemId ? updatedItem : item));
    res.json(updatedItem);
    });
    // DELETE request to remove an item
    router.delete('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    items = items.filter(item => item.id !== itemId);
    res.status(204).end();
});
 module.exports = router;
