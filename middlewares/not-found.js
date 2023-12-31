const notFound = (req, res) => {
  return res.status(404).send("Rout does not exist");
};

module.exports = notFound;
