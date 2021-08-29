import "./App.css";
import { CurriculoService } from "./services/CurriculoService";
import { CepService } from "./services/CepService";
import React from "react";
import InputMask from "react-input-mask"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uf: "",
      cidade: "",
      bairro: "",
      logradouro: "",
      possuiVeiculo: false
    }

    this.buscarCep = this.buscarCep.bind(this);
    this.handleChange =  this.handleChange.bind(this);
    this.handleboolean = this.handleboolean.bind(this);
  }

  Enviar = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    const obj = Object.fromEntries(data);
    console.log(obj)
    CurriculoService.apiPost(obj).then(result =>
      console.log(result).catch(error => alert(error)));
  };

  async buscarCep() {
    const cep =
        document.querySelector(".cep").value.replace(/[^0-9]/g, '');
    if (cep.lenght < 8) {
      return;
    }
    await CepService.ConsultaCep(cep).then((result) => {
      if (result.data.hasOwnProperty("erro")) {
        alert("CEP não existente");
      } else {
        this.state.uf = result.data.uf;
        this.state.cidade = result.data.localidade;
        this.state.bairro = result.data.bairro;
        this.state.logradouro = result.data.logradouro;
      }
    });
  }

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  };
  
  handleboolean = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      
      <div>
        <h1>Cadastro de Curriculos - JobsNet</h1>
        <form onSubmit={this.Enviar}>
          <div>
            <label>Nome: </label>
            <br></br>
            <input
              className="longtext"
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
            ></input>
            <br></br>
            <div>
              <label>Cargo Pretendido: </label>
              <br></br>
              <input
                type="text"
                id="profissao"
                name="profissao"
                placeholder="Cargo Pretendido"
              ></input>
            </div>
            <div>
              <label>Estado Civil: </label>
              <br></br>
              <select name="estadoCivil" id="estadoCivil">
                <option value="Solteiro">Solteiro(a)</option>
                <option value="Casado">Casado(a)</option>
                <option value="Divorciado">Divorciado(a)</option>
                <option value="Viúvo">Viúvo(a)</option>
                <option value="Separado">Separado(a)</option>
              </select>
              <br></br>
            </div>
            <label>Sexo: </label>
            <br></br>
            <select name="sexo" id="sexo">
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </select>
            <br></br>
            <label>Data de Nascimento: </label>
            <br></br>
            <input
              type="date"
              name="dataNascimento"
              id="dataNascimento"
              placeholder="Data de Nascimento"
            ></input>
            <br></br>
            <div>
              <label>CEP: </label>
              <br></br>
              <InputMask
                name="cep"
                className="cep"
                id="cep"
                mask="99999-999"
              />
              <button type="button" onClick={this.buscarCep}>
                Buscar Cep
              </button>
              <br></br>
              <label>Logradouro: </label>
              <br></br>
              <input
                className="logradouro"
                type="text"
                id="logradouro"
                name="logradouro"
                placeholder="Logradouro"
                value={this.state.logradouro}
                onChange={this.handleChange}
              ></input>
              <br></br>
              <label>Número: </label>
              <br></br>
              <input type="text" name="numero" placeholder="Número" id="numero"></input>
              <br></br>
              <label>Bairro: </label>
              <br></br>
              <input
                type="text"
                className="bairro"
                name="bairro"
                id="bairro"
                placeholder="Bairro"
                value={this.state.bairro}
                onChange={this.handleChange}
              ></input>
              <br></br>
              <label>Cidade: </label>
              <br></br>
              <input
                type="text"
                className="bairro"
                name="cidade"
                id="cidade"
                placeholder="Cidade"
                value={this.state.cidade}
                onChange={this.handleChange}
              ></input>
              <br></br>
              <label>Estado: </label>
              <br></br>
              <input
                type="text"
                className="estado"
                name="estado"
                id="estado"
                placeholder="Estado"
                value={this.state.uf}
                onChange={this.handleChange}
              ></input>
              <br></br>
            </div>
            <label>Telefone Fixo 1: </label>
            <br></br>
            <input
              type="text"
              id="telefone1"
              name="telefone1"
              placeholder="Telefone"
            ></input>
            <br></br>
            <label>Telefone Fixo 2: </label>
            <br></br>
            <input
              type="text"
              id="telefone2"
              name="telefone2"
              placeholder="Telefone"
            ></input>
            <br></br>
            <label>Celular: </label>
            <br></br>
            <input type="text" name="celular" placeholder="Celular" id="celular"></input>
            <br></br>
            <label>Contato: </label>
            <br></br>
            <input type="text" name="contato" placeholder="Contato" id="contato"></input>
            <br></br>
            <label>E-Mail: </label>
            <br></br>
            <input
              className="longtext"
              type="text"
              name="email"
              id="email"
              placeholder="E-mail"
            ></input>
            <br></br>
          </div>
          <div>
            <label>Identidade: </label>
            <br></br>
            <input
              type="text"
              name="identidade"
              id="identidade"
              placeholder="Identidade"
            ></input>
            <br></br>
            <label>CPF: </label>
            <br></br>
            <input type="text" name="cpf" placeholder="CPF" id="cpf"></input>
            <br></br>
            <label>Possui Veículo: </label>
            <br></br>
            <select name="possuiVeiculo" id="possuiVeiculo" onChange={this.handleboolean} value={this.state.possuiVeiculo}>
              <option value={true}>Sim</option>
              <option value={false}>Não</option>
            </select>
            <br></br>
            <label>Habilitação: </label>
            <br></br>
            <select name="habilitacao" id="habilitacao">
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="AB">AB</option>
            </select>
            <br></br>
          </div>
          <button>Enviar</button>
        </form>
      </div>
    );
  }
}

export default App;
