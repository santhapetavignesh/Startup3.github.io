import mongoose, { Schema } from "mongoose";

const product = new Schema({
    id:Number,
    product_Name:String,
    Sub_title:String,
    product_image:String,
    old_price:Number,
    new_price:Number,
    rating:Number,
    tax_details:String,
    product_related_Gallary:[String],
    specification:[String],
    how_to_use:[String],
    review:{review_image:[String],review_name:[String],review_date:[String],review_data:[String]},
    Category:String
})
const database= mongoose.model("products",product);
export default database;