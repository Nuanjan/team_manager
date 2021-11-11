const Player = require("../models/player.model");

module.exports.index = (req, res) => {
  Player.find()
    .then((allPlayers) => res.json({ players: allPlayers }))
    .catch((err) => res.json({ message: "Something went wrong", err: err }));
};
// module.exports.getOneProduct = (req, res) => {
//   Product.findOne({ _id: req.params.id })
//     .then((oneProduct) => res.json({ product: oneProduct }))
//     .catch((err) => res.json({ message: "Something went wrong", error: err }));
// };
module.exports.createPlayer = (req, res) => {
  Player.exists({ name: req.body.name }, (err, result) => {
    if (result) {
      console.log(result, " this is result")
      res.json({ message: "name already exist!" });
    } else {
      Player.create(req.body)
        .then((player) => res.json({ player }))
        .catch((err) => {
          return res.json({err});
        });
    }
  });
};

// module.exports.updateProduct = (req, res) => {
//   console.log(req.params.id, " this is id");
//   console.log(req.body, " this is edit body request");
//   Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
//     .then((updatedProduct) => res.json(updatedProduct))
//     .catch((err) => res.json({ message: "Something went wrong", error: err }));
// };
module.exports.deletePlayer = (req, res) => {
  Player.deleteOne({ _id: req.params.id })
    .then((result) => res.json(result))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
