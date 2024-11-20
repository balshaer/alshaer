const { Schema, default: mongoose, model } = require("mongoose");

const contentSchema = new Schema({
  title: {},
  subtitle: {},
  description: {},
});

const Content = mongoose.model("Content", contentSchema);

module.exports = {
  Content,
};
