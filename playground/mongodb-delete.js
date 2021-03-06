// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var odj = new ObjectID();
console.log(odj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log("Unable to connect to mongodb server");
    }
    console.log("Connected to mongodb server");

    // deleteMany
    /**
    db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
       console.log(result);
    });
     **/

    // deleteOne
    /*
    db.collection('Todos').deleteOne({text: 'Eat dinner'}).then( (result) => {
       console.log(result);
    });
    */

    // findOneAndDelete
    /*
    db.collection('Todos').findOneAndDelete({completed: false}).then( (result) => {
       console.log(result);
    });
    */

    // Remove all documents with the name Clive
    /***
    db.collection('Users').deleteMany({name:'Clive'}).then( (result) => {
        console.log(result)
    });
     ******/

    // Remove a document by ID
    db.collection('Users').findOneAndDelete({_id: new ObjectID("59a2897668a349453a35420e")}).then( (result) => {
        console.log(result);
    });

    // db.close();
});
