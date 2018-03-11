//Import Libraries
var express = require('express');
var bodyParser = require('body-parser');

//Import local stuff
//REquire the mongoose config file
var{mongoose}=require('./db/mongoose.js');
//Load in the models from mongoose
var {Todo} = require('./models/todo');
var {User}= require('./models/user');

var app = express();

//Middlewear
app.use(bodyParser.json());
//Middlewear to load static files for rendering such as home.html
app.use(express.static(__dirname+'/htmlFiles'));

const port = process.env.PORT || 3000;

//Render the home page
app.get('/', (req, res) => {
  res.sendFile(__dirname+'/htmlFiles/Register.html');
});

//Send the data to server (doesn't do anything with it yet)
app.post('/users', (req, res)=>{
  console.log('post is being called');
  var user = new User({
    username: req.body.username,    //Uses the req.body object, looks for a property called username, and passes it
    password: req.body.password
  });                               //Note: The actual req.body.text value is defined by something that is trying to post data to this server

  //save the data to mongodb by using the .save()
  user.save().then((doc)=>{
    res.send(doc);                  //If all goes well
  }, (e)=>{
    res.status(400).send(e +' , in other words: something wrong with the data you are sending.');        //If there was an error, also send back a status of 400.
  });
});

//Get request
app.get('/users', (req, res) => {
  User.find().then((users)=>{
    res.send({users});
  }, (e)=>{
    res.status(400).send(e);
  });
});

app.listen(port, ()=> {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
