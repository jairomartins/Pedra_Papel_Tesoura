const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.set('views', __dirname + '/src/views')

app.set('view engine' , 'html')

app.engine('html', require('hbs').__express);

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/ia', (req, res)=>{
    res.render('ia')
})

app.post('/random', (req, res) =>{

    const escolhaIA = ['Pedra', 'Papel', 'Tesoura']

    const  min = Math.ceil(0)
    const max = Math.floor(2)
    const numero = Math.floor(Math.random() * (max - min + 1)) + min;

    res.json({
        id:numero,
        opt:escolhaIA[numero]
    })
})

app.listen( port,()=>{
    console.log(`Online em http://localhost:${port}`)
})