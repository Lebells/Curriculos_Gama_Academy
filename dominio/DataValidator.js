const Yup = require('yup');

class DataValidator {
    static async Validate(data){
        let schema = Yup.object().shape({
            nome: Yup.string().required(),
            dataNascimento: Yup.date().required(),
            cep: Yup.string().max(9).required(),
            logradouro: Yup.string().required(),
            numero: Yup.number().positive().required(),
            bairro: Yup.string().required(),
            cidade: Yup.string().required(),
            email: Yup.string().email().required(),
            profissao: Yup.string().required(),
            sexo: Yup.string(),
            telefone1: Yup.string(),
            telefone2: Yup.string(),
            celular: Yup.string().required(),
            contato: Yup.string(),
            identidade: Yup.string(),
            possuiVeiculo: Yup.boolean(),
            habilitacao: Yup.string(),
            cpf: Yup.string().matches(new RegExp('([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})')).required(),
        })
        if(!await schema.isValid(data)){
            return {Valid: false, Message: 'Falha na validação do cadastro! Verifique os campos.'};
        }
        return {Valid: true, Message: ''};
    }
}

module.exports = DataValidator;