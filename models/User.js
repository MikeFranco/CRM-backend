const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); //Encryption library

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    default: 'regular',
    enum: ['regular', 'admin']
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
//when the user saves their data the encryption is executed
UserSchema.pre('save', function (next) {
  bcrypt
    .genSalt(10)
    .then(salts => {
      bcrypt
        .hash(this.password, salts)
        .then(hash => {
          this.password = hash;
          next();
        })
        .catch(error => next(error));
    })
    .catch(error => next(error));
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
