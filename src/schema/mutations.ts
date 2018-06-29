import { GraphQLObjectType, GraphQLString } from "graphql";

import UserType from "./types/userType";
import authenticate, { getMe, signUp } from "../services/authentication";

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signUp: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(_parentValue, { email, password }) {
        return signUp(email, password);
      },
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(_parentValue, { email, password }) {
        return authenticate(email, password);
      },
    },
    getMe: {
      type: UserType,
      resolve(_parentValue, _, request) {
        return getMe(request);
      },
    },
  },
});

export default mutation;
