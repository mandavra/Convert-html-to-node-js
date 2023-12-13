const http = require("http");
const express = require("express");

const app = express();

const bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {


  let Fristname = parseInt(req.body.First);
  let Lastname = parseInt(req.body.Last);
  let Age = parseInt(req.body.age)
  
  if (Age>=105 || Age<=0 ) {
    res.status(200).send({
      res : "not avilabel"
    });
  }
 else{
  if (Age>=18) {
    res.status(200).send({
      res : "you can vote"
    });
  }
 else{
  res.status(200).send({
    res : "you can not vote"
  });
 }
 }
});

http.createServer(app).listen(3000);