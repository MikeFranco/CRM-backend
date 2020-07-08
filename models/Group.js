const { model, Schema } = require('mongoose');

const groupSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  users:{
    type: Array
  },
  userId: {
    type: String,
    required: true
  }
},{
  timestamps: true,
  versionKey: false
});

module.exports = model('Group', groupSchema);
