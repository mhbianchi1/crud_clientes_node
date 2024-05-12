const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.delete('/users/:id', userController.deleteUser);
router.put('/users/:id', userController.updateUserById);

module.exports = router;