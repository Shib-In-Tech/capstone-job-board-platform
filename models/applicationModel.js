import mongoose, { Schema } from "mongoose";
const applicationDataSchema = new mongoose.Schema(
    {
      jobList:[
        {
            jobId:{
            type: Schema.Types.ObjectId,
            ref: "jobData",
            required: true,
            },
        },
      ],
      applicantList:[
        {
            applicantId:{
                type: Schema.Types.ObjectId,
                ref: "juserData",
                required: true,
                },
                resume_url:{
                    type:String,
                    default:"https://drive.google.com/file/d/1MqmyWXY8NfY49SIm66da4d4uoTl4ZtkZ/view?usp=sharing"
                },
        },
      ],
      status:{
        type: String,
        enum: ["submitted", "reviewed", "shortlisted","rejected","accepted"],
        default: 'reviewed',
      },
      createdAt: {
        type: Date,
        default: Date.now,
    },
    },
);
export const appnData = mongoose.model("appnData",applicationDataSchema);