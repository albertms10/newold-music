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
          sum {
            quantity
          }
        }
      }
      campaign_progress_stops {
        stop
      }
    }
  }
`;

export const CAMPAIGN_INFO = gql`
  query CampaignInfo($id: Int!) {
    campaigns_by_pk(id: $id) {
      id
      title
      description
      created_at
      campaign_progress_stops {
        stop
      }
      campaign_contributors_aggregate {
        aggregate {
          count
          sum {
            quantity
          }
        }
      }
      work {
        id
        duration
        title
        work_roled_composers {
          roled_composer {
            composer {
              name
              surname
              id
            }
            composer_role {
              role
            }
          }
        }
      }
    }
  }
`;

export const CAMPAIGN_CONTRIBUTORS_LIST = gql`
  query CampaignContributorsList($id: Int!) {
    campaigns_contributors(where: { campaign_id: { _eq: $id } }) {
      id
      quantity
      created_at
      updated_at
      user {
        id
        name
        surname
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

export const WORKS_LIST = gql`
  query WorksList {
    works {
      id
      title
      duration
      work_roled_composers {
        roled_composer {
          composer {
            id
            name
            surname
          }
          composer_role {
            role
          }
        }
      }
      work_movements_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;

export const WORK_INFO = gql`
  query WorkInfo($id: Int!) {
    works_by_pk(id: $id) {
      id
      title
      duration
      work_movements {
        order
        title
        duration
      }
      work_roled_composers {
        roled_composer {
          composer {
            id
            name
            surname
          }
          composer_role {
            role
          }
        }
      }
      campaign {
        id
        title
        description
      }
    }
  }
`;
