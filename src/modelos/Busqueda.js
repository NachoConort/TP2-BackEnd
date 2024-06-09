const mongoose = require("mongoose");

const busquedaSchema = new mongoose.Schema({
  city: String,
  country: String,
  temp_c: String
});

module.exports = mongoose.model("Busqueda", busquedaSchema);