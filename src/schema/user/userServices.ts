import { verify, sign } from "jsonwebtoken";
import User from "../../models/user";
import { Request } from "express";

export const signUp = (email: string, password: string) => {
    const newUser = new User({ email, password });
    const jwt = sign({ email }, process.env.JWT_SECRET);

    return newUser.save().then(user => {
        user.jwt = jwt;
        return user;
    });
};

const authenticate = (email: string, password: string) => {
    return User.findOne({ email }).then(async user => {
        if (!user) {
            throw new Error("Invalid Creditial!");
        }
        const res = await user.comparePassword(password);

        if (res) {
            return user;
        } else {
            throw new Error("Invalid!");
        }
    });
};

export const getMe = (request: Request) => {
    const token = request.header("jwt");
    const decoded: any = verify(token, process.env.JWT_SECRET);
    return User.findOne({ email: decoded.email });
};

export default authenticate;
