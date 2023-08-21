import User from "../models/User.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
export const signUp = async (req,res) => {
    let temp = req.body;
    let password = CryptoJS.AES.encrypt(temp.Password, process.env.SECRET_KEY).toString();
    temp.Password = password;
    const user = new User(temp);
    try{
        await user.save();
        res.status(200).json({sucess:true,token:jwt.sign({id:user._id,Name:user.Name},process.env.SIGN,{expiresIn:"5d"})});
    }catch(err){
        res.status(400).json({sucess:false,error:"Internal Server Error"});
    }
};

export const logIn = async (req,res)=>{
    let user = await User.findOne({Email:req.body.Email});
    if(!user){
        res.status(401).json({sucess:false,error:"Invalid Email or Password"});
    } else {
        let bytes = CryptoJS.AES.decrypt(user.Password, process.env.SECRET_KEY);
        let originalPassword = bytes.toString(CryptoJS.enc.Utf8);
        if(originalPassword === req.body.Password){
            res.status(200).json({sucess:true,token:jwt.sign({id:user._id,Name:user.Name},process.env.SIGN,{expiresIn:"5d"})});
        } else {
            res.status(400).json({sucess:false,error:"Invalid Email or Password"});
        }
    }
}