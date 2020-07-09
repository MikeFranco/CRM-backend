const User = require('../models/User');

exports.signup = async (req, res) => {
  const {
    firstName,
    secondName,
    firstLastName,
    secondLastName,
    email,
    password,
    phone,
    district,
    bought,
    purchased,
    role
  } = req.body;
  const user = await User.register(
    {
      firstName,
      secondName,
      firstLastName,
      secondLastName,
      email,
      password,
      phone,
      district,
      bought,
      purchased,
      role
    },
    password
  );
  res.status(200).json({ ok: true, user });
};

exports.login = async (req, res, next) => {
  const { user } = req;
  const currentUser = await User.findById({ _id: user._id });
  res.status(200).json({ ok: true, currentUser });
};
