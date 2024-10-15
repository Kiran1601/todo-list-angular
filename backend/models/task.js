const mongoose = require('mongoose');

// Define the Mongoose Schema for tasks
const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  completed: { type: Boolean, default: false },
  date: { type: Date, default: Date.now }
});

// Export the Mongoose model for tasks
module.exports = mongoose.model('Task', taskSchema);
