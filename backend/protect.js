import JsonWebToken from "jsonwebtoken";
import userModel from "./models/user.js";

export const Protection = async (req, res, next) => {
  try {
    const token = req.cookies.JsonWebToken;
    console.log(token);
    
    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized access" });
    }

    const decoded = JsonWebToken.verify(token, process.env.SECRET_TOKEN_KEY);

    
    // If token verification fails, return unauthorized error
    if (!decoded) {
      return res.status(401).json({ success: false, message: "Invalid token" });
    }

 
    const user = await userModel.findById(decoded.userID).select("-password");



    if (!user) {
      return res.status(400).json({ success: false, message: "User not found" });
    }

    req.user = user;


    next();

  } catch (error) {
    // Catch any errors and return a 500 response if an error occurs
    if (!res.headersSent) {
      return res.status(500).json({ success: false, message: "Controller error", error: error.message });
    }
  }
};
