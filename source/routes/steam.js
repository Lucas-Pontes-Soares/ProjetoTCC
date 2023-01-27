const express = require('express')
const app = express()
const router = express.Router();

const getOwnedGames = require('../controllers/steam/getOwnedGames');
  
router.get('/steam/findGetOwnedGames', function (req, res) {
  res.send('Rota Steam!');

  const printGetOwnedGames = async () => {
    const dados = await getOwnedGames("76561198373878594");
    console.log(dados.response.games);
  };

  printGetOwnedGames();
  
});

module.exports = router;