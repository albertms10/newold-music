export type CampaignsListQueryVariables = Exact<{ [key: string]: never; }>;


export type CampaignsListQuery = (
  { __typename?: 'query_root' }
  & { campaigns: Array<(
    { __typename?: 'campaigns' }
    & Pick<Campaigns, 'id' | 'title' | 'description' | 'created_at'>
    & { campaign_contributors_aggregate: (
      { __typename?: 'campaigns_contributors_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'campaigns_contributors_aggregate_fields' }
        & Pick<Campaigns_Contributors_Aggregate_Fields, 'count'>
      )> }
    ) }
  )> }
);

export type ComposerInfoQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ComposerInfoQuery = (
  { __typename?: 'query_root' }
  & { composers_by_pk?: Maybe<(
    { __typename?: 'composers' }
    & Pick<Composers, 'id' | 'name' | 'surname'>
    & { roled_composers: Array<(
      { __typename?: 'roled_composers' }
      & { composer_role: (
        { __typename?: 'composers_roles' }
        & Pick<Composers_Roles, 'id' | 'role'>
      ), work_roled_composers: Array<(
        { __typename?: 'works_roled_composers' }
        & { work: (
          { __typename?: 'works' }
          & Pick<Works, 'id' | 'duration' | 'title'>
        ) }
      )> }
    )> }
  )> }
);

export type ComposersListQueryVariables = Exact<{ [key: string]: never; }>;


export type ComposersListQuery = (
  { __typename?: 'query_root' }
  & { composers: Array<(
    { __typename?: 'composers' }
    & Pick<Composers, 'id' | 'name' | 'surname'>
    & { roled_composers: Array<(
      { __typename?: 'roled_composers' }
      & { work_roled_composers_aggregate: (
        { __typename?: 'works_roled_composers_aggregate' }
        & { aggregate?: Maybe<(
          { __typename?: 'works_roled_composers_aggregate_fields' }
          & Pick<Works_Roled_Composers_Aggregate_Fields, 'count'>
        )> }
      ) }
    )> }
  )> }
);
