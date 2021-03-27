const { Schema, model } = require("mongoose");

const PersonSchema = new Schema(
  {
    names: {
      type: String,
      required: true,
    },
    surnames: {
      type: String,
      required: true,
    },
    identification: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Person", PersonSchema);
