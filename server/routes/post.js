const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const loginRequire = require("../middleware/loginRequire");
const Post = mongoose.model("Post");
const multer = require('multer');

// let storage = multer.diskStorage({
//     destination: function(req,file,cb){
//         cb(null,'./uploads');
//     },
//     filename: function(req,file,cb){
//         cb(null,file.fieldname + '_' + Date.now() + "_" + file.originalname);
//     }
// });

let upload=multer();

router.post('/createPost',upload.array('photos',12),async (req,res)=>{
    console.log(req.body)
    const newPost = new Post({
        ...req.body,
        file:req.files
     })
 
     await newPost.save()
     res.send()
    // const post = req.body;
    // const imageName=req.file.filename;
    // post.image=imageName;
    // // if(!title || !body){
    // //     return req.json({error:"Please add all fields"})
    // // }

    // // post.save().then((result)=>{
    // //     res.json({post:result});
    // // }).catch((err)=>{
    // //     res.json({error:err})
    // // })

    // try{
    //     Post.create(post);
    //     res.status(201).json({message:"Post created successfully"});
    // }
    // catch(err){
    //     res.status(400).json({message: err.message})
    // }
})

router.get("/allPost",(req,res)=>{
    Post.find().populate('postedBy',"_id name").then((post)=>{
        return res.json({post});
    }).catch((error)=>{
        console.log(error)
    })
})

router.delete('/deletepost/:postId',(req,res)=>{
    Post.findOne({_id:req.params.postId})
    .populate('postedBy','_id name')
    // .populate("postedBy","_id name")
    // .populate("comments.postedBy","_id name")
    .then((post)=>{  
        
            post.deleteOne()
            .then(result=>{
                res.json(result)
            })
        
        
    }).catch(err=>{
        console.log(err)
    })
    

})

router.get("/allPost/:postId",(req,res)=>{
    Post.find({_id:req.params.postId}).populate('postedBy',"_id name").then((post)=>{
        return res.json({post});
    }).catch((error)=>{
        console.log(error)
    })
})

router.get("/mypost",loginRequire,(req,res)=>{
    Post.find({postedBy:req.user._id}).populate("postedBy","_id name").populate('image',"data").then((post)=>{
        return res.json({post});
    }).catch((err)=>{
        console.log(err);
    })
})
module.exports = router;

















// const express = require("express");
// const router = express.Router();
// const mongoose = require("mongoose");
// const loginRequire = require("../middleware/loginRequire");
// const Post = mongoose.model("Post");

// // router.post('/createPost',loginRequire,(req,res)=>{
// router.post('/createPost',(req,res)=>{
    
//     const post = req.body;
//     const imageName=req.file.filename;
//     post.image=imageName;
//     // console.log(title);
//     // console.log(body);
//     if(!title || !body){
//         return req.json({error:"Please add all fields"})
//     }
//     // req.user.password=undefined; 
//     // const post = new Post({
//     //     title,
//     //     body,
//     //     postedBy:req.user
//     // })

//     post.save().then((result)=>{
//         res.json({post:result});
//     }).catch((err)=>{
//         res.json({error:err})
//     })
// })

// router.get("/allPost",(req,res)=>{
//     Post.find().populate('postedBy',"_id name").then((post)=>{
//         return res.json({post});
//     }).catch((error)=>{
//         console.log(error)
//     })
// })

// router.get("/allPost/:postId",(req,res)=>{
//     Post.find({_id:req.params.postId}).populate('postedBy',"_id name").then((post)=>{
//         return res.json({post});
//     }).catch((error)=>{
//         console.log(error)
//     })
// })

// router.get("/mypost",loginRequire,(req,res)=>{
//     Post.find({postedBy:req.user._id}).populate("postedBy","_id name").populate('image',"data").then((post)=>{
//         return res.json({post});
//     }).catch((err)=>{
//         console.log(err);
//     })
// })
// module.exports = router;