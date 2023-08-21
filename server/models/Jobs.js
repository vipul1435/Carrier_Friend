import mongoose from 'mongoose';

const JobsSchema = new mongoose.Schema({
    Company:{
        type:String,
        required:true
    },
    Role:{
        type:String,
        enum:['Full Stack Developer Job','Frontend Developer Job','Backend Developer Job','DevOps Developer Job','Data Scientist Job',"Data Analyst"],
        required:true
    },
    Location:{
        type:String,
    },
    Type:{
        type:String,
        enum:['Full Time','Part Time','Internship','Freelance','Contract'],
        required:true
    },
    Worktype:{
        type:String,
        enum:['Remote','Onsite','Hybrid'],
        required:true
    },
    SharedBy:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
    Skill:{
        type:Array,
        required:true
    },
    LastDate:{
        type:Date,
    },
    Impressions:{
        type:Number,
        default:0
    },
    Link:{
        type:String,
        required:true
    },
    Grade:{
        type:Array,
        default:[]
    },
    Description:{
        type:String,
    }
});

const Jobs = mongoose.model('Jobs',JobsSchema);
export default Jobs;
