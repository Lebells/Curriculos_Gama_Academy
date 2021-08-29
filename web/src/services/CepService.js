import axios from 'axios';

export class CepService {
    static ConsultaCep(cep){
        return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    }
}

export default CepService;