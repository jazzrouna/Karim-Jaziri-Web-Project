const mongoose = require('mongoose')

const paymentMethodSchema = new mongoose.Schema({
    creditcard: {
        type: Boolean,
        required: true
    },
    mobile: {
        type: String,
    }
})

module.exports = mongoose.model("PaymentMethod", paymentMethodSchema)