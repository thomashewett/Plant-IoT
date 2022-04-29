// models/Plant.js

const mongoose = require('mongoose');

const PlantSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
});

module.exports = Plant = mongoose.model('plant', PlantSchema);