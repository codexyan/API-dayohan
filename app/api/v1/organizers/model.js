const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let organizersSchema = Schema(
  {
    organizer: {
      type: String,
      required: [true, "Penyelenggara harus diisikan"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Organizer", organizersSchema);
