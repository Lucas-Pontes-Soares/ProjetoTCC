const express = require('express')
const app = express()
const port = 3000
const steamRouter = require("./routes/steam")

app.get('/', function (req, res) {
  res.send('Hello!');
});

app.use(steamRouter)
  
app.listen(port, () => {
  console.log(`App node rodando em: http://localhost:${port}`)
});