import * as mongoose from "mongoose";
import * as express from "express";
import * as expressGraphQL from "express-graphql";
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import schema from "./schema/schema";
import * as cors from "cors";

const allowed_header = ["http://localhost:4000", "http://localhost:3000"];

const app = express();

(mongoose as any).Promise = global.Promise;
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

app.use(logger("tiny"));
app.use(bodyParser.json());

app.use(
    "/api/graphql",
    cors(),
    expressGraphQL({
        schema,
        graphiql: true,
    })
);

app.listen(5000, () => console.log("Listening at 5000"));
