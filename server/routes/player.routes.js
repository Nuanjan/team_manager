const PlayerController = require("../controllers/player.controller");
module.exports = function (app) {
  app.get("/players/list", PlayerController.index);
  app.post("/players/addplayer", PlayerController.createPlayer);
  app.delete("/players/:id", PlayerController.deletePlayer);
};
