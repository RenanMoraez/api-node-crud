//conf inicial
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

//forma de ler JSON/middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json());

/**
 *  mongodb+srv://renanmoraez:Slsulp203dl@apicluster.p1ayf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
 * 
 */


//rotas da api
const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);





// rota inicial / endpoint
app.get('/', (req, res) => {
    
    // mostrar req

    res.json({message: 'Oi express'});
})



// entregar uma porta
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.p1ayf.mongodb.net/bancodaapi?retryWrites=true&w=majority`)
.then(() =>{
    console.log("Conectamos ao mongoDB")
    app.listen(3000);
})
.catch((err) => console.log(err))
