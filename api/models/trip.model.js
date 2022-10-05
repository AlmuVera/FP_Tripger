const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  title: {
    type: String,
    required: "Title is required",
    trim: true,
    maxLength: [20, `Title must be <= 20 chars`],
  },
}, { timestamps: true });

const Trip = mongoose.model("Trip", tripSchema);
module.exports = Trip;
