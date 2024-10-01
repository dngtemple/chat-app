
import  generateTokenAndCookie  from "../generatetoken.js";
import userModel from "../models/user.js"
import bcryptjs from 'bcryptjs'



export const signup = async (req,res)=>{

    try{
        const { fullName,userName,email,password,confirmPassword,gender}=req.body;

        if(password !== confirmPassword){
             return res.status(400).json({success:true,message:"passwords don't match"});
        }

        const user= await userModel.findOne({userName})

        if(user){
            return res.status(400).json({success:false,message:"User already exists"});
        }

        const boyProfile= `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfile= `https://avatar.iran.liara.run/public/girl?username=${userName}`

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword= await bcryptjs.hash(password,salt);

        const newUser = new userModel ({
            fullName,
            userName,
            email,
            password:hashedPassword,
            gender,
            profilePic: gender==="male" ? boyProfile : girlProfile
        })

        await newUser.save()
            generateTokenAndCookie(newUser._id, res);


            res.status(201).json({
                _id:newUser._id,
                fullName:newUser.fullName,
                profilePic:newUser.profilePic,
                userName:newUser.userName,
                gender:newUser.gender
            })
        
    }
    catch (err) {
        res.status(500).json({ success: false, message: "Controller error", error: err.message });
    }
    
}


export const login = async (req,res)=>{
    try{

        const {userName,password}= req.body;

        const user = await userModel.findOne({userName})

        const passwordIsCorrect = await bcryptjs.compare(password,user?.password || "")

        if(!user || !passwordIsCorrect){
            res.status(400).json({success:false,message:"Invalid username or password"})
        }

        generateTokenAndCookie(user._id,res)

        res.status(200).json({
            id:user._id,
            fullname:user.fullName,
            username:user.userName,
            profile:user.profilePic
        })

    }
    catch (err) {
        res.status(500).json({ success: false, message: "Controller error", error: err.message });
    }
}


export const logout = async (req,res)=>{
    try{
        res.cookie("JsonWebToken","",{maxAge:0})
        res.status(200).json({success:true,message:"logout was successfull"})

    }
    catch(err){
        res.status(500).json({ success: false, message: "Controller error", error: err.message });
    }
}