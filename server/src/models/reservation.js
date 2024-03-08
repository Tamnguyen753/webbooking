import mongoose, { SchemaTypes } from "mongoose";
const reservationSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    quantity: Number,
    status: {
        type: String,
        enum: ["pending", "accepted", "rejected", "checkIn", "checkOut"],
        default: "pending",
    },
    reservationDate: Date,
    acceptedDate: Date,
    rejectedDate: Date,
    checkInDate: Date,
    checkOutDate: Date,
    tables: [
        {
            type: SchemaTypes.ObjectId,
            ref: "tables",
        },
    ],
    restaurantId: {
        type: SchemaTypes.ObjectId,
        ref: "restaurants",
        require: true,
    },
    menu: [
        {
            type: SchemaTypes.ObjectId,
            ref: "menu",
        },
    ],
});
const reservationModel = mongoose.model("reservations", reservationSchema);
export default reservationModel;
