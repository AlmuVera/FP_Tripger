const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema(
  {
    city: {
      type: String,
      required: "City is required",
      trim: true,
      maxLength: [50, `City must be <= 20 chars`],
    },
    description: {
      type: String,
      // required: "Description is required",
    },
    coverPhoto: {
      type: String,
      required: "Thumbnail is required",
      trim: true,
      // validate: {
      //   validator: isURL,
      //   message: "URL is not valid",
      // },
    },
    startDate: {
      type: Date,
      default: Date.now,
    },
    endDate: {
      type: Date,
      default: Date.now,
    },
    travelers: Number,
    budget: Number,

    owner: String,

    // owner: {
    //   ref: "User",
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    // },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        return ret;
      },
    },
  }
);

const Trip = mongoose.model("Trip", tripSchema);
module.exports = Trip;
