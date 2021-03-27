const { request, response } = require("express");
const Person = require("../database/models/Person");
const { sendError, sendSuccess } = require("../helpers/response");

const addPerson = async (req = request, res = response) => {
  const { identification, email } = req.body;
  try {
    let person = await Person.findOne({ identification, email });
    if (person) {
      return res.status(400).json(sendError("La persona ya existe"));
    }
    person = new Person(req.body);
    await person.save();
    return res.status(200).json({
      ...sendSuccess("Persona guardada"),
      person,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json(sendError());
  }
};

const listPersons = async (req = request, res = response) => {
  try {
    const persons = await Person.find();
    return res.status(200).json({
      ...sendSuccess("Personas listadas"),
      persons,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json(sendError());
  }
};

module.exports = {
  addPerson,
  listPersons,
};
