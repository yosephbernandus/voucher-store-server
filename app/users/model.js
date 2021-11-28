const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email harus diisi']
    },
    name: {
        type: String,
        required: [true, 'nama harus diisi']
    },
    password: {
        type: String,
        required: [true, 'kata sandi harus diisi']
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'admin'
    },
    status: {
        type: String,
        enum: ['Y', 'N'],
        default: 'Y'
    },
    phoneNumber: {
        type: String,
        required: [true, 'nomor telepon harus diisi']
    },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
