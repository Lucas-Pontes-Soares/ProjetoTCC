const express = require('express')
const app = express()
const port = 3000
const steamRouter = require("./routes/steamRouter")
const xboxRouter = require("./routes/xboxRouter")
const playstationRouter = require("./routes/playstationRouter")

app.get('/', function (req, res) {
  res.send('Hello!');
});

app.use(steamRouter)
app.use(xboxRouter)
app.use(playstationRouter)
  
app.listen(port, () => {
  console.log(`App node rodando em: http://localhost:${port}`)
});