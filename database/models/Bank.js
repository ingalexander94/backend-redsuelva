const { Schema, model } = require("mongoose");

const BankSchema = new Schema(
  {
    nit: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    motto: {
      type: String,
      required: true,
    },
    register: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Bank", BankSchema);
