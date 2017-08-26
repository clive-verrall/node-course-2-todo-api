// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var odj = new ObjectID();
console.log(odj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log("Unable to connect to mongodb server");
    }
    console.log("Connected to mongodb server");
/****
   db.collection('Todos').find({
       _id: new ObjectID("59a010c3cd95ba19c48b2ed0")
   }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
   }, (err) => {
       console.log('Unable to fetch todos',err);
   });
********/

/*****
    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos',err);
    });
*********/

    db.collection('Users').find({age: 27}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Unable to fetch users", err);
    });

    // db.close();
});
