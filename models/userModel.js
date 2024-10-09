import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type : String,
            require: true,
            maxLength: 25
        },
        email: {
            type : String,
            require: true,
            unique:true,
            minLength:2,
            maxLength: 25
        },
    
        password:{
            type : String,
            require: true,
            minLength: 8,
        },
        userdetails: [
            {
                profilepic:{
                    type:String,
                    default: "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                },
                resume_url:{
                    type:String,
                    default:"https://drive.google.com/file/d/1MqmyWXY8NfY49SIm66da4d4uoTl4ZtkZ/view?usp=sharing"
                },
                skills:{
                    type:String,
                    maxLength: 60
                },
                experience:{
                    type:String,
                    maxLength: 60
                },
                education:{
                    type:String,
                    maxLength: 60
                },
                location:{
                    type:String,
                    require: true,
                    maxLength: 60
                },

            }
        ]
    },
    { timestamps: true }
);
 export const userData = mongoose.model("userData",userSchema);