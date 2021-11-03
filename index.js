const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.set('views', __dirname + '/src/views')

app.set('view engine' , 'html')

app.engine('html', require('hbs').__express);

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// app.use(cors())

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/ia', (req, res)=>{
    res.render('ia')
})

app.post('/random', (req, res) =>{

    const escolhaJogador = req.body.a;
    const opcoes = ['Pedra', 'Papel', 'Tesoura']

    const min = Math.ceil(0)
    const max = Math.floor(2)
    const escolhaIA = Math.floor(Math.random() * (max - min + 1)) + min;

    var data = {}

    data['opt'] = opcoes[escolhaIA]

    if(escolhaIA == escolhaJogador){
        data['resultado']= 'empate' 
    }else
    if((escolhaJogador - escolhaIA == -2)|| (escolhaJogador - escolhaIA == 1)){
        data['resultado']= 'vitoria'  
    }else{
        data['resultado']= 'derrota'  
    }

    res.json(data)
})

app.listen( port,()=>{
    console.log(`Online em http://localhost:${port}`)
})