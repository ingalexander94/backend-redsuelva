const express = require("express");
const { resolve } = require("path");
const cors = require("cors");
const dbConnection = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    dbConnection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.static(resolve(__dirname, "../public")));
    this.app.use(express.json());
    this.app.use("/api/person", require("../routes/person.router"));
    this.app.use("/api/bank", require("../routes/bank.router"));
    this.app.use("/api/account", require("../routes/account.router"));
  }

  execute() {
    this.middlewares();
    this.app.listen(this.port, () =>
      console.log(`Servidor corriendo en el puerto ${this.port}`)
    );
  }
}

module.exports = Server;
