import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  split,
} from "@apollo/client/core";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import fetch from "cross-fetch";
import ws from "ws";

export const HASURA_GRAPHQL_ENGINE_HOSTNAME = "premium-turtle-50.hasura.app";

const scheme = (proto: string) =>
  process.env.BACKEND_SSL ? `${proto}s` : proto;

const wsurl = `${scheme("ws")}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1/graphql`;
const httpurl = `${scheme(
  "http"
)}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1/graphql`;

const wsLink = new WebSocketLink({
  uri: wsurl,
  options: {
    reconnect: true,
  },
  webSocketImpl: ws,
});

const httpLink = new HttpLink({
  uri: httpurl,
  credentials: "include",
  fetch,
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const createApolloClient = () =>
  new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });

const client = createApolloClient();

export default client;
