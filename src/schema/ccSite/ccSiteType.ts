import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLFloat,
} from "graphql";

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
        lng: { type: GraphQLFloat },
        lat: { type: GraphQLFloat },
        images: { type: new GraphQLList(ImageType) },
    },
});

export default CCSiteType;
