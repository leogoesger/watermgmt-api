import { GraphQLSchema } from "graphql";

import RootQueryType from "./types/root_query_type";
import MutationType from "./mutations";

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: MutationType,
});

export default schema;
