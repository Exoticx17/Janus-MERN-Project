const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const learningSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["Science", "Entrepreneurship", "Soft Skills", "Chemistry", "AI", "Statistics", "Engineering", "Physics", "Economics", "Science History", "Computer Science","Electrical Engineering", 'Web Design']
    },
    accepted: {
        type: String,
        required: true,
        enum: ['true', 'false', 'na']
    },
    user: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
      }
},{timestamps: true})

const Learning = mongoose.model('Learning', learningSchema)
module.exports = Learning;