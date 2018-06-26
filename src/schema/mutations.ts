import { GraphQLObjectType, GraphQLString } from "graphql";

import UserType from "./types/userType";
import User from "../models/user";

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        signUp: {
            type: UserType,
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString },
            },
            resolve(parentValue, { email, password }, request) {
                return new User({ email, password }).save();
            },
        },
    },
});

export default mutation;
