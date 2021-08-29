
    var mongoose = require('./libs/Config');

    var task =  new mongoose.Schema({
        id: mongoose.Schema.Types.ObjectId,
        nome: String,
        dataNascimento: Date,
        cep: String,
        logradouro: String,
        numero: Number,
        bairro: String,
        cidade: String,
        estado: String,
        email: String,
        profissao: String,
        estadoCivil: String,
        sexo: String,
        telefone1: String,
        telefone2: String,
        celular: String,
        contato: String,
        identidade: String,
        cpf: String,
        possuiVeiculo: Boolean,
        habilitacao: String
    }, {
        timestamps: true
    });
    const Curriculo =  mongoose.model('Curriculo', task);

    module.exports = Curriculo;
