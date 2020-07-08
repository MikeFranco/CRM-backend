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

//exports.updateDevice = async (req, res) => {
//  const { _id, type, label, manufacturer, state } = req.body.newDeviceInfo;
//
//  const data = {
//    _id,
//    type,
//    label,
//    manufacturer,
//    state
//  };
//
//  const updatedDevice = await Devices.findByIdAndUpdate(_id, data, {
//    new: true
//  });
//  res.json({ ok: true, updatedDevice });
//};
//
//exports.updateDeviceState = async (req, res) => {
//  const { id, deviceState } = req.body;
//
//  const data = {
//    id,
//    state: deviceState
//  };
//
//  const updatedDeviceState = await Devices.findByIdAndUpdate(id, data, {
//    new: true
//  });
//  res.json({ ok: true, updatedDeviceState });
//};
//
//exports.toggleTurnOff = async (req, res) => {
//  const { id, turnOnValue } = req.body;
//
//  const data = {
//    id,
//    state: {
//      turnedOn: turnOnValue
//    }
//  };
//
//  const toggleTurnedOff = await Devices.findByIdAndUpdate(id, data, {
//    new: true
//  });
//  res.json({ ok: true, toggleTurnedOff });
//};
//
//exports.deleteDevice = async (req, res) => {
//  const { id } = req.params;
//
//  await Devices.findByIdAndDelete(id);
//  res.json({ ok: true, msg: 'Device deleted' });
//};
//
