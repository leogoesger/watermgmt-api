import { Schema, model, Model, Document } from "mongoose";

export interface ICCSiteDocument extends Document {
    location: string;
    lng: number;
    lat: number;
    images: string[];
}

interface ICCSiteModal extends Model<ICCSiteDocument> {}

const CCSiteSchema: Schema = new Schema({
    location: { type: String, required: true },
    lng: { type: Number, required: true },
    lat: { type: Number, required: true },
    images: [
        {
            url: String,
            name: String,
        },
    ],
});

const CCSite: ICCSiteModal = model<ICCSiteDocument, ICCSiteModal>(
    "CCSite",
    CCSiteSchema
);

export default CCSite;
