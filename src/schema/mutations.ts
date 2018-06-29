import { GraphQLObjectType } from "graphql";

import userMutations from "./user/userMutations";

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        ...userMutations,
    },
});

export default mutation;
