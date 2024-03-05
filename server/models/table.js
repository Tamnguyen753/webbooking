import mongoose, { Schema, SchemaType } from "mongoose";
const tableSchema = new mongoose.Schema({
    no: Number,
    status: {
        type: String,
        enum: ['free', 'inuse'],
        default: 'free'
    },
    restaurantId: {
        type: SchemaTypes.ObjectId,
        ref: "restaurants",
        require: true
    }
})
const tableModel = mongoose.model("tables", tableSchema)
export default tableSchema