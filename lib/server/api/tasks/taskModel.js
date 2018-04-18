const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  user_id:  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  description: {
    type: String,
    required: true
  },
  pieces: [{
    start: { type: Date, default: Date.now },
    end: { type: Date, default: null }
  }]
}, {
  timestamps: true
});

taskSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model('tasks', taskSchema);