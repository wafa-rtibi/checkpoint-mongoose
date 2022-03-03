//importation mongoose
const mongoose=require("mongoose")

//connect db with server
const connectDB=async()=>{
   try {
    await mongoose.connect(process.env.URI)  
    console.log("database connected successfully")
   } catch (error) {
    console.log("fail to connect")
   }
}
module.exports=connectDB