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

app.get('/', function (req, res) {
  res.send('Hello!');
  res.setHeader('Access-Control-Allow-Origin', `${process.env.URLFrontend}`);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); 
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
  res.setHeader('Access-Control-Allow-Credentials', true); 
});

app.use(cors({origin: `${process.env.URLFrontend}`}));

app.use(express.json())
app.use(bodyParser.json());
app.use(steamRouter)
app.use(xboxRouter)
app.use(playstationRouter)
app.use(userRouter)
app.use(PlayerRequestRouter)
  
app.listen(port, () => {
  console.log(`App node rodando em: http://localhost:${port}`)
  connect()
})