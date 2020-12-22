const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const designeeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Designee = mongoose.model('Designee', designeeSchema);

module.exports = Designee;