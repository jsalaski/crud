const express = require('express');
const { send } = require('express/lib/response');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const app = express();
const PORT = 3000
const MongoConnect = require('mongodb').MongoClient

//Body-parser, the urlencoded method tells body-parser to extract data from the form element and add them to the body in the request object
app.use(bodyParser.urlencoded({ extended: true})) 


//Express handlers

//Express is listening on PORT
app.listen(PORT, function(){
    console.log(`listening on ${PORT}`) 
})

//When a request is made to the root directory of __dirname, serve the file index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

//This is a create request
app.post('/quotes', (req, res) => {
    console.log(req.body)
})

MongoClient.connect('mongo-db-connection-string', (err, client => {
    //.. do something here 
}