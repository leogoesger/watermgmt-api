import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLID,
    GraphQLNonNull,
} from "graphql";

import LyricType from "./types/lyric_type";
import SongType from "./types/song_type";

import { Lyric } from "../models/lyric";
import { Song } from "../models/song";
import userQueries from "./user/userQueries";

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: () => ({
        songs: {
            type: new GraphQLList(SongType),
            resolve() {
                return Song.find({});
            },
        },
        lyric: {
            type: LyricType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve(_parnetValue, { id }) {
                return Lyric.findById(id);
            },
        },
        ...userQueries,
    }),
});

export default RootQuery;
