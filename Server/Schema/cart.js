import mongoose, { Schema } from "mongoose";

const cartproduct = new Schema({
    id:Number,
    product_Name:String,
    Sub_title:String,
    product_image:String,
    old_price:Number,
    new_price:Number,
    rating:Number
})
const database3= mongoose.model("cartproducts",cartproduct);
export default database3;