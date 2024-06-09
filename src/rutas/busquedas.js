const express = require('express');
const router = express.Router();
const busquedaModel = require('../modelos/Busqueda')

router.post("/", async (req, res) => {
  const {city, country, temp_c} = req.body;
  const nuevaBusqueda = new busquedaModel({
    city: city,
    country: country,
    temp_c: temp_c
  })
  await nuevaBusqueda.save();
})

module.exports = router;