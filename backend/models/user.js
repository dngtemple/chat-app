import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        required:true,
        unique:true,
        type:String
    },
    userName:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        required:true,
        type:String
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]
    },
    profilePic:{
        type:String,
        default:""
    }
},{timestamps:true})

const userModel= mongoose.model("User",userSchema)


export default userModel;

