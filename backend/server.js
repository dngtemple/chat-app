import express from "express"
// const app = express();

import cors from "cors"


import dotenv from "dotenv"
dotenv.config()
const PORT = process.env.PORT || 8001

import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.js"
import messageRoutes from "./routes/message.js"
import userRoutes from "./routes/user.js";
import { app ,server} from "./socket.js";



import connectToMongoDB from "./database.js";


app.use(express.json())

app.use(cors({
    credentials: true,
    origin:"http://localhost:3000" // Allow credentials (cookies, sessions)
  }));
app.use(cookieParser())
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

server.listen(PORT,function(){
    connectToMongoDB();
    console.log("server running on port "+PORT);
})