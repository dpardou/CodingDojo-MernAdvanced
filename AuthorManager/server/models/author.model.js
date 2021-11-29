const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "El campo Nombre es requerido"],
        minlength: [3, "El nombre ingresado debe contener más de 3 caracteres"] 
    },
    text: { 
        type: String,
        required: [true, "El campo Texto es requerido"],
        minlength: [3, "El texto ingresado debe contener más de 3 caracteres"] 
    }
}, { timestamps: true });

module.exports.Author = mongoose.model('Author', authorSchema);
