import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import schema from "./schema";

var app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    // rootValue: root,
    graphiql: true,
    customFormatErrorFn: (e) => console.log(e),
  })
);
app.listen(4000);
