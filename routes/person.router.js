/*
    Rutas: Persona
    host/api/person
*/

const { Router } = require("express");
const { listPersons, addPerson } = require("../controllers/person.controller");
const validatePerson = require("../validators/person.validator");

const router = Router();

router.get("/", listPersons);
router.post("/", validatePerson(), addPerson);

module.exports = router;
