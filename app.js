var Db = require('./dboperations');
var Carro = require('./carro');
const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app  = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request,response,next)=>{
    console.log('middleware');
    next();
})

router.route('/carros').get((request,response)=>{
    dboperations.getCarros().then(result =>{
        response.json(result[0]);
    })
})

router.route('/carros').patch((request,response)=>{
    let carro = {...request.body}

    dboperations.updtCarro(carro).then(result =>{
        response.status(200).json(result);
    })
})

router.route('/carros/:id').get((request,response)=>{
    dboperations.getCarro(request.params.id).then(result =>{
        response.json(result[0]);
    })
})

router.route('/carros/:id').delete((request,response) =>{
    dboperations.delCarro(request.params.id).then(result =>{
        response.json(result[0]);
    })
})

router.route('/carros').post((request,response)=>{
    let carro = {...request.body}


    dboperations.addCarro(carro).then(result =>{
        response.status(201).json(result);
    })
})

//

var port = process.env.PORT || 8090;
app.listen(port);
console.log('API de Carros esta rodando na ' + port);