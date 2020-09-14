import send from "@polka/send-type";
import * as sapper from "@sapper/server";
import { json } from "body-parser";
import compression from "compression";
import { buildSchema, graphql } from "graphql";
import polka from "polka";
import sirv from "sirv";
import db from "./database/data.json";
import { i18nMiddleware } from "./services/i18n";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

const schema = buildSchema(`
  scalar Date

  enum ComposerRole {
    COMPOSER
    ARRANGER
    LYRICIST
  }

  interface Person {
    name: String!
    surname: String
    email: String!
    birthdate: Date
  }

  type Composer implements Person {
    id: ID!
    name: String!
    surname: String
    email: String!
    birthdate: Date
    works: [Work!]!
  }

  type RoledComposer {
    id: ID!
    role: ComposerRole!
    composer: Composer!
  }

  type User implements Person {
    id: ID!
    name: String!
    surname: String
    email: String!
    birthdate: Date
    username: String!
    hash: String!
  }

  type Campaign {
    id: ID!
    work: Work
    collaborators: [User!]!
  }

  type Work {
    id: ID!
    title: String!
    roledComposers: [RoledComposer!]!
  }

  type Query {
    works: [Work]
    work(id: Int!): Work
  }
`);

const root = {
  works: () => db.works,
  work: (args) => db.works.find((o) => o.id === args.id),
};

polka()
  .use(json())
  .use(
    "newold-music", // base url for gh-pages
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    i18nMiddleware(),
    sapper.middleware()
  )
  .use("/graphql", async (req, res) => {
    const query = req.body?.query ?? "";
    const data = await graphql(schema, query, root);
    send(res, 200, data);
  })
  .listen(PORT, (err: Error) => {
    if (err) console.log("error", err);
  });
