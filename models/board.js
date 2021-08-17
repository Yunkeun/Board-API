var mongoose = require("mongoose");

var { Schema } = mongoose;
var {
  Types: { ObjectId }
} = Schema;
var boardSchema = new Schema({
  writer: {
    type: ObjectId,
    required: true,
    // ref: "User"
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  /*
  imgPath: {
    type: String
  },*/
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
  }
});

module.exports = mongoose.model("Board", boardSchema);
