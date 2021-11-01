const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserInfo = require("./models/userInfo");
const app = express();

const addInfo = require("./routes/addInfo.js");

app.use(express.static('images'))

const dbURI =
  "mongodb+srv://N4scento:AAmy2QBTulNPGci8@portfolioreactnode.utodh.mongodb.net/node-portfolio?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) =>
    app.listen(8888, () => {
      console.log("This is our running server");  
    })
  )
  .catch((err) => console.log(err)); 
app.use(express.json()); 

app.use(
  cors({
    origin: "http://localhost:8888", 
    
    credentials: true, 
  })
); 


app.use(addInfo); 

 