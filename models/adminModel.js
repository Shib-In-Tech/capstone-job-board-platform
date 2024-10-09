import mongoose from "mongoose";
const adminSchema = new mongoose.Schema(
    {
       employers:[
        {
        employerId:{
            type: Schema.Types.ObjectId,
            ref: "employerData",
            required: true,
        },
        name:{
            type:String,
            require:true,
          },
          email:{
            type:String,
            require:true,
          },
          jobpost:{
            type:String,
            require:true,
          },
        },
    ],
    user:[
        {
          userId:{
            type: Schema.Types.ObjectId,
            ref: "userData",
            required: true,
          },
          name: {
            type : String,
            require: true,
        },
        email: {
            type : String,
            require: true,
        },
        mobile:{
            type : String,
            require: true,
        },
        },
],
    },
    { timestamps: true }
);
export const adminData = mongoose.model("adminData",adminSchema);