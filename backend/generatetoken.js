import  JsonWebToken  from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config()

const generateTokenAndCookie = (userID,res)=>{
    const token = JsonWebToken.sign({userID},process.env.SECRET_TOKEN_KEY,{
        expiresIn:"15d"
    })


    res.cookie("JsonWebToken",token,{
        maxAge : 15 * 24 * 60 * 60 * 1000,
        httpOnly:true,
        sameSite:"strict"
    })

}

export default generateTokenAndCookie;