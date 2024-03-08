import mongoose from "mongoose";
const customerSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    phone: Number,
    avatar: String
})
const customerModel = mongoose.model('customers', customerSchema)
export default customerModel