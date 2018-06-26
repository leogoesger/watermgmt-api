import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    email: { type: String },
    password: { type: String },
});

const User = model("User", UserSchema);

export default User;
