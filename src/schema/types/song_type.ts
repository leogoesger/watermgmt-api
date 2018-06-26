import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
} from "graphql";

const SongType = new GraphQLObjectType({
    name: "SongType",
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLInt },
    }),
});

export default SongType;
