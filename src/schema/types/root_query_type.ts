import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLID,
    GraphQLNonNull,
} from "graphql";

import LyricType from "./lyric_type";
import SongType from "./song_type";
import Usertype from "./userType";

import { Lyric } from "../../models/lyric";
import { Song } from "../../models/song";

import { getMe } from "../../services/authentication";

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
        getMe: {
            type: Usertype,
            resolve(_parnetValue, _args, request) {
                return getMe(request);
            },
        },
    }),
});

export default RootQuery;
