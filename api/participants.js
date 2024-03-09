const { participants } = require("./data");

module.exports = (req, res) => {
  res.status(200).json(participants);
};
