const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
var curriculoRepository = require('./infra/CurriculoRepository');
const cpfValidator = require('./dominio/CpfValidator');
const dataValidator = require('./dominio/DataValidator');

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(cors())



app.get('/listar', async (req, res) => {

    return res.json(db)
})

app.post('/', async (req, res)=>{
    try{
        let validadorCpf = await cpfValidator.ValidadorCpf(req); 
        if(!validadorCpf.Valid){
            return res.status(400).send({
                error: validadorCpf.Message
            })
        }
        let validadorDados = await dataValidator.Validate(req.body)
        if(!validadorDados.Valid){
            return res.status(400).send({
                error: validadorDados.Message
            })
        }
        var curriculo = await curriculoRepository.create(req.body);
        curriculo.save();
        return res.status(200).send(curriculo);
    } catch (err) {
        return res.status(400).send({
            error: err
        })
    }

})

app.listen(21262, () => {
    console.log('Express started at http://localhost:21262')
})
