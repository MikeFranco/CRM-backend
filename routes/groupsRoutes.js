const express = require('express');
const router = express.Router();
const { createGroup, getGroupsById, updateGroup, deleteGroup } = require('../controllers/groupsControllers');

router.post('/groups', createGroup);
router.get('/groups', getGroupsById);
router.put('/groups', updateGroup);
router.delete('/groups', deleteGroup);
module.exports = router;
