require('dotenv').config()
const express = require ('express')
const massive = require ('massive')
const controller = require('./controller')

const app = express()

const{SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl:{rejectUnauthorized:false}
}).then(db=>{
    app.set('db',db);
})
.catch(err=>console.log(err))

app.get('/api/inventory', controller.getInventory)
app.post('/api/inventory', controller.addInventory)




app.listen(SERVER_PORT, ()=> {console.log(`listening on port ${SERVER_PORT}`)})