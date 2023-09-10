const mongoose = require("mongoose");
const MONGO_URI = "mongodb+srv://blogapp://@cluster0.mwbydw6.mongodb.net/blogs?retryWrites=true&w=majority"
 const connectDb = async () =>{
    
    const connection = await mongoose.connect(MONGO_URI);
    if(connection) console.log("database connected");
    else console.log("failed");

 }
 module.exports = {connectDb};
 