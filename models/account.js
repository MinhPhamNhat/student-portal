const mongoose = require('mongoose')
const accountSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    password: String,
    role: {
        admin: Boolean,
        // unit : [phong, khoa]
        unit: Boolean
    }
})

module.exports = mongoose.model('Account', accountSchema)