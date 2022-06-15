const express = require('express');
const bodyParser = require('body-parser'); 
const MongoClient = require('mongodb').MongoClient
const app = express();
const PORT = 3000

app.use(bodyParser.urlencoded ({ extended: true }))

app.listen(PORT, function(){
    console.log(`listening on ${PORT}`) 
})

//BASIC FORMULA
//app.get('endpoint', () => {
    //actions
//}

//this means when there is a get request of root, send the file index.html from the current directory
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

//using body-parser, this 
app.post('/quotes', (req, res) => {
    console.log(req.body)
})