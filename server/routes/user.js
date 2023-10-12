const express = require("express");
const router = express.Router();

const mongoose=require("mongoose");
const User=mongoose.model("User");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {JWT_SECRET}=require("../db")
const loginRequire = require("../middleware/loginRequire");

router.get('/',(req,res)=>{
    res.send("hello world!!")
})

router.post('/signup',(req,res)=>{
    const {name,email,password}=req.body;

    if(!name || !email || !password){
        return res.status(404).json({error:"Fields are empty!!"});
    }
    
    User.findOne({email:email}).then((savedUser)=>{
        if(savedUser){
            return res.status(400).json({error:"User already existing"});
        }
        bcrypt.hash(password,12).then((hashedpassword)=>{
            const user = new User({
                name,
                email,
                password:hashedpassword
            })
    
            user.save().then(user=>{
                res.json({message:"User saved successfully"});
            }).catch((err)=>{
                console.log(err);
            })
        })
    }).catch((err)=>{
        console.log(err)
    })
})

router.post('/signin',(req,res)=>{
    const {email,password}=req.body;

    if(!email || !password){
        return res.status(404).json({error:"Fields are empty!!"});
    }

    User.findOne({email:email}).then((savedUser)=>{
        if(!savedUser){
            return res.status(404).json({error:"Users are not exist"});
        }

        bcrypt.compare(password,savedUser.password).then((match)=>{
            if(match){
                // return res.status(200).json({message:"Sign in successfully"});
                
                // its use for token
                const token = jwt.sign({_id:savedUser._id},JWT_SECRET);
                return res.json({token});
            }

            return res.status(404).json({error:"Invalid Password or email"});
        }).catch(err=>{
            console.log(err);
        })
    }).catch(err=>{
        console.log(err);
    })
})
module.exports = router;