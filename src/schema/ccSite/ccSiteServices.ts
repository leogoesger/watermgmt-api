import { CCSite } from "../../models";

export const getSites = () => {
    return CCSite.find({});
};
