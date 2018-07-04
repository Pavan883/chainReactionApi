const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CandidateSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    age: {
        type: Number,
        required: [true, 'Age field is required']
    },
    email: {
        type: String,
        required: [true, 'Email field is required']
    },
    gender: {
      type: String,
      required: [true, 'Gender field is required']
    },
    skillset: {
        type: [String]
    },
    experience: {
      type: Number
    },
    userid: {
      type: String
    }
});

const Candidate = mongoose.model('candidate', CandidateSchema);
module.exports = Candidate;
