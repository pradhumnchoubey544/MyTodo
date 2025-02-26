import { stat } from "fs";
import { Schema, model, models } from "mongoose";

const itemSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
      type: String,
      enum: ["pending", "inProgress", "done"], 
      default: "pending",
      required: false,
    },
  
});

const Item = models.Item || model("Item", itemSchema);
export default Item;
