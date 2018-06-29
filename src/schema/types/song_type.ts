import { GraphQLObjectType, GraphQLID, GraphQLInt } from "graphql";

const SongType = new GraphQLObjectType({
    name: "SongType",
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLInt },
    }),
});

export default SongType;
