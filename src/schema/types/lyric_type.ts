import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
} from "graphql";

const LyricType = new GraphQLObjectType({
    name: "LyricType",
    fields: () => ({
        id: { type: GraphQLID },
        likes: { type: GraphQLInt },
        content: { type: GraphQLString },
    }),
});

export default LyricType;
