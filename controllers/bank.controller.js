const { request, response } = require("express");
const Bank = require("../database/models/Bank");
const { sendError, sendSuccess } = require("../helpers/response");

const addBank = async (req = request, res = response) => {
  const { nit } = req.body;
  try {
    let bank = await Bank.findOne({ nit });
    if (bank) {
      return res.status(400).json(sendError("El banco ya existe"));
    }
    bank = new Bank(req.body);
    await bank.save();
    return res.status(200).json({
      ...sendSuccess("Banco guardado"),
      bank,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json(sendError());
  }
};

const listBanks = async (req = request, res = response) => {
  try {
    const banks = await Bank.find();
    return res.status(200).json({
      ...sendSuccess("Bancos listados"),
      banks,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json(sendError());
  }
};

module.exports = {
  addBank,
  listBanks,
};
