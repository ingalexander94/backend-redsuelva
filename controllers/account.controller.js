const { request, response } = require("express");
const Account = require("../database/models/Account");
const Person = require("../database/models/Person");
const { sendError, sendSuccess } = require("../helpers/response");

const createAccount = async (req = request, res = response) => {
  const { person, bank } = req.body;
  try {
    let account = await Account.findOne({ person, bank });
    if (account) {
      return res
        .status(400)
        .json(sendError("Ya tiene una cuenta con este banco"));
    }
    const now = new Date();
    account = new Account({
      ...req.body,
      bonding: now,
      code: now.getTime(),
    });
    await account.save();
    account = await Account.findById(account._id)
      .populate("person", "identification")
      .populate("bank", "nit");
    return res.status(200).json({
      ...sendSuccess("Cuenta creada"),
      account,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json(sendError());
  }
};

const listAccounts = async (req = request, res = response) => {
  try {
    const accounts = await Account.find()
      .populate("person", "identification")
      .populate("bank", "nit");
    return res.status(200).json({
      ...sendSuccess("Cuentas Listadas"),
      accounts,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json(sendError());
  }
};

const getAccountByPerson = async (req = request, res = response) => {
  const { person } = req.params;
  try {
    let personValid = await Person.findById(person);
    if (!personValid) {
      return res.status(400).json(sendError("La persona no existe"));
    }
    let accounts = await Account.find({ person })
      .populate("person", "identification")
      .populate("bank", "nit");
    return res.status(200).json({
      ...sendSuccess("Cuentas listadas para la persona"),
      accounts,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json(sendError("", person));
  }
};

const deleteAccount = async (req = request, res = response) => {
  const { account } = req.params;
  try {
    let accountValid = await Account.findById(account);
    if (!accountValid) {
      return res.status(400).json(sendError("Cuenta no existe"));
    }
    await Account.findByIdAndDelete(account);
    return res.status(200).json(sendSuccess("Cuenta Eliminada"));
  } catch (error) {
    console.error(error);
    return res.status(500).json(sendError("", account));
  }
};

module.exports = {
  createAccount,
  listAccounts,
  getAccountByPerson,
  deleteAccount,
};
