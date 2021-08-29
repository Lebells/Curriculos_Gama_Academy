const curriculoRepository = require('../infra/CurriculoRepository')

class CpfValidator {
    static async ValidadorCpf(req){
        let query = await curriculoRepository.find({cpf: req.body.cpf}).exec()
        if( query.length != 0){
            return { Valid: false, Message: 'Usuário já cadastrado!'};
        }
        return { Valid: true, Message: ''};
        
        }
}

module.exports = CpfValidator;