const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

const EnqueteSchema = new mongoose.Schema({
    titulo:{
        type: String,
        require: true
    },
    descricao:{
        type: String,
        require: true
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
});

const Enquete = mongoose.model('Enquete', EnqueteSchema);

module.exports = Enquete;