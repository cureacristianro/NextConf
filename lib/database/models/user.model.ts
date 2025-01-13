import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  _id: { type: String, required: true, unique: true },
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  photo: { type: String, required: true },
});

const User = models.User || model("User", UserSchema);

export default User;
