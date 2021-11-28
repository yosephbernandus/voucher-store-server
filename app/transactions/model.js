const mongoose = require('mongoose');

let transactionScheme = mongoose.Schema({
    historyVoucherTopup: {
        gameName: {
            type: String,
            required: [true, 'Nama game harus diisi']
        },
        category: {
            type: String,
            required: [true, 'Kategori harus diisi']
        },
        thumbnail: {
            type: String
        },
        coinName: {
            type: String,
            required: [true, 'Nama koin harus diisi']
        },
        coinQuantity: {
            type: String,
            required: [true, 'jumlah koin harus diisi']
        },
        price: {
            type: Number
        },
    },
    historyPayment: {
        name: {
            type: String,
            required: [true, 'Nama harus diisi']
        },
        type: {
            type: String,
            required: [true, 'tipe pembayaran harus diisi']
        },
        bankName: {
            type: String,
            required: [true, 'nama bank harus diisi']
        },
        noRekening: {
            type: String,
            required: [true, 'nomor rekening harus diisi']
        },
    },
    name: {
        type: String,
        required: [true, 'nama harus diisi'],
        maxlength: [225, 'panjang nama harus antara 9 - 225 karakter'],
        minlength: [3, 'panjang nama harus antara 9 - 225 karakter']
    },
    accountUser: {
        type: String,
        required: [true, 'nama akun harus diisi'],
        maxlength: [225, 'panjang nama akun harus antara 9 - 225 karakter'],
        minlength: [3, 'panjang nama akun harus antara 9 - 225 karakter']
    },
    tax: {
        type: Number,
        default: 0,
    },
    value: {
        type: Number,
        default: 0,
    },
    status: {
        type: String,
        enum: ['pending', 'success', 'failed'],
        default: 'pending'
    },
    player: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player',
    },
    historyUser: {
        name: {
            type: String,
            required: [true, 'Nama player harus diisi']
        },
        phoneNumber: {
            type: String,
            required: [true, 'nomor telepon harus diisi'],
            maxlength: [13, 'panjang nama akun harus antara 9 - 13 karakter'],
            minlength: [9, 'panjang nama akun harus antara 9 - 13 karakter']
        },
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, { timestamps: true });

module.exports = mongoose.model('Transaction', transactionScheme);
