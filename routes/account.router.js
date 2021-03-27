/*
    Rutas: Cuentas
    host/api/account
*/

const { Router } = require("express");
const {
  createAccount,
  listAccounts,
  getAccountByPerson,
  deleteAccount,
} = require("../controllers/account.controller");

const router = Router();

router.get("/", listAccounts);
router.post("/", createAccount);
router.get("/:person", getAccountByPerson);
router.delete("/:account", deleteAccount);

module.exports = router;
