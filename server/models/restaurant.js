import mongoose, { SchemaTypes } from "mongoose";

const restaurantSchema = new mongoose.Schema({
    name: String,
    address: String,
    describe: String,
    image: Array,
    rate: Number
})
const restaurantModel = mongoose.model("restaurants", restaurantSchema)
export default restaurantModel