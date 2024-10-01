import express from "express"
const app = express();


import dotenv from "dotenv"
dotenv.config()
const PORT = process.env.PORT || 8001

import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.js"
import messageRoutes from "./routes/message.js"
import userRoutes from "./routes/user.js"


import connectToMongoDB from "./database.js";

app.use(cookieParser())
app.use(express.json())
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

app.listen(PORT,function(){
    connectToMongoDB();
    console.log("server running on port "+PORT);
})