const { model, Schema } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    secondName: {
      type: String
    },
    firstLastName: {
      type: String,
      required: true
    },
    secondLastName: {
      type: String
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
      type: Boolean
    },
    purchased: {
      type: String
    },
    adminId: {
      type: String
    }
  },
  { versionKey: false }
);

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', userSchema);
