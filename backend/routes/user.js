import express from "express";
import { Protection } from "../protect.js";
import { getAllUsers } from "../controller/user_control.js";

const router= express.Router()


router.get("/",Protection,getAllUsers)





export default router;