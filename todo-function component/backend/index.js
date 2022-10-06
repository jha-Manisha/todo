
const express = require('express')
const app = express();


const port = 5000;
  cors = require("cors");
  app.use(cors());
  app.listen(port, () => console.log("Backend server live on " + port));
 
  
const dbConnect = require('./mConnect');

app.use(express.json());

app.get('/get-tasks', async(req, res) => {
let data = await dbConnect();
data = await data.find().toArray();
console.log(data)
  res.send(data)
})



app.post('/add-task',async(req, res) => {
  let data = await dbConnect();
  let result = await data.insertOne(req.body);
  console.log(result);
   res.send(result)
  }
)



app.put('/edit-task',async(req, res) => {
  let data = await dbConnect();
  let result = await data.updateOne(req.body);
  console.log(result);
    res.send(result)
  }
)


app.delete('/delete-task',async(req, res) => {
  let data = await dbConnect();
  let result = await data.deleteOne({"task": `${req.body.task}`});
  console.log(result);
    res.send(result)
  }
)


//app.listen(5000);


/*
const Axios = require("axios");
const PORT = 5000;
*/




