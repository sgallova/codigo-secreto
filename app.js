const express = require('express');
const app = express();


app.get('/', (req, res) => {
  
  var name=req.query.nombre || 'Desconocido';
 
  var nombre='<h1>Hola '+name+'!</h1>';
  res.send(nombre);
  
});

app.listen(3000, () => console.log('Listening on port 3000!'));
