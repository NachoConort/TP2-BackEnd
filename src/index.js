const express = require('express');
const dbconnect = require('./config');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors())
app.use("/busquedas", require("./rutas/busquedas"));

app.listen(3000, () => {
  console.log("El servidor esta en el puerto 3000");
});

dbconnect();
