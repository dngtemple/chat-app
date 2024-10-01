import JsonWebToken from "jsonwebtoken"
import userModel from "./models/user.js";

export const Protection = async (req,res,next)=>{
    
    try {

        const token = req.cookies.JsonWebToken;
        // console.log(token)

        if(!token){
        res.status(401).json({ success: false, message: "unauthorized access"});
        }

        const decode =JsonWebToken.verify(token,process.env.SECRET_TOKEN_KEY)
        // console.log(decode,process.env.SECRET_TOKEN_KEY)

        if(!decode){
        res.status(401).json({ success: false, message: "invalid token"});
        }

        const user = await userModel.findById(decode.userID).select("-password")
        // console.log(user)

        if(!user){
           res.status(400).json({ success: false, message: "User not found"});
        }

        req.user=user;

        next()
        
    } catch (error) {
        res.status(500).json({ success: false, message: "Controller error", error: error.message });
        
    }

}