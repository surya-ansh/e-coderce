import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name:{type:String , required: true},
    priceIncents:{type:Number, required:true},
    description : {type:String, required: false},
    image:{type:String, required:true},
    category:{
        type:String,
        required: true,
        enum: ['course', 'template'],
    },
});

export const Product = mongoose.model("Product", productSchema);