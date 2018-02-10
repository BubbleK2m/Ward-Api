const mongoose = require('../../lib/mongoose');
const { Schema } = mongoose;

const School = new Schema({
    name: String,
});

module.exports = mongoose.model('schools', School);