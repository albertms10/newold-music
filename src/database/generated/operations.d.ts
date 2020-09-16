export type ComposerListQueryVariables = Exact<{ [key: string]: never; }>;


export type ComposerListQuery = (
  { __typename?: 'query_root' }
  & { composer: Array<(
    { __typename?: 'composer' }
    & Pick<Composer, 'id' | 'name' | 'surname'>
    & { roled_composers: Array<(
      { __typename?: 'roled_composer' }
      & { work_roled_composers_aggregate: (
        { __typename?: 'work_roled_composer_aggregate' }
        & { aggregate?: Maybe<(
          { __typename?: 'work_roled_composer_aggregate_fields' }
          & Pick<Work_Roled_Composer_Aggregate_Fields, 'count'>
        )> }
      ) }
    )> }
  )> }
);
