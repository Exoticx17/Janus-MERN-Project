const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const graphSchema = new Schema({

    title: {
        type: String,
        required: true,
        enum: ["Favorite", "Learned", "Applicable", "Projects"]
    },
    subject: {
        type: String,
        required: true,
        enum: ["Entrepreneurship", "Soft Skills", "Chemistry", "AI", "Statistics", "Engineering", "Physics", "Economics", "Science History", "Computer Science"]
    }

},{timestamps: true})

const Graph = mongoose.model('Graph', graphSchema)
module.exports = Graph;