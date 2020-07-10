const User = require('../models/User');

exports.createUser = async (req, res) => {
  const data = { ...req.body.user };
  if (data.purchased) data.bought = true;
  const createUser = await User.create(data);
  res.json({ ok: true, createUser });
};

exports.getUsersByAdminId = async (req, res) => {
  const { adminId } = req.query;

  const getUsersByAdminId = await User.find({ adminId });

  res.json({ ok: true, getUsersByAdminId });
};

exports.updateUser = async (req, res) => {
  const data = { ...req.body.user };
  const { _id } = req.body.user;

  const updatedUser = await User.findByIdAndUpdate(_id, data, {
    new: true
  });
  res.json({ ok: true, updatedUser });
};

exports.deleteUser = async (req, res) => {
  const { id } = req.query;

  await User.findByIdAndDelete(id);
  res.json({ ok: true, msg: 'User deleted' });
};
