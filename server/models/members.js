const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;
// 使用 new Schema() 宣告資料
const memberSchema = new Schema({
  telephone_no: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "U",
  },
  password: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    default: null,
  },
  created_program_id: {
    type: Array,
    default: [],
  },
  modifiedAt: {
    type: Date,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now, // get the timestamp
  },
});

userSchema.pre("save", async function (next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const hashedPassword = await bcrypt.hash(this.password, 10); // salt rounds of 10
    console.log("The hashedPassword is :", hashedPassword);
    this.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});

module.exports = mongoose.model("Members", memberSchema);
