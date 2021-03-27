const { Schema, model } = require("mongoose");

const AccountSchema = new Schema({
  person: {
    type: Schema.Types.ObjectId,
    ref: "Person",
    required: true,
  },
  bank: {
    type: Schema.Types.ObjectId,
    ref: "Bank",
    required: true,
  },
  bonding: {
    type: Date,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
});

module.exports = model("Account", AccountSchema);
