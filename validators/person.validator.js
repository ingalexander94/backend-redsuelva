const { check } = require("express-validator");
const finishValidate = require("../middlewares/finishValidate");

const validatePerson = () => [
  check("names", "Los nombres son obligatorios").not().isEmpty(),
  check("surnames", "Los apellidos son obligatorios").not().isEmpty(),
  check("birthday", "La fecha no es correcta").isDate(),
  check("age", "La edad no es correcta").isFloat({
    min: 0,
    max: 150,
  }),
  check("identification", "Debe tener máximo 10 digitos").isLength({
    min: 8,
    max: 10,
  }),
  check("email", "El correo es obligatorio").isEmail(),
  finishValidate,
];

module.exports = validatePerson;
