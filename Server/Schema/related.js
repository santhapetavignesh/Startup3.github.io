import mongoose, { Schema } from "mongoose";

const related = new Schema({
    id:Number,
    product_Name:String,
    product_image:String,
    old_price:Number,
    new_price:Number,
    rating:Number 
})
const database1= mongoose.model("relatedprodutcs",related);

export default database1;