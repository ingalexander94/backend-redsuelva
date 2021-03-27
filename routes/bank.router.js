/*
    Rutas: Banco
    host/api/bank
*/

const { Router } = require("express");
const { listBanks, addBank } = require("../controllers/bank.controller");
const validateBank = require("../validators/bank.validator");

const router = Router();

router.get("/", listBanks);
router.post("/", validateBank(), addBank);

module.exports = router;
