const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const verifyJWT = require('../middleware/verifyJWT');

router.post('/items', itemController.createItem);
router.get('/items', itemController.getAllItems);
router.get('/items/:id', itemController.getItem);
router.get('/verifyToken', verifyJWT.verifyToken);
router.put('/items/:id', itemController.updateItem);
router.delete('/items/:id', itemController.deleteItem);

module.exports = router;