import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        person: {type:String, required:true},
        product: {type:String, required: true},
        image: {type:String, required: true},
        address: {type:String, required: true},
        price: {type:Number, required:true},
        status: {type:String, required:true},
        quantity: {type:Number, required:true}
    }
);

const Order = mongoose.model('Order', orderSchema);
export default Order;