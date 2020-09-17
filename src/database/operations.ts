import gql from "graphql-tag";

export const CAMPAIGN_LIST = gql`
  query CampaignList {
    campaign {
      id
      title
      description
      created_at
      campaign_contributors_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;

export const COMPOSER_LIST = gql`
  query ComposerList {
    composer(order_by: [{ surname: asc, name: asc }]) {
      id
      name
      surname
      roled_composers {
        work_roled_composers_aggregate {
          aggregate {
            count
          }
        }
      }
    }
  }
`;
