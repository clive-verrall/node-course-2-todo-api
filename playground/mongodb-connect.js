// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var odj = new ObjectID();
console.log(odj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log("Unable to connect to mongodb server");
    }
    console.log("Connected to mongodb server");

    var user = {name: 'Clive', age: 47};
    var {name} = user;
    console.log(name);

    /*****
    db.collection('Todos').insertOne({
        text: "Something to do",
        completed: false
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert todo',err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
     *************/

    /******
    db.collection('Users').insertOne({
        name: "Clive",
        age: 47,
        location: 'Thailand'
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert user',err);
        }
        console.log(result.ops[0]._id.getTimestamp());
    });
     ************/


    db.close();
});
