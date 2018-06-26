import { Schema, model } from "mongoose";

const LyricSchema = new Schema({
    song: {
        type: Schema.Types.ObjectId,
        ref: "song",
    },
    likes: { type: Number, default: 0 },
    content: { type: String },
});

export const Lyric = model("Lyric", LyricSchema);
