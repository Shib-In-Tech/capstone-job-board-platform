import mongoose from "mongoose";
const jobSchema = new mongoose.Schema(
    {
        role:{
        type: String,
        enum: ["employer", "admin"],
        default: 'employer'
       },
       jobtitle:{
        type:String,
        require:true,
        maxLength:20
       },
       description:{
        type:String,
        require:true,
        maxLength:600
       },
       preferSkills:{
        type:String,
        require:true,
        maxLength:600
       },
       salary:{
        type:String,
        require:true,
        maxLength:6
       },
       jobType:{
        type: String,
        enum: ["full-time", "part-time", "contract"],
        default: 'full-time'
       },
       companyId:{
        type: Schema.Types.ObjectId,
        ref: "employerData",
        required: true,
       },
       postEmployer:{
        type: Schema.Types.ObjectId,
        ref: "employerData",
        required: true,
       },
       postDate:{
        type: Date,
        default: Date.now,
       },
       status:{
        type: String,
        enum: ["active", "pending", "expired"],
        default: 'active',
       },
    }
);
export const jobData = mongoose.model("jobData",jobSchema);