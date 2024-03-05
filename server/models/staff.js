import mongoose, { SchemaTypes } from "mongoose";
const staffSchema = new mongoose.Schema({
    name: String,
    address: String,
    dateOfBirth: Date,
    staffCode: String,
    restaurantId: {
        type: SchemaTypes.ObjectId,
        ref: "restaurants",
        require: true
    },
    username: String,
    password: String,
    type: {
        type: String,
        enum: ["staff", "manager"],
        default: "staff",
    },
})
const staffModel = mongoose.model("staff", staffSchema)
export default staffModel