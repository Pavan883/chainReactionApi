const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CandidateSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    password: {
        type: String,
        required: [true, 'Password field is required']
    },
    role: {
        type: String,
        required: [true, 'Role field is required']
    }

});

const Candidate = mongoose.model('jobs', CandidateSchema);
module.exports = Candidate;