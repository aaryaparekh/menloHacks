//Configuration for moongoose
const mongoose = require('mongoose');

//Tell mongoose to use promises
mongoose.Promise = global.Promise;

//connect
//This part checks if mongodb should use the HEROKU mongodb extension if available, if not just use the local one
//Essentially if uploaded to heoku, use the heokou mongodb
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/RecommendMe', (err, db)=>{
  if(err){
    return console.log("Unable to connect to database server.");
  }
  console.log('Connected to mongodb server');

  //deleteMany
  db.collection('Users').deleteMany({completed: false}).then((result)=>{
    console.log(result);
  });

//deleteOne
// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
//   console.log(result);
// });

//findOneAndDelete
//db.collection('Users').findOneAndDelete({completed:false}).then((result)=>{
//  console.log(result);
//});


  //db.close();
}););

//Export
module.exports = {
  mongoose: mongoose
};
