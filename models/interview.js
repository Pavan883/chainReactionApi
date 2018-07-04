const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const InterviewSchema = new Schema({
    userid: {
        type: String,
    },
    jobid: {
        type: Number,
        required: [true, 'JobID field is required']
    },
    interviewdate: {
        type: Date,
        required: [true, 'InterviewDate is required']
    },
    interviewresult: {
        type: String
    },
    interviewfeedback: {
        type: String
    },
    candidatefeedback: {
      type: String
    }
});

const Interview = mongoose.model('Interview', InterviewSchema);
module.exports = Interview;
