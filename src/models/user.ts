import * as bcrypt from "bcrypt";
import { Schema, model, Model, Document } from "mongoose";

export interface IUserDocument extends Document {
  email: string;
  password: string;
  jwt: string;
  comparePassword: (candidatePassword: string) => Promise<boolean>;
}

interface IUserModel extends Model<IUserDocument> {
  findByToken(): void;
}

const UserSchema: Schema = new Schema({
  email: { type: String },
  password: { type: String },
});

UserSchema.pre("save", async function save(next) {
  const user = this as IUserDocument;
  if (!user.isModified("password")) {
    return next();
  }
  const hash = await bcrypt.hash(user.password, 10);
  user.password = hash;
  next();
});

UserSchema.methods.comparePassword = function comparePassword(
  candidatePassword: string
) {
  return bcrypt.compare(candidatePassword, this.password);
};

UserSchema.statics.findByToken = () => {
  console.log("hello world");
};

const User: IUserModel = model<IUserDocument, IUserModel>("User", UserSchema);

export default User;
