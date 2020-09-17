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

export const COMPOSER_INFO = gql`
  query ComposerInfo($id: Int!) {
    composers_by_pk(id: $id) {
      id
      name
      surname
      roled_composers {
        composer_role {
          id
          role
        }
        work_roled_composers {
          work {
            id
            duration
            title
          }
        }
      }
    }
  }
`;
