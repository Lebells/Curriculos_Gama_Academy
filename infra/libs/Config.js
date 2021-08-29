var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cadastro_curriculo');
mongoose.Promise = global.Promise;

module.exports = mongoose;
