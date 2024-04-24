const mongoose = require('mongoose');

const cinemaSchema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    notice: {
        type: String,
    },
    state: {
        type: Boolean,
        required: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Cinema', cinemaSchema, 'cinema');