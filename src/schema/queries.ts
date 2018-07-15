import { GraphQLObjectType } from "graphql";

import userQueries from "./user/userQueries";
import ccSiteQueries from "./ccSite/ccSiteQueries";

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: () => ({
        ...userQueries,
        ...ccSiteQueries,
    }),
});

export default RootQuery;
