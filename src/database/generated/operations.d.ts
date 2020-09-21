export type CampaignContributorsListQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type CampaignContributorsListQuery = (
  { __typename?: 'query_root' }
  & { campaigns_contributors: Array<(
    { __typename?: 'campaigns_contributors' }
    & Pick<Campaigns_Contributors, 'id' | 'quantity' | 'created_at' | 'updated_at'>
    & { user: (
      { __typename?: 'users' }
      & Pick<Users, 'id' | 'name' | 'surname'>
    ) }
  )> }
);

export type CampaignInfoQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type CampaignInfoQuery = (
  { __typename?: 'query_root' }
  & { campaigns_by_pk?: Maybe<(
    { __typename?: 'campaigns' }
    & Pick<Campaigns, 'id' | 'title' | 'description' | 'created_at'>
    & { campaign_progress_stops: Array<(
      { __typename?: 'campaign_progress_stops' }
      & Pick<Campaign_Progress_Stops, 'stop'>
    )>, campaign_contributors_aggregate: (
      { __typename?: 'campaigns_contributors_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'campaigns_contributors_aggregate_fields' }
        & Pick<Campaigns_Contributors_Aggregate_Fields, 'count'>
        & { sum?: Maybe<(
          { __typename?: 'campaigns_contributors_sum_fields' }
          & Pick<Campaigns_Contributors_Sum_Fields, 'quantity'>
        )> }
      )> }
    ), work?: Maybe<(
      { __typename?: 'works' }
      & Pick<Works, 'id' | 'duration' | 'title'>
      & { work_roled_composers: Array<(
        { __typename?: 'works_roled_composers' }
        & { roled_composer: (
          { __typename?: 'roled_composers' }
          & { composer: (
            { __typename?: 'composers' }
            & Pick<Composers, 'name' | 'surname' | 'id'>
          ), composer_role: (
            { __typename?: 'composers_roles' }
            & Pick<Composers_Roles, 'role'>
          ) }
        ) }
      )> }
    )> }
  )> }
);

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
        & { sum?: Maybe<(
          { __typename?: 'campaigns_contributors_sum_fields' }
          & Pick<Campaigns_Contributors_Sum_Fields, 'quantity'>
        )> }
      )> }
    ), campaign_progress_stops: Array<(
      { __typename?: 'campaign_progress_stops' }
      & Pick<Campaign_Progress_Stops, 'stop'>
    )> }
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

export type WorkInfoQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type WorkInfoQuery = (
  { __typename?: 'query_root' }
  & { works_by_pk?: Maybe<(
    { __typename?: 'works' }
    & Pick<Works, 'id' | 'title' | 'duration'>
    & { work_roled_composers: Array<(
      { __typename?: 'works_roled_composers' }
      & { roled_composer: (
        { __typename?: 'roled_composers' }
        & { composer: (
          { __typename?: 'composers' }
          & Pick<Composers, 'id' | 'name' | 'surname'>
        ), composer_role: (
          { __typename?: 'composers_roles' }
          & Pick<Composers_Roles, 'role'>
        ) }
      ) }
    )>, campaign?: Maybe<(
      { __typename?: 'campaigns' }
      & Pick<Campaigns, 'id' | 'title' | 'description'>
    )> }
  )> }
);

export type WorksListQueryVariables = Exact<{ [key: string]: never; }>;


export type WorksListQuery = (
  { __typename?: 'query_root' }
  & { works: Array<(
    { __typename?: 'works' }
    & Pick<Works, 'id' | 'title' | 'duration'>
    & { work_roled_composers: Array<(
      { __typename?: 'works_roled_composers' }
      & { roled_composer: (
        { __typename?: 'roled_composers' }
        & { composer: (
          { __typename?: 'composers' }
          & Pick<Composers, 'id' | 'name' | 'surname'>
        ), composer_role: (
          { __typename?: 'composers_roles' }
          & Pick<Composers_Roles, 'role'>
        ) }
      ) }
    )> }
  )> }
);
