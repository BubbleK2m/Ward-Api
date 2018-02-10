const mongoose = require('../../lib/mongoose');
const { Schema } = mongoose;

const School = require('./school');

const User = new Schema({
    id: {
        type: String,
        unique: true
    },

    pw: String,
    name: String,
    sex: String,
    birthday: Date,
    
    email: String,
    phone: String,

    schools: {
        type: [School.schema],
        default: []
    },

    ward: {
        type: [Number],
        default: [],
    },
});

module.exports = mongoose.model('users', User);