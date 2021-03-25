const express = require("express");
const app = express();

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

app.get('/:name', (req, res) => {
  let nombre = req.params.name;
  res.send(`<h1>Hola ${nombre.capitalize()}!</h1>`);
});

app.listen(3000, () => console.log('Listening on port 3000!'));