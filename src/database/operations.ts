import gql from "graphql-tag";

export const CAMPAIGNS_LIST = gql`
  query CampaignsList {
    campaigns {
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

export const COMPOSERS_LIST = gql`
  query ComposersList {
    composers(order_by: [{ surname: asc, name: asc }]) {
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
