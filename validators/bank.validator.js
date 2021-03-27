const { check } = require("express-validator");
const finishValidate = require("../middlewares/finishValidate");

const validateBank = () => [
  check("nit", "El NIT es obligatorio").not().isEmpty(),
  check("name", "El nombre es obligatorio").not().isEmpty(),
  check("motto", "El lema debe tener entre 5 y 100 caracteres").isLength({
    min: 5,
    max: 100,
  }),
  check("register", "La fecha de registro es obligatoria").isDate(),
  finishValidate,
];

module.exports = validateBank;
