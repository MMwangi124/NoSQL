//Connection (CRUD format)

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = "mongodb://127.0.0.1:27017"
const databasename = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client)=>{

  if (error){
    return console.log('Sorry not able to connect to database')
  }
    //console.log('Connected Successfully')
    const db = client.db(databasename)

/*
    db.collection('users').insertMany(
      {
      name: "Ray Rice",
      age: 27
    }, (error, result)=> {
      if (error) {
        return console.log('Unable to add user')
      }
        console.log(result.ops)
    })

})
*/
db.collection('users').insertMany([
  {
    name: 'Ray Rice',
    age: 32
  },
  {
    name: 'TO',
    age: 43
  }
],(error, result) => {
   if(error) {
     return console.log('Unable to insert doc')
   }

   console.log(result.ops)
 })
})
