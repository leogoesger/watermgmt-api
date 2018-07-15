import { GraphQLObjectType, GraphQLList, GraphQLString } from "graphql";

const ImageType = new GraphQLObjectType({
    name: "ImageType",
    fields: {
        name: { type: GraphQLString },
        url: { type: GraphQLString },
    },
});

const CCSiteType = new GraphQLObjectType({
    name: "CCSiteType",
    fields: {
        location: { type: GraphQLString },
        lng: { type: GraphQLString },
        lat: { type: GraphQLString },
        images: { type: new GraphQLList(ImageType) },
    },
});

export default CCSiteType;
