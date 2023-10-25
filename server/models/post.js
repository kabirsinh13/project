const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    category:{
        type:String,
        required: true,
    },
    file:[
        {
            type:Object,
            require:true
        }
    ],
    postedBy: {
        type: ObjectId,
        ref: "User",
        default: '65279adc7524ef7872ffdd0a',
    },
},{toObject:{virtuals:true}},{toJSON:{virtuals:true}});

mongoose.model("Post", postSchema);