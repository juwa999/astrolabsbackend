const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const ExperienceSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }

});

module.exports = Experience = mongoose.model('experiences', ExperienceSchema);