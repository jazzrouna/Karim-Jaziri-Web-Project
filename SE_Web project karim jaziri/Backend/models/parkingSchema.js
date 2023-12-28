const { number } = require('joi')
const mongoose = require('mongoose')

const parkingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    Availability: {
        type: Boolean,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }
})

module.exports = mongoose.model("Parking", parkingSchema)