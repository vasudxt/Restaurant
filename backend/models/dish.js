import mongoose from 'mongoose';

const dishSchema = mongoose.Schema ({
    category:String,
    dishName: String,
    price: Number,
    selectedFile: String,
})

var PostDish = mongoose.model(' PostDish', dishSchema);

export default PostDish;