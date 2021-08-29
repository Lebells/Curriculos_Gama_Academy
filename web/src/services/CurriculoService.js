import axios from 'axios';

export class CurriculoService {

static apiPost (data){
    return axios.post('http://localhost:21262/', data);
}

static apiGet(){
    return axios.get('http://localhost:21262/listar');
}

}
export default CurriculoService;
