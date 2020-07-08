const express = require('express');
const router = express.Router();
const { createGroup, getGroupsById } = require('../controllers/groupsControllers');

router.post('/groups', createGroup);
router.get('/groups', getGroupsById);
//router.put('/groups', createGroup);
//router.delete('/groups', createGroup)
module.exports = router;
