import { GraphQLList } from "graphql";

import { getSites } from "./ccSiteServices";
import CCSiteType from "./ccSiteType";

const ccSiteQueries = {
    getSites: {
        type: new GraphQLList(CCSiteType),
        resolve() {
            return getSites();
        },
    },
};

export default ccSiteQueries;
