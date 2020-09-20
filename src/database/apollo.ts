import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import fetch from "cross-fetch";

const cache = new InMemoryCache();

const createApolloClient = () =>
  new ApolloClient({
    uri: "https://premium-turtle-50.hasura.app/v1/graphql",
    cache,
    fetch,
  });

const client = createApolloClient();

export default client;
