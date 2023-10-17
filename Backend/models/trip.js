const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tripSchema = new Schema({
  title: { type: String, require: true },
  tripFrom: { type: String, require: true },
  tripTo: { type: String, require: true },
  commuteType: { type: String, require: true },
  totalDistance: { type: String, require: true },
  creator: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  carbonEmissions: { type: Number, required: true },
});

module.exports = mongoose.model("Trip", tripSchema);
