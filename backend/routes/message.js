import express from "express";
import { getMessages, sendMessage } from "../controller/message_control.js";
import { Protection } from "../protect.js";

const router= express.Router()


router.get("/:id",Protection,getMessages)
router.post("/send/:id",Protection,sendMessage)


export default router;