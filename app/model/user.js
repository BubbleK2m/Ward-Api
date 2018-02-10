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
    
    email: String,
    phone: String,

    schools: [School.schema],

    ward: new Schema({
        x: Number,
        y: Number,
    }),
});

module.exports = mongoose.model('users', User);