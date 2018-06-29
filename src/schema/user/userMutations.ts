import { GraphQLString } from "graphql";

import UserType from "./userType";
import authenticate, { signUp } from "./userServices";

interface IArguments {
    email: string;
    password: string;
}
const userMutations = {
    signUp: {
        type: UserType,
        args: {
            email: { type: GraphQLString },
            password: { type: GraphQLString },
        },
        resolve(_parentValue: any, { email, password }: IArguments) {
            return signUp(email, password);
        },
    },
    login: {
        type: UserType,
        args: {
            email: { type: GraphQLString },
            password: { type: GraphQLString },
        },
        resolve(_parentValue: any, { email, password }: IArguments) {
            return authenticate(email, password);
        },
    },
};

export default userMutations;
