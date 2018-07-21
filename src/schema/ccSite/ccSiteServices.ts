import { CCSite } from "../../models";
import { ICCSiteDocument } from "../../models/ccSite";

interface ICCSiteNew extends ICCSiteDocument {
    mapInfo: {
        type: string;
        geometry: {
            type: string;
            coordinates: number[];
        };
    };
}
export const getSites = () => {
    return CCSite.find({});
};
