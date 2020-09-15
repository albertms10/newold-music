import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import fetch from "cross-fetch";

const cache = new InMemoryCache();

export const client = new ApolloClient({
  uri: "https://premium-turtle-50.hasura.app/v1/graphql",
  cache,
  fetch,
});
