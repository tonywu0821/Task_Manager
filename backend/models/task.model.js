const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  taskName: { type: String, required: true },
  description: { type: String, required: true },
  designee: { type: String, required: true },
  startDate:{ type: Date, required: false },
  endDate:{ type: Date, required: false },
  status: {type:String, required:false },
}, {
  timestamps: true,
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;