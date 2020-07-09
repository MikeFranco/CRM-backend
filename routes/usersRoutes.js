const express = require('express');
const router = express.Router();
const { createUser, getUsersByAdminId, updateUser, deleteUser } = require('../controllers/usersControllers');

router.post('/users', createUser);
router.get('/users', getUsersByAdminId);
router.put('/users', updateUser);
router.delete('/users', deleteUser);
module.exports = router;
