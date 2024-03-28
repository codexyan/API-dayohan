const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let orderDetailSchema = Schema({
    ticketCategories: {
        type: {
            type: String,
            required: [true, "Tipe tiket harus diisi"],
        },
        price: {
            type: Number,
            default: 0,
        },
    },
    sumTicket: {
        type: Number,
        required: true,
    },
});

let orderSchema = Schema(
    {
        date: {
            type: Date,
            required: true,
        },
        personalDetail: {
            firstName: {
                type: String,
                required: [true, "Nama depan harus diisi"],
                minlength: 3,
                maxlength: 100,
            },
            lastName: {
                type: String,
                required: [true, "Nama belakang harus diisi"],
                minlength: 3,
                maxlength: 100,
            },
            email: {
                type: String,
                required: [true, "Email wajib diisi"],
            },
            role: {
                type: String,
                default: "Designer",
            },
        },
        status: {
            type: String,
            enum: ["Pending", "Paid"],
            default: "Pending",
        },
        totalPay: {
            type: Number,
            required: true,
        },
        totalOrderTicket: {
            type: Number,
            required: true,
        },
        orderItems: [orderDetailSchema],
        participant: {
            type: mongoose.Types.ObjectId,
            ref: "Participant",
            required: true,
        },
        payment: {
            type: mongoose.Types.ObjectId,
            ref: "Payment",
            required: true,
        },
        event: {
            type: mongoose.Types.ObjectId,
            ref: "Event",
            required: true,
        },

        historyEvent: {
            title: {
                type: String,
                required: [true, "Judul harus diisi"],
                minlength: 3,
                maxlength: 50,
            },
            date: {
                type: Date,
                required: [true, "Tanggal dan waktu harus diisi"],
            },
            about: {
                type: String,
            },
            tagline: {
                type: String,
                required: [true, "Tagline harus diisi"],
            },
            keyPoint: {
                type: [String],
            },
            venueName: {
                type: String,
                required: [true, "Tempat acara harus diisi"],
            },

            image: {
                type: mongoose.Types.ObjectId,
                ref: "Image",
                required: true,
            },
            category: {
                type: mongoose.Types.ObjectId,
                ref: "Category",
                required: true,
            },
            talent: {
                type: mongoose.Types.ObjectId,
                ref: "Talent",
                required: true,
            },
            organizer: {
                type: mongoose.Types.ObjectId,
                ref: "Organizer",
                required: true,
            },
        },
    },
    { timestamps: true }
);

module.exports = model("Order", orderSchema);
