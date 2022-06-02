const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

const VotoSchema = new mongoose.Schema({
    voto:{
        type: String,
        require: true,
    },
    opcaoId:{
        type: mongoose.Schema.Types.ObjectId
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    enquete:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Enquete',
        require: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
});

const Voto = mongoose.model('Voto', VotoSchema);

module.exports = Voto;