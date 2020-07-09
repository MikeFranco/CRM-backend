const Group = require('../models/Group');

exports.createGroup = async (req, res) => {
  const { name, users, userId } = req.body.group;

  const data = {
    name,
    users,
    userId
  };
  const createGroup = await Group.create(data);
  res.json({ ok: true, createGroup });
};

//exports.getById = async (req, res) => {
//  const { id } = req.body;
//
//  const getById = await Devices.findById(id);
//  res.json({ ok: true, getById });
//};

exports.getGroupsById = async (req, res) => {
  const { userId } = req.query;

  const getGroupsById = await Group.find({ userId });

  res.json({ ok: true, getGroupsById });
};

exports.updateGroup = async (req, res) => {
  const { _id, name, users } = req.body.group;

  const data = {
    name,
    users
  };

  const updatedGroup = await Group.findByIdAndUpdate(_id, data, {
    new: true
  });
  res.json({ ok: true, updatedGroup });
};

exports.deleteGroup = async (req, res) => {
  const { id } = req.query;

  await Group.findByIdAndDelete(id);
  res.json({ ok: true, msg: 'Group deleted' });
};
