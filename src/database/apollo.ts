import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "cross-fetch";

const createApolloClient = () =>
  new ApolloClient({
    link: new HttpLink({
      uri: "https://premium-turtle-50.hasura.app/v1/graphql",
      fetch,
    }),
    cache: new InMemoryCache(),
  });

const client = createApolloClient();

export default client;
