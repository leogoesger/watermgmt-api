import { Schema, model } from "mongoose";

const SongSchema = new Schema({
    title: { type: String },
    lyrics: [
        {
            type: Schema.Types.ObjectId,
            ref: "lyric",
        },
    ],
});

export const Song = model("Song", SongSchema);
