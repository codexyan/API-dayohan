const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let talentSchema = Schema(
    {
        name: {
            type: String,
            required: [true, "Nama harus diisi"],
        },
        role: {
            type: String,
            default: "-",
        },
        // Untuk membuat relasi pada mongodb kita perlu membuat
        image: {
            type: mongoose.Types.ObjectId,
            ref: "Image",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model("Talent", talentSchema);
