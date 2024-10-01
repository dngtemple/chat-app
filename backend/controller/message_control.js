import conversationModel from "../models/conversation.js"
import messageModel from "../models/message.js"



export const sendMessage = async(req,res)=>{

    try {
        const {message} = await req.body;


    const {id:receiverId} =req.params;
    const senderId = req.user._id
    
    
    let conversation = await conversationModel.findOne({
        participants:{ $all:[senderId,receiverId]}
    })

    if(!conversation){
        conversation = await conversationModel.create({
            participants:[senderId,receiverId]
        })
    }

    const newMessage = new messageModel({
        senderId,
        receiverId,
        message,
    })

    if(newMessage){
        conversation.messages.push(newMessage._id)
    }

    await Promise.all([conversation.save(),newMessage.save()])

    res.status(201).json(newMessage);
        
    } catch (error) {
        res.status(500).json({ success: false, message: "Controller error", error: error.message });

        
    }
    
}



export const getMessages = async(req,res)=>{
    try {
        const {id:userToChat}= req.params;
        const senderId= req.user._id

        const conversation = await conversationModel.findOne({
            participants:{ $all:[senderId,userToChat]}
        }).populate("messages")


        if(!conversation) return res.status(200).json([]);


        res.status(200).json(conversation.messages)

    } catch (error) {
        res.status(500).json({ success: false, message: "Controller error", error: error.message });

        
    }
}