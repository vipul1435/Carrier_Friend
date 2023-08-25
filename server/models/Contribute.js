import mongoose from 'mongoose';

const ContributesSchema = new mongoose.Schema({
    Company: {
        type: String,
        required: true
    },
    Role: {
        type: String,
        enum: ['Full Stack Developer Job', 'Frontend Developer Job', 'Backend Developer Job', 'DevOps Developer Job', 'Data Scientist Job', "Data Analyst Job"],
        required: true
    },
    Location: {
        type: String,
    },
    Type: {
        type: String,
        enum: ['Full Time', 'Part Time', 'Internship', 'Freelance', 'Contract'],
        required: true
    },
    Worktype: {
        type: String,
        enum: ['Remote', 'Onsite', 'Hybrid'],
        required: true
    },
    SharedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    Skill: {
        type: Array,
        default: []
    },
    LastDate: {
        type: Date,
        default: () => {
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + 20);
            return currentDate;
          },
    },
    Link: {
        type: String,
        required: true
    },
    Grade: {
        type: Array,
        default: []
    },
    Description: {
        type: String,
    },
    status: {
        type: String,
        enum: ['verified', 'pending', 'rejected'],
        default: 'pending'
    },
},{timestamps:true});

const Contributes = mongoose.model('Contributes', ContributesSchema);
export default Contributes;