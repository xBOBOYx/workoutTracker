const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    exercises: [
    {
      type: {
        type: String,
        required: 'Enter exercise',
      },
      name: {
        type: String,
        required: 'Enter name of exercise',
      },
      duration: {
        type: Number,
        required: 'Enter duration in minutes',
      },
      distance: {
        type: Number
      },
      weight: {
        type: Number
      },
      sets: {
        type: Number
      },
      reps: {
        type: Number
      },
    },
  ],
  day: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;