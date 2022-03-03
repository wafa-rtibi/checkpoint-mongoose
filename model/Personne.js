//importation mongoose
const mongoose=require("mongoose")

const {Schema}=mongoose
const personSchema= new Schema({
    name:{
        required:true,
        type:String
    },
    phone:Number,
    favoriteFoods:{
        type:String
    },
    age:{
        required:true,
        type:Number
    },
    email:{
        required:true,
        type:String,
        unique:true
    }
})
module.exports=Person=mongoose.model("person",personSchema)