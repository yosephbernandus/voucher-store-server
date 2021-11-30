const mongoose = require('mongoose');
const bycrypt = require('bcryptjs');
const HASH_ROUND = 10;


let playerScheme = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email harus diisi']
    },
    name: {
        type: String,
        required: [true, 'nama harus diisi'],
        maxlength: [225, 'panjang nama harus antara 9 - 225 karakter'],
        minlength: [3, 'panjang nama harus antara 9 - 225 karakter']
    },
    username: {
        type: String,
        required: [true, 'username harus diisi'],
        maxlength: [225, 'panjang username harus antara 9 - 225 karakter'],
        minlength: [3, 'panjang username harus antara 9 - 225 karakter']
    },
    password: {
        type: String,
        required: [true, 'kata sandi harus diisi'],
        maxlength: [225, 'panjang password harus 225 karakter'],
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    status: {
        type: String,
        enum: ['Y', 'N'],
        default: 'Y'
    },
    avatar: {
        type: String,
    },
    fileName: {
        type: String,
    },
    phoneNumber: {
        type: String,
        required: [true, 'nomor telepon harus diisi'],
        maxlength: [13, 'panjang nomor telepon harus antara 9 - 13 karakter'],
        minlength: [9, 'panjang nomor telepon harus antara 9 - 13 karakter']
    },
    favorite: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
}, { timestamps: true });

playerScheme.path('email').validate(async function (value) {
    try {
        const count = await this.model('Player').countDocuments({ email: value });
        return !count;
    } catch (error) {
        throw error;
    }
}, attr => `${attr.value} sudah terdaftar`);

playerScheme.pre('save', function (next) {
    this.password = bycrypt.hashSync(this.password, HASH_ROUND);
    next();
})

module.exports = mongoose.model('Player', playerScheme);
