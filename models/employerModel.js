import mongoose from "mongoose";
const employerSchema = new mongoose.Schema(
    {
      name:{
        type:String,
        require:true,
        maxLength:25
      },
      email:{
        type:String,
        require:true,
        unique:true,
        minLength:5,
      },
      password:{
        type:String,
        require:true,
        minLength:8
      },
      mobile:{
        type:String,
        require:true,
        maxLength:10,
      },
      company_name:{
        type:String,
        require:true,
        maxLength:25
      },
      gstno:{
        type:String,
        require:true,
        unique:true,
        minLength:1,
        maxLength:15
      },
      aadhaarno:{
        type:String,
        require:true,
        unique:true,
        minLength:1,
        maxLength:12
      },
      industry:{
        type:String,
        maxLength:20
      },
      location:{
        type:String,
        maxLength:20
      },
      websiteurl:{
        type:String,
        default:"https://www.google.co.in/"
      },
      jobpost:[
        {
           jobId:{
            type: mongoose.Types.ObjectId,
            ref: "jobData",
            required: true,
           },
        }
    ]

    },
    { timestamps: true }
);
export const employerData = mongoose.model("employerData",employerSchema);