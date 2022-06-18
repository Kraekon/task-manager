const mongoose = require('mongoose');
const validator = require('validator');

const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (!validator.isAlphanumeric(value, undefined, { ignore: ' .-' })) {
        throw new Error('Enter a valid task description.');
      }
    },
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = Task;
