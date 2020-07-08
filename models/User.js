const { model, Schema } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    role: {
      type: String,
      default: 'regular',
      enum: ['regular', 'admin'],
      required: true
    },
    district: {
      type: String
    },
    bought: {
      type: String
    },
    purchased: {
      type: String
    }
  },
  { versionKey: false }
);

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', userSchema);
