import userModel from "../models/user.js";

export const getAllUsers = async(req,res)=>{
    try {

        const loggedUser = await req.user._id;
        const allUsers = await userModel.find({_id:{$ne:loggedUser}}).select("-password")
        // console.log(loggedUser,allUsers)

        if(allUsers){
            res.status(200).json(allUsers)
        }
        
    } catch (error) {
        res.status(500).json({ success: false, message: "Controller error", error: error.message });
         
    }

}