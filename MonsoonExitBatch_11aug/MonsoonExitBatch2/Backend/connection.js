const mongoose = require("mongoose");
//Write missing code 
mongoose
  .connect("mongodb+srv://Amilit:amilitroy@cluster0.nxibxzh.mongodb.net/EMp?retryWrites=true&w=majority&appName=Cluster0")
  
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
