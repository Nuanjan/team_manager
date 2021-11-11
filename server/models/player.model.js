const mongoose = require("mongoose");
const PlayerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [2, "Name must be at least 2 characters long"],
    },
    preferred_position: { type: String },
    player_status:{type: String, default: "undecided"}
  },
  { timestamps: true }
);
module.exports = mongoose.model("Player", PlayerSchema);
