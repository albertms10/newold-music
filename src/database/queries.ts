import gql from "graphql-tag";

export const COMPOSER_LIST = gql`
  {
    composer(order_by: [{ surname: asc, name: asc }]) {
      id
      name
      surname
    }
  }
`;
