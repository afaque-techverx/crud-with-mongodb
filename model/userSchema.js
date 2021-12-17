import mongoose from "mongoose";
const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
});
const userSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
  },
  email: {
    type: String,
    minlength:10,
    required: true,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  bestFriend: mongoose.SchemaTypes.ObjectId,
  hobbies: [String],
  address: addressSchema,
});
export default mongoose.model("User", userSchema);
