import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const dbUser=process.env.DB_USER
const dbPassword=process.env.DB_PASSWORD



const connectToMongoDB = async ()=>{
    try{
       await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.s9wjca8.mongodb.net/chat-app`)
       console.log("database successfully connected")
    }
    catch(err){
        console.log("error connecting to database"+err);
    }

}


export default connectToMongoDB;
