//Configuration for moongoose
const mongoose = require('mongoose');
const {MongoClient, ObjectID} = require('mongodb');
//Tell mongoose to use promises
mongoose.Promise = global.Promise;

//connect
//This part checks if mongodb should use the HEROKU mongodb extension if available, if not just use the local one
//Essentially if uploaded to heoku, use the heokou mongodb
MongoClient.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/RecommendMe', (err, db)=>{
  if(err){
    return console.log("Unable to connect to database server.");
  }
  console.log('Connected to mongodb server');

  setTimeout(function() {
    db.collection('users').deleteMany({username: "aarya"}).then((result)=>{
      console.log(result);
    });
  }, 1500);

  //deleteMany


  //db.close();
});

//Export
module.exports = {
  mongoose: mongoose
};
