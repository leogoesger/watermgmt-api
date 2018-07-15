import { GraphQLObjectType, GraphQLString } from "graphql";

const UserType = new GraphQLObjectType({
    name: "UserType",
    fields: {
        email: { type: GraphQLString },
        name: { type: GraphQLString },
        jwt: { type: GraphQLString },
    },
});

export default UserType;
