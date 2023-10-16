const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;
const postSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:"no photo"
    },
    postedBy:{
        type:ObjectId,
        ref:"User",
        default:'65279adc7524ef7872ffdd0a'
    }
})

mongoose.model("Post",postSchema);