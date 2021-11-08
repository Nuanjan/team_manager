const Player = require("../models/player.model");

module.exports.index = (req, res) => {
  Player.find()
    .then((allPlayers) => res.json({ players: allPlayers }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
// module.exports.getOneProduct = (req, res) => {
//   Product.findOne({ _id: req.params.id })
//     .then((oneProduct) => res.json({ product: oneProduct }))
//     .catch((err) => res.json({ message: "Something went wrong", error: err }));
// };
module.exports.createPlayer = (req, res) => {
  Player.exists({ name: req.body.name }, (err, result) => {
    if (result) {
      return res.status(400).json({ message: "name already exist!" });
    } else {
      let errText = [];
      Player.create(req.body)
        .then((player) => res.json({ player }))
        .catch((err) => {
          if (err.name === "ValidationError") {
            let errText = [];
            errText = [...Object.values(err.errors).map((val) => val.message)];
            console.log(err, " err happened");
            return res.status(400).json({ message: errText[0] });
          }
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
