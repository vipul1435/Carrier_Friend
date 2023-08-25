import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true
    },
    ProfilePicture:{
        type:String,
        default:""
    },
    Phone:{
        type:String,
        default:""
    },
    Contributions:{
        type:Number,
        default:0
    }
},{timestamps:true});

const User = mongoose.model('User',userSchema);

export default User;