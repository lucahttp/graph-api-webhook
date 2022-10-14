const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
    var reposable = "Hello There!"
  res.send(reposable);
});

app.listen(9000, () => console.log('server started'));

const app2 = express();

app2.use(bodyParser.json());
app2.use(bodyParser.urlencoded({ extended: true }));

app2.post('/', (req, res) => {
  //console.log(req);




  //var reposable = { extended: true }//{message:"Hello There!"}
  var reposable = "Hello There!"
  
  try {
    //console.log("validationToken1: " + req)
    console.log("validationToken2: " + req.query.validationToken)
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    console.log("IP: " + ip)
    if (req.query.validationToken) {
      reposable = req.query.validationToken
    }
  }
  catch (err) {
    console.log("err: " + err.message);
  }




  //res.send('Hello Express app!')
  /*
  res.json({
    status: 200,
    headers: {},
    body: reposable,
  })
  */
  //res.json(reposable);
  res.send(reposable);
  
});

app2.listen(4444, () => console.log('server started'));
