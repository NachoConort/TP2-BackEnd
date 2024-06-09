const mongoose = require("mongoose");
const dbconnect = () => {
  mongoose.set("strictQuery", true);
  mongoose.connect("mongodb://127.0.0.1:27017/ApiClima", {}) 
  .then(() => {
    console.log("Conexion correcta");
  })
  .catch((err) => {
    console.log(err)
  })

}

module.exports = dbconnect;