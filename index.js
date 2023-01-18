const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

//dbinfo
//user = dbUser3
//pass = CN45a6rrWcU5o9S0



const uri = "mongodb+srv://dbUser3:CN45a6rrWcU5o9S0@cluster0.f8sl6.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run(){
    try{
        const userCollection = client.db('nodeMongoCrud').collection('users');
        const user ={
            name:'testing test',
            email: 'testing@gmail.com'
        }
        const result = await userCollection.insertOne(user);
        console.log(result)

    }
    finally{

    }
    
}
run().catch(err=> console.log(err))



app.get('/', (req, res)=>{
    res.send('Hello from node mongo crud')
})

app.listen(port, ()=>{
    console.log(port, `listening to port${port}`)
})