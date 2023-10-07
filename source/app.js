const express = require('express')
const app = express()
const port = 3000
const {connect, close} = require("./database/connection")
const steamRouter = require("./routes/steamRouter")
const xboxRouter = require("./routes/xboxRouter")
const playstationRouter = require("./routes/playstationRouter")
const userRouter = require("./routes/userRouter")
const PlayerRequestRouter = require("./routes/playerRequestRouter")
var bodyParser = require("body-parser")
var cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();

const corsOptions ={
   origin:'https://gplink-aj6y.onrender.com', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

console.log(corsOptions)
app.use(cors(corsOptions))


app.use(express.json());
app.use(bodyParser.json());
app.use(steamRouter);
app.use(xboxRouter);
app.use(playstationRouter);
app.use(userRouter);
app.use(PlayerRequestRouter);

app.get('/', function (req, res) {
  res.send('Hello!');
});

app.listen(port, () => {
  console.log(`App node rodando em: http://localhost:${port} teste`);
  connect();
});