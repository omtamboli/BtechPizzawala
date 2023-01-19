import mongoose from "mongoose";

const schema = new mongoose.Schema({

    name:"string",
    photo: "string",
    googleId:{
        type:"string",
        required:true,
        unique:true
    },
    role:{
        type:"string",
        enum:["admin","user"],
        default: "user",
    },

    createdAt :{
        type:Date,
        default: Date.now,
    }
});


export const User = mongoose.model("User", schema);