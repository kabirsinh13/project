const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const loginRequire = require("../middleware/loginRequire");
const Post = mongoose.model("Post");

router.post('/createPost',loginRequire,(req,res)=>{
    const {title,body} = req.body;

    if(!title || !body){
        return req.json({error:"Please add all fields"})
    }
    req.user.password=undefined; 
    const post = new Post({
        title,
        body,
        postedBy:req.user
    })

    post.save().then((result)=>{
        res.json({post:result});
    }).catch((err)=>{
        res.json({error:err})
    })
})

router.get("/allPost",(req,res)=>{
    Post.find().populate('postedBy',"_id name").then((post)=>{
        return res.json({post});
    }).catch((error)=>{
        console.log(error)
    })
})

router.get("/mypost",loginRequire,(req,res)=>{
    Post.find({postedBy:req.user._id}).populate("postedBy","_id name").then((post)=>{
        return res.json({post});
    }).catch((err)=>{
        console.log(err);
    })
})
module.exports = router;