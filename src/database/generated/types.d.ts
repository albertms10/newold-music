export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: any;
  timestamptz: any;
  timetz: any;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "campaign" */
export type Campaign = {
  __typename?: 'campaign';
  /** An array relationship */
  campaign_contributors: Array<Campaign_Contributor>;
  /** An aggregated array relationship */
  campaign_contributors_aggregate: Campaign_Contributor_Aggregate;
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  work?: Maybe<Work>;
  work_id?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "campaign" */
export type CampaignCampaign_ContributorsArgs = {
  distinct_on?: Maybe<Array<Campaign_Contributor_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Contributor_Order_By>>;
  where?: Maybe<Campaign_Contributor_Bool_Exp>;
};


/** columns and relationships of "campaign" */
export type CampaignCampaign_Contributors_AggregateArgs = {
  distinct_on?: Maybe<Array<Campaign_Contributor_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Contributor_Order_By>>;
  where?: Maybe<Campaign_Contributor_Bool_Exp>;
};

/** aggregated selection of "campaign" */
export type Campaign_Aggregate = {
  __typename?: 'campaign_aggregate';
  aggregate?: Maybe<Campaign_Aggregate_Fields>;
  nodes: Array<Campaign>;
};

/** aggregate fields of "campaign" */
export type Campaign_Aggregate_Fields = {
  __typename?: 'campaign_aggregate_fields';
  avg?: Maybe<Campaign_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Campaign_Max_Fields>;
  min?: Maybe<Campaign_Min_Fields>;
  stddev?: Maybe<Campaign_Stddev_Fields>;
  stddev_pop?: Maybe<Campaign_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Campaign_Stddev_Samp_Fields>;
  sum?: Maybe<Campaign_Sum_Fields>;
  var_pop?: Maybe<Campaign_Var_Pop_Fields>;
  var_samp?: Maybe<Campaign_Var_Samp_Fields>;
  variance?: Maybe<Campaign_Variance_Fields>;
};


/** aggregate fields of "campaign" */
export type Campaign_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Campaign_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "campaign" */
export type Campaign_Aggregate_Order_By = {
  avg?: Maybe<Campaign_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Campaign_Max_Order_By>;
  min?: Maybe<Campaign_Min_Order_By>;
  stddev?: Maybe<Campaign_Stddev_Order_By>;
  stddev_pop?: Maybe<Campaign_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Campaign_Stddev_Samp_Order_By>;
  sum?: Maybe<Campaign_Sum_Order_By>;
  var_pop?: Maybe<Campaign_Var_Pop_Order_By>;
  var_samp?: Maybe<Campaign_Var_Samp_Order_By>;
  variance?: Maybe<Campaign_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "campaign" */
export type Campaign_Arr_Rel_Insert_Input = {
  data: Array<Campaign_Insert_Input>;
  on_conflict?: Maybe<Campaign_On_Conflict>;
};

/** aggregate avg on columns */
export type Campaign_Avg_Fields = {
  __typename?: 'campaign_avg_fields';
  id?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "campaign" */
export type Campaign_Avg_Order_By = {
  id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "campaign". All fields are combined with a logical 'AND'. */
export type Campaign_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Campaign_Bool_Exp>>>;
  _not?: Maybe<Campaign_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Campaign_Bool_Exp>>>;
  campaign_contributors?: Maybe<Campaign_Contributor_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  work?: Maybe<Work_Bool_Exp>;
  work_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "campaign" */
export enum Campaign_Constraint {
  /** unique or primary key constraint */
  CampaignPkey = 'campaign_pkey'
}

/** columns and relationships of "campaign_contributor" */
export type Campaign_Contributor = {
  __typename?: 'campaign_contributor';
  /** An object relationship */
  campaign: Campaign;
  campaign_id: Scalars['Int'];
  id: Scalars['Int'];
  quantity: Scalars['numeric'];
  /** An object relationship */
  user: User;
  user_id: Scalars['Int'];
};

/** aggregated selection of "campaign_contributor" */
export type Campaign_Contributor_Aggregate = {
  __typename?: 'campaign_contributor_aggregate';
  aggregate?: Maybe<Campaign_Contributor_Aggregate_Fields>;
  nodes: Array<Campaign_Contributor>;
};

/** aggregate fields of "campaign_contributor" */
export type Campaign_Contributor_Aggregate_Fields = {
  __typename?: 'campaign_contributor_aggregate_fields';
  avg?: Maybe<Campaign_Contributor_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Campaign_Contributor_Max_Fields>;
  min?: Maybe<Campaign_Contributor_Min_Fields>;
  stddev?: Maybe<Campaign_Contributor_Stddev_Fields>;
  stddev_pop?: Maybe<Campaign_Contributor_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Campaign_Contributor_Stddev_Samp_Fields>;
  sum?: Maybe<Campaign_Contributor_Sum_Fields>;
  var_pop?: Maybe<Campaign_Contributor_Var_Pop_Fields>;
  var_samp?: Maybe<Campaign_Contributor_Var_Samp_Fields>;
  variance?: Maybe<Campaign_Contributor_Variance_Fields>;
};


/** aggregate fields of "campaign_contributor" */
export type Campaign_Contributor_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Campaign_Contributor_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "campaign_contributor" */
export type Campaign_Contributor_Aggregate_Order_By = {
  avg?: Maybe<Campaign_Contributor_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Campaign_Contributor_Max_Order_By>;
  min?: Maybe<Campaign_Contributor_Min_Order_By>;
  stddev?: Maybe<Campaign_Contributor_Stddev_Order_By>;
  stddev_pop?: Maybe<Campaign_Contributor_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Campaign_Contributor_Stddev_Samp_Order_By>;
  sum?: Maybe<Campaign_Contributor_Sum_Order_By>;
  var_pop?: Maybe<Campaign_Contributor_Var_Pop_Order_By>;
  var_samp?: Maybe<Campaign_Contributor_Var_Samp_Order_By>;
  variance?: Maybe<Campaign_Contributor_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "campaign_contributor" */
export type Campaign_Contributor_Arr_Rel_Insert_Input = {
  data: Array<Campaign_Contributor_Insert_Input>;
  on_conflict?: Maybe<Campaign_Contributor_On_Conflict>;
};

/** aggregate avg on columns */
export type Campaign_Contributor_Avg_Fields = {
  __typename?: 'campaign_contributor_avg_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Avg_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "campaign_contributor". All fields are combined with a logical 'AND'. */
export type Campaign_Contributor_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Campaign_Contributor_Bool_Exp>>>;
  _not?: Maybe<Campaign_Contributor_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Campaign_Contributor_Bool_Exp>>>;
  campaign?: Maybe<Campaign_Bool_Exp>;
  campaign_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  quantity?: Maybe<Numeric_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "campaign_contributor" */
export enum Campaign_Contributor_Constraint {
  /** unique or primary key constraint */
  CampaignContributorPkey = 'campaign_contributor_pkey',
  /** unique or primary key constraint */
  CampaignContributorUserIdCampaignIdKey = 'campaign_contributor_user_id_campaign_id_key'
}

/** input type for incrementing integer column in table "campaign_contributor" */
export type Campaign_Contributor_Inc_Input = {
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "campaign_contributor" */
export type Campaign_Contributor_Insert_Input = {
  campaign?: Maybe<Campaign_Obj_Rel_Insert_Input>;
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Campaign_Contributor_Max_Fields = {
  __typename?: 'campaign_contributor_max_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Max_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Campaign_Contributor_Min_Fields = {
  __typename?: 'campaign_contributor_min_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Min_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "campaign_contributor" */
export type Campaign_Contributor_Mutation_Response = {
  __typename?: 'campaign_contributor_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Campaign_Contributor>;
};

/** input type for inserting object relation for remote table "campaign_contributor" */
export type Campaign_Contributor_Obj_Rel_Insert_Input = {
  data: Campaign_Contributor_Insert_Input;
  on_conflict?: Maybe<Campaign_Contributor_On_Conflict>;
};

/** on conflict condition type for table "campaign_contributor" */
export type Campaign_Contributor_On_Conflict = {
  constraint: Campaign_Contributor_Constraint;
  update_columns: Array<Campaign_Contributor_Update_Column>;
  where?: Maybe<Campaign_Contributor_Bool_Exp>;
};

/** ordering options when selecting data from "campaign_contributor" */
export type Campaign_Contributor_Order_By = {
  campaign?: Maybe<Campaign_Order_By>;
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "campaign_contributor" */
export type Campaign_Contributor_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "campaign_contributor" */
export enum Campaign_Contributor_Select_Column {
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  Id = 'id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "campaign_contributor" */
export type Campaign_Contributor_Set_Input = {
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Campaign_Contributor_Stddev_Fields = {
  __typename?: 'campaign_contributor_stddev_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Stddev_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Campaign_Contributor_Stddev_Pop_Fields = {
  __typename?: 'campaign_contributor_stddev_pop_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Stddev_Pop_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Campaign_Contributor_Stddev_Samp_Fields = {
  __typename?: 'campaign_contributor_stddev_samp_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Stddev_Samp_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Campaign_Contributor_Sum_Fields = {
  __typename?: 'campaign_contributor_sum_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Sum_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "campaign_contributor" */
export enum Campaign_Contributor_Update_Column {
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  Id = 'id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Campaign_Contributor_Var_Pop_Fields = {
  __typename?: 'campaign_contributor_var_pop_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Var_Pop_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Campaign_Contributor_Var_Samp_Fields = {
  __typename?: 'campaign_contributor_var_samp_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Var_Samp_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Campaign_Contributor_Variance_Fields = {
  __typename?: 'campaign_contributor_variance_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "campaign_contributor" */
export type Campaign_Contributor_Variance_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** input type for incrementing integer column in table "campaign" */
export type Campaign_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  work_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "campaign" */
export type Campaign_Insert_Input = {
  campaign_contributors?: Maybe<Campaign_Contributor_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  work?: Maybe<Work_Obj_Rel_Insert_Input>;
  work_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Campaign_Max_Fields = {
  __typename?: 'campaign_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  work_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "campaign" */
export type Campaign_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Campaign_Min_Fields = {
  __typename?: 'campaign_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  work_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "campaign" */
export type Campaign_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "campaign" */
export type Campaign_Mutation_Response = {
  __typename?: 'campaign_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Campaign>;
};

/** input type for inserting object relation for remote table "campaign" */
export type Campaign_Obj_Rel_Insert_Input = {
  data: Campaign_Insert_Input;
  on_conflict?: Maybe<Campaign_On_Conflict>;
};

/** on conflict condition type for table "campaign" */
export type Campaign_On_Conflict = {
  constraint: Campaign_Constraint;
  update_columns: Array<Campaign_Update_Column>;
  where?: Maybe<Campaign_Bool_Exp>;
};

/** ordering options when selecting data from "campaign" */
export type Campaign_Order_By = {
  campaign_contributors_aggregate?: Maybe<Campaign_Contributor_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  work?: Maybe<Work_Order_By>;
  work_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "campaign" */
export type Campaign_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "campaign" */
export enum Campaign_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WorkId = 'work_id'
}

/** input type for updating data in table "campaign" */
export type Campaign_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  work_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Campaign_Stddev_Fields = {
  __typename?: 'campaign_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "campaign" */
export type Campaign_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Campaign_Stddev_Pop_Fields = {
  __typename?: 'campaign_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "campaign" */
export type Campaign_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Campaign_Stddev_Samp_Fields = {
  __typename?: 'campaign_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "campaign" */
export type Campaign_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Campaign_Sum_Fields = {
  __typename?: 'campaign_sum_fields';
  id?: Maybe<Scalars['Int']>;
  work_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "campaign" */
export type Campaign_Sum_Order_By = {
  id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** update columns of table "campaign" */
export enum Campaign_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WorkId = 'work_id'
}

/** aggregate var_pop on columns */
export type Campaign_Var_Pop_Fields = {
  __typename?: 'campaign_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "campaign" */
export type Campaign_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Campaign_Var_Samp_Fields = {
  __typename?: 'campaign_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "campaign" */
export type Campaign_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Campaign_Variance_Fields = {
  __typename?: 'campaign_variance_fields';
  id?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "campaign" */
export type Campaign_Variance_Order_By = {
  id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** columns and relationships of "composer" */
export type Composer = {
  __typename?: 'composer';
  birthyear?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  roled_composers: Array<Roled_Composer>;
  /** An aggregated array relationship */
  roled_composers_aggregate: Roled_Composer_Aggregate;
  surname: Scalars['String'];
};


/** columns and relationships of "composer" */
export type ComposerRoled_ComposersArgs = {
  distinct_on?: Maybe<Array<Roled_Composer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roled_Composer_Order_By>>;
  where?: Maybe<Roled_Composer_Bool_Exp>;
};


/** columns and relationships of "composer" */
export type ComposerRoled_Composers_AggregateArgs = {
  distinct_on?: Maybe<Array<Roled_Composer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roled_Composer_Order_By>>;
  where?: Maybe<Roled_Composer_Bool_Exp>;
};

/** aggregated selection of "composer" */
export type Composer_Aggregate = {
  __typename?: 'composer_aggregate';
  aggregate?: Maybe<Composer_Aggregate_Fields>;
  nodes: Array<Composer>;
};

/** aggregate fields of "composer" */
export type Composer_Aggregate_Fields = {
  __typename?: 'composer_aggregate_fields';
  avg?: Maybe<Composer_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Composer_Max_Fields>;
  min?: Maybe<Composer_Min_Fields>;
  stddev?: Maybe<Composer_Stddev_Fields>;
  stddev_pop?: Maybe<Composer_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Composer_Stddev_Samp_Fields>;
  sum?: Maybe<Composer_Sum_Fields>;
  var_pop?: Maybe<Composer_Var_Pop_Fields>;
  var_samp?: Maybe<Composer_Var_Samp_Fields>;
  variance?: Maybe<Composer_Variance_Fields>;
};


/** aggregate fields of "composer" */
export type Composer_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Composer_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "composer" */
export type Composer_Aggregate_Order_By = {
  avg?: Maybe<Composer_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Composer_Max_Order_By>;
  min?: Maybe<Composer_Min_Order_By>;
  stddev?: Maybe<Composer_Stddev_Order_By>;
  stddev_pop?: Maybe<Composer_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Composer_Stddev_Samp_Order_By>;
  sum?: Maybe<Composer_Sum_Order_By>;
  var_pop?: Maybe<Composer_Var_Pop_Order_By>;
  var_samp?: Maybe<Composer_Var_Samp_Order_By>;
  variance?: Maybe<Composer_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "composer" */
export type Composer_Arr_Rel_Insert_Input = {
  data: Array<Composer_Insert_Input>;
  on_conflict?: Maybe<Composer_On_Conflict>;
};

/** aggregate avg on columns */
export type Composer_Avg_Fields = {
  __typename?: 'composer_avg_fields';
  birthyear?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "composer" */
export type Composer_Avg_Order_By = {
  birthyear?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "composer". All fields are combined with a logical 'AND'. */
export type Composer_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Composer_Bool_Exp>>>;
  _not?: Maybe<Composer_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Composer_Bool_Exp>>>;
  birthyear?: Maybe<Int_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  roled_composers?: Maybe<Roled_Composer_Bool_Exp>;
  surname?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "composer" */
export enum Composer_Constraint {
  /** unique or primary key constraint */
  ComposerPkey = 'composer_pkey'
}

/** input type for incrementing integer column in table "composer" */
export type Composer_Inc_Input = {
  birthyear?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "composer" */
export type Composer_Insert_Input = {
  birthyear?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  roled_composers?: Maybe<Roled_Composer_Arr_Rel_Insert_Input>;
  surname?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Composer_Max_Fields = {
  __typename?: 'composer_max_fields';
  birthyear?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "composer" */
export type Composer_Max_Order_By = {
  birthyear?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  surname?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Composer_Min_Fields = {
  __typename?: 'composer_min_fields';
  birthyear?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "composer" */
export type Composer_Min_Order_By = {
  birthyear?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  surname?: Maybe<Order_By>;
};

/** response of any mutation on the table "composer" */
export type Composer_Mutation_Response = {
  __typename?: 'composer_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Composer>;
};

/** input type for inserting object relation for remote table "composer" */
export type Composer_Obj_Rel_Insert_Input = {
  data: Composer_Insert_Input;
  on_conflict?: Maybe<Composer_On_Conflict>;
};

/** on conflict condition type for table "composer" */
export type Composer_On_Conflict = {
  constraint: Composer_Constraint;
  update_columns: Array<Composer_Update_Column>;
  where?: Maybe<Composer_Bool_Exp>;
};

/** ordering options when selecting data from "composer" */
export type Composer_Order_By = {
  birthyear?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  roled_composers_aggregate?: Maybe<Roled_Composer_Aggregate_Order_By>;
  surname?: Maybe<Order_By>;
};

/** primary key columns input for table: "composer" */
export type Composer_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** columns and relationships of "composer_role" */
export type Composer_Role = {
  __typename?: 'composer_role';
  id: Scalars['Int'];
  role: Scalars['String'];
  /** An array relationship */
  roled_composers: Array<Roled_Composer>;
  /** An aggregated array relationship */
  roled_composers_aggregate: Roled_Composer_Aggregate;
};


/** columns and relationships of "composer_role" */
export type Composer_RoleRoled_ComposersArgs = {
  distinct_on?: Maybe<Array<Roled_Composer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roled_Composer_Order_By>>;
  where?: Maybe<Roled_Composer_Bool_Exp>;
};


/** columns and relationships of "composer_role" */
export type Composer_RoleRoled_Composers_AggregateArgs = {
  distinct_on?: Maybe<Array<Roled_Composer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roled_Composer_Order_By>>;
  where?: Maybe<Roled_Composer_Bool_Exp>;
};

/** aggregated selection of "composer_role" */
export type Composer_Role_Aggregate = {
  __typename?: 'composer_role_aggregate';
  aggregate?: Maybe<Composer_Role_Aggregate_Fields>;
  nodes: Array<Composer_Role>;
};

/** aggregate fields of "composer_role" */
export type Composer_Role_Aggregate_Fields = {
  __typename?: 'composer_role_aggregate_fields';
  avg?: Maybe<Composer_Role_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Composer_Role_Max_Fields>;
  min?: Maybe<Composer_Role_Min_Fields>;
  stddev?: Maybe<Composer_Role_Stddev_Fields>;
  stddev_pop?: Maybe<Composer_Role_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Composer_Role_Stddev_Samp_Fields>;
  sum?: Maybe<Composer_Role_Sum_Fields>;
  var_pop?: Maybe<Composer_Role_Var_Pop_Fields>;
  var_samp?: Maybe<Composer_Role_Var_Samp_Fields>;
  variance?: Maybe<Composer_Role_Variance_Fields>;
};


/** aggregate fields of "composer_role" */
export type Composer_Role_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Composer_Role_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "composer_role" */
export type Composer_Role_Aggregate_Order_By = {
  avg?: Maybe<Composer_Role_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Composer_Role_Max_Order_By>;
  min?: Maybe<Composer_Role_Min_Order_By>;
  stddev?: Maybe<Composer_Role_Stddev_Order_By>;
  stddev_pop?: Maybe<Composer_Role_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Composer_Role_Stddev_Samp_Order_By>;
  sum?: Maybe<Composer_Role_Sum_Order_By>;
  var_pop?: Maybe<Composer_Role_Var_Pop_Order_By>;
  var_samp?: Maybe<Composer_Role_Var_Samp_Order_By>;
  variance?: Maybe<Composer_Role_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "composer_role" */
export type Composer_Role_Arr_Rel_Insert_Input = {
  data: Array<Composer_Role_Insert_Input>;
  on_conflict?: Maybe<Composer_Role_On_Conflict>;
};

/** aggregate avg on columns */
export type Composer_Role_Avg_Fields = {
  __typename?: 'composer_role_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "composer_role" */
export type Composer_Role_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "composer_role". All fields are combined with a logical 'AND'. */
export type Composer_Role_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Composer_Role_Bool_Exp>>>;
  _not?: Maybe<Composer_Role_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Composer_Role_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  role?: Maybe<String_Comparison_Exp>;
  roled_composers?: Maybe<Roled_Composer_Bool_Exp>;
};

/** unique or primary key constraints on table "composer_role" */
export enum Composer_Role_Constraint {
  /** unique or primary key constraint */
  ComposerRolesPkey = 'composer_roles_pkey'
}

/** input type for incrementing integer column in table "composer_role" */
export type Composer_Role_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "composer_role" */
export type Composer_Role_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
  roled_composers?: Maybe<Roled_Composer_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Composer_Role_Max_Fields = {
  __typename?: 'composer_role_max_fields';
  id?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "composer_role" */
export type Composer_Role_Max_Order_By = {
  id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Composer_Role_Min_Fields = {
  __typename?: 'composer_role_min_fields';
  id?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "composer_role" */
export type Composer_Role_Min_Order_By = {
  id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
};

/** response of any mutation on the table "composer_role" */
export type Composer_Role_Mutation_Response = {
  __typename?: 'composer_role_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Composer_Role>;
};

/** input type for inserting object relation for remote table "composer_role" */
export type Composer_Role_Obj_Rel_Insert_Input = {
  data: Composer_Role_Insert_Input;
  on_conflict?: Maybe<Composer_Role_On_Conflict>;
};

/** on conflict condition type for table "composer_role" */
export type Composer_Role_On_Conflict = {
  constraint: Composer_Role_Constraint;
  update_columns: Array<Composer_Role_Update_Column>;
  where?: Maybe<Composer_Role_Bool_Exp>;
};

/** ordering options when selecting data from "composer_role" */
export type Composer_Role_Order_By = {
  id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  roled_composers_aggregate?: Maybe<Roled_Composer_Aggregate_Order_By>;
};

/** primary key columns input for table: "composer_role" */
export type Composer_Role_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "composer_role" */
export enum Composer_Role_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "composer_role" */
export type Composer_Role_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Composer_Role_Stddev_Fields = {
  __typename?: 'composer_role_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "composer_role" */
export type Composer_Role_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Composer_Role_Stddev_Pop_Fields = {
  __typename?: 'composer_role_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "composer_role" */
export type Composer_Role_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Composer_Role_Stddev_Samp_Fields = {
  __typename?: 'composer_role_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "composer_role" */
export type Composer_Role_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Composer_Role_Sum_Fields = {
  __typename?: 'composer_role_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "composer_role" */
export type Composer_Role_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "composer_role" */
export enum Composer_Role_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role'
}

/** aggregate var_pop on columns */
export type Composer_Role_Var_Pop_Fields = {
  __typename?: 'composer_role_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "composer_role" */
export type Composer_Role_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Composer_Role_Var_Samp_Fields = {
  __typename?: 'composer_role_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "composer_role" */
export type Composer_Role_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Composer_Role_Variance_Fields = {
  __typename?: 'composer_role_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "composer_role" */
export type Composer_Role_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** select columns of table "composer" */
export enum Composer_Select_Column {
  /** column name */
  Birthyear = 'birthyear',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Surname = 'surname'
}

/** input type for updating data in table "composer" */
export type Composer_Set_Input = {
  birthyear?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Composer_Stddev_Fields = {
  __typename?: 'composer_stddev_fields';
  birthyear?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "composer" */
export type Composer_Stddev_Order_By = {
  birthyear?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Composer_Stddev_Pop_Fields = {
  __typename?: 'composer_stddev_pop_fields';
  birthyear?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "composer" */
export type Composer_Stddev_Pop_Order_By = {
  birthyear?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Composer_Stddev_Samp_Fields = {
  __typename?: 'composer_stddev_samp_fields';
  birthyear?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "composer" */
export type Composer_Stddev_Samp_Order_By = {
  birthyear?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Composer_Sum_Fields = {
  __typename?: 'composer_sum_fields';
  birthyear?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "composer" */
export type Composer_Sum_Order_By = {
  birthyear?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "composer" */
export enum Composer_Update_Column {
  /** column name */
  Birthyear = 'birthyear',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Surname = 'surname'
}

/** aggregate var_pop on columns */
export type Composer_Var_Pop_Fields = {
  __typename?: 'composer_var_pop_fields';
  birthyear?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "composer" */
export type Composer_Var_Pop_Order_By = {
  birthyear?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Composer_Var_Samp_Fields = {
  __typename?: 'composer_var_samp_fields';
  birthyear?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "composer" */
export type Composer_Var_Samp_Order_By = {
  birthyear?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Composer_Variance_Fields = {
  __typename?: 'composer_variance_fields';
  birthyear?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "composer" */
export type Composer_Variance_Order_By = {
  birthyear?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** columns and relationships of "instrument" */
export type Instrument = {
  __typename?: 'instrument';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "instrument" */
export type Instrument_Aggregate = {
  __typename?: 'instrument_aggregate';
  aggregate?: Maybe<Instrument_Aggregate_Fields>;
  nodes: Array<Instrument>;
};

/** aggregate fields of "instrument" */
export type Instrument_Aggregate_Fields = {
  __typename?: 'instrument_aggregate_fields';
  avg?: Maybe<Instrument_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Instrument_Max_Fields>;
  min?: Maybe<Instrument_Min_Fields>;
  stddev?: Maybe<Instrument_Stddev_Fields>;
  stddev_pop?: Maybe<Instrument_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Instrument_Stddev_Samp_Fields>;
  sum?: Maybe<Instrument_Sum_Fields>;
  var_pop?: Maybe<Instrument_Var_Pop_Fields>;
  var_samp?: Maybe<Instrument_Var_Samp_Fields>;
  variance?: Maybe<Instrument_Variance_Fields>;
};


/** aggregate fields of "instrument" */
export type Instrument_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Instrument_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "instrument" */
export type Instrument_Aggregate_Order_By = {
  avg?: Maybe<Instrument_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Instrument_Max_Order_By>;
  min?: Maybe<Instrument_Min_Order_By>;
  stddev?: Maybe<Instrument_Stddev_Order_By>;
  stddev_pop?: Maybe<Instrument_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Instrument_Stddev_Samp_Order_By>;
  sum?: Maybe<Instrument_Sum_Order_By>;
  var_pop?: Maybe<Instrument_Var_Pop_Order_By>;
  var_samp?: Maybe<Instrument_Var_Samp_Order_By>;
  variance?: Maybe<Instrument_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "instrument" */
export type Instrument_Arr_Rel_Insert_Input = {
  data: Array<Instrument_Insert_Input>;
  on_conflict?: Maybe<Instrument_On_Conflict>;
};

/** aggregate avg on columns */
export type Instrument_Avg_Fields = {
  __typename?: 'instrument_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "instrument" */
export type Instrument_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "instrument". All fields are combined with a logical 'AND'. */
export type Instrument_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Instrument_Bool_Exp>>>;
  _not?: Maybe<Instrument_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Instrument_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "instrument" */
export enum Instrument_Constraint {
  /** unique or primary key constraint */
  InstrumentPkey = 'instrument_pkey'
}

/** input type for incrementing integer column in table "instrument" */
export type Instrument_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "instrument" */
export type Instrument_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Instrument_Max_Fields = {
  __typename?: 'instrument_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "instrument" */
export type Instrument_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Instrument_Min_Fields = {
  __typename?: 'instrument_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "instrument" */
export type Instrument_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "instrument" */
export type Instrument_Mutation_Response = {
  __typename?: 'instrument_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Instrument>;
};

/** input type for inserting object relation for remote table "instrument" */
export type Instrument_Obj_Rel_Insert_Input = {
  data: Instrument_Insert_Input;
  on_conflict?: Maybe<Instrument_On_Conflict>;
};

/** on conflict condition type for table "instrument" */
export type Instrument_On_Conflict = {
  constraint: Instrument_Constraint;
  update_columns: Array<Instrument_Update_Column>;
  where?: Maybe<Instrument_Bool_Exp>;
};

/** ordering options when selecting data from "instrument" */
export type Instrument_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "instrument" */
export type Instrument_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "instrument" */
export enum Instrument_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "instrument" */
export type Instrument_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Instrument_Stddev_Fields = {
  __typename?: 'instrument_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "instrument" */
export type Instrument_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Instrument_Stddev_Pop_Fields = {
  __typename?: 'instrument_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "instrument" */
export type Instrument_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Instrument_Stddev_Samp_Fields = {
  __typename?: 'instrument_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "instrument" */
export type Instrument_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Instrument_Sum_Fields = {
  __typename?: 'instrument_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "instrument" */
export type Instrument_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "instrument" */
export enum Instrument_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Instrument_Var_Pop_Fields = {
  __typename?: 'instrument_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "instrument" */
export type Instrument_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Instrument_Var_Samp_Fields = {
  __typename?: 'instrument_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "instrument" */
export type Instrument_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Instrument_Variance_Fields = {
  __typename?: 'instrument_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "instrument" */
export type Instrument_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "campaign" */
  delete_campaign?: Maybe<Campaign_Mutation_Response>;
  /** delete single row from the table: "campaign" */
  delete_campaign_by_pk?: Maybe<Campaign>;
  /** delete data from the table: "campaign_contributor" */
  delete_campaign_contributor?: Maybe<Campaign_Contributor_Mutation_Response>;
  /** delete single row from the table: "campaign_contributor" */
  delete_campaign_contributor_by_pk?: Maybe<Campaign_Contributor>;
  /** delete data from the table: "composer" */
  delete_composer?: Maybe<Composer_Mutation_Response>;
  /** delete single row from the table: "composer" */
  delete_composer_by_pk?: Maybe<Composer>;
  /** delete data from the table: "composer_role" */
  delete_composer_role?: Maybe<Composer_Role_Mutation_Response>;
  /** delete single row from the table: "composer_role" */
  delete_composer_role_by_pk?: Maybe<Composer_Role>;
  /** delete data from the table: "instrument" */
  delete_instrument?: Maybe<Instrument_Mutation_Response>;
  /** delete single row from the table: "instrument" */
  delete_instrument_by_pk?: Maybe<Instrument>;
  /** delete data from the table: "roled_composer" */
  delete_roled_composer?: Maybe<Roled_Composer_Mutation_Response>;
  /** delete single row from the table: "roled_composer" */
  delete_roled_composer_by_pk?: Maybe<Roled_Composer>;
  /** delete data from the table: "transposition" */
  delete_transposition?: Maybe<Transposition_Mutation_Response>;
  /** delete single row from the table: "transposition" */
  delete_transposition_by_pk?: Maybe<Transposition>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "work" */
  delete_work?: Maybe<Work_Mutation_Response>;
  /** delete single row from the table: "work" */
  delete_work_by_pk?: Maybe<Work>;
  /** delete data from the table: "work_roled_composer" */
  delete_work_roled_composer?: Maybe<Work_Roled_Composer_Mutation_Response>;
  /** delete single row from the table: "work_roled_composer" */
  delete_work_roled_composer_by_pk?: Maybe<Work_Roled_Composer>;
  /** insert data into the table: "campaign" */
  insert_campaign?: Maybe<Campaign_Mutation_Response>;
  /** insert data into the table: "campaign_contributor" */
  insert_campaign_contributor?: Maybe<Campaign_Contributor_Mutation_Response>;
  /** insert a single row into the table: "campaign_contributor" */
  insert_campaign_contributor_one?: Maybe<Campaign_Contributor>;
  /** insert a single row into the table: "campaign" */
  insert_campaign_one?: Maybe<Campaign>;
  /** insert data into the table: "composer" */
  insert_composer?: Maybe<Composer_Mutation_Response>;
  /** insert a single row into the table: "composer" */
  insert_composer_one?: Maybe<Composer>;
  /** insert data into the table: "composer_role" */
  insert_composer_role?: Maybe<Composer_Role_Mutation_Response>;
  /** insert a single row into the table: "composer_role" */
  insert_composer_role_one?: Maybe<Composer_Role>;
  /** insert data into the table: "instrument" */
  insert_instrument?: Maybe<Instrument_Mutation_Response>;
  /** insert a single row into the table: "instrument" */
  insert_instrument_one?: Maybe<Instrument>;
  /** insert data into the table: "roled_composer" */
  insert_roled_composer?: Maybe<Roled_Composer_Mutation_Response>;
  /** insert a single row into the table: "roled_composer" */
  insert_roled_composer_one?: Maybe<Roled_Composer>;
  /** insert data into the table: "transposition" */
  insert_transposition?: Maybe<Transposition_Mutation_Response>;
  /** insert a single row into the table: "transposition" */
  insert_transposition_one?: Maybe<Transposition>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** insert data into the table: "work" */
  insert_work?: Maybe<Work_Mutation_Response>;
  /** insert a single row into the table: "work" */
  insert_work_one?: Maybe<Work>;
  /** insert data into the table: "work_roled_composer" */
  insert_work_roled_composer?: Maybe<Work_Roled_Composer_Mutation_Response>;
  /** insert a single row into the table: "work_roled_composer" */
  insert_work_roled_composer_one?: Maybe<Work_Roled_Composer>;
  /** update data of the table: "campaign" */
  update_campaign?: Maybe<Campaign_Mutation_Response>;
  /** update single row of the table: "campaign" */
  update_campaign_by_pk?: Maybe<Campaign>;
  /** update data of the table: "campaign_contributor" */
  update_campaign_contributor?: Maybe<Campaign_Contributor_Mutation_Response>;
  /** update single row of the table: "campaign_contributor" */
  update_campaign_contributor_by_pk?: Maybe<Campaign_Contributor>;
  /** update data of the table: "composer" */
  update_composer?: Maybe<Composer_Mutation_Response>;
  /** update single row of the table: "composer" */
  update_composer_by_pk?: Maybe<Composer>;
  /** update data of the table: "composer_role" */
  update_composer_role?: Maybe<Composer_Role_Mutation_Response>;
  /** update single row of the table: "composer_role" */
  update_composer_role_by_pk?: Maybe<Composer_Role>;
  /** update data of the table: "instrument" */
  update_instrument?: Maybe<Instrument_Mutation_Response>;
  /** update single row of the table: "instrument" */
  update_instrument_by_pk?: Maybe<Instrument>;
  /** update data of the table: "roled_composer" */
  update_roled_composer?: Maybe<Roled_Composer_Mutation_Response>;
  /** update single row of the table: "roled_composer" */
  update_roled_composer_by_pk?: Maybe<Roled_Composer>;
  /** update data of the table: "transposition" */
  update_transposition?: Maybe<Transposition_Mutation_Response>;
  /** update single row of the table: "transposition" */
  update_transposition_by_pk?: Maybe<Transposition>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update data of the table: "work" */
  update_work?: Maybe<Work_Mutation_Response>;
  /** update single row of the table: "work" */
  update_work_by_pk?: Maybe<Work>;
  /** update data of the table: "work_roled_composer" */
  update_work_roled_composer?: Maybe<Work_Roled_Composer_Mutation_Response>;
  /** update single row of the table: "work_roled_composer" */
  update_work_roled_composer_by_pk?: Maybe<Work_Roled_Composer>;
};


/** mutation root */
export type Mutation_RootDelete_CampaignArgs = {
  where: Campaign_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Campaign_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Campaign_ContributorArgs = {
  where: Campaign_Contributor_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Campaign_Contributor_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ComposerArgs = {
  where: Composer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Composer_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Composer_RoleArgs = {
  where: Composer_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Composer_Role_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_InstrumentArgs = {
  where: Instrument_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Instrument_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Roled_ComposerArgs = {
  where: Roled_Composer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Roled_Composer_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_TranspositionArgs = {
  where: Transposition_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transposition_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_WorkArgs = {
  where: Work_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Work_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Work_Roled_ComposerArgs = {
  where: Work_Roled_Composer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Work_Roled_Composer_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_CampaignArgs = {
  objects: Array<Campaign_Insert_Input>;
  on_conflict?: Maybe<Campaign_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Campaign_ContributorArgs = {
  objects: Array<Campaign_Contributor_Insert_Input>;
  on_conflict?: Maybe<Campaign_Contributor_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Campaign_Contributor_OneArgs = {
  object: Campaign_Contributor_Insert_Input;
  on_conflict?: Maybe<Campaign_Contributor_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Campaign_OneArgs = {
  object: Campaign_Insert_Input;
  on_conflict?: Maybe<Campaign_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ComposerArgs = {
  objects: Array<Composer_Insert_Input>;
  on_conflict?: Maybe<Composer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Composer_OneArgs = {
  object: Composer_Insert_Input;
  on_conflict?: Maybe<Composer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Composer_RoleArgs = {
  objects: Array<Composer_Role_Insert_Input>;
  on_conflict?: Maybe<Composer_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Composer_Role_OneArgs = {
  object: Composer_Role_Insert_Input;
  on_conflict?: Maybe<Composer_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_InstrumentArgs = {
  objects: Array<Instrument_Insert_Input>;
  on_conflict?: Maybe<Instrument_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Instrument_OneArgs = {
  object: Instrument_Insert_Input;
  on_conflict?: Maybe<Instrument_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Roled_ComposerArgs = {
  objects: Array<Roled_Composer_Insert_Input>;
  on_conflict?: Maybe<Roled_Composer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Roled_Composer_OneArgs = {
  object: Roled_Composer_Insert_Input;
  on_conflict?: Maybe<Roled_Composer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TranspositionArgs = {
  objects: Array<Transposition_Insert_Input>;
  on_conflict?: Maybe<Transposition_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transposition_OneArgs = {
  object: Transposition_Insert_Input;
  on_conflict?: Maybe<Transposition_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WorkArgs = {
  objects: Array<Work_Insert_Input>;
  on_conflict?: Maybe<Work_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Work_OneArgs = {
  object: Work_Insert_Input;
  on_conflict?: Maybe<Work_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Work_Roled_ComposerArgs = {
  objects: Array<Work_Roled_Composer_Insert_Input>;
  on_conflict?: Maybe<Work_Roled_Composer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Work_Roled_Composer_OneArgs = {
  object: Work_Roled_Composer_Insert_Input;
  on_conflict?: Maybe<Work_Roled_Composer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CampaignArgs = {
  _inc?: Maybe<Campaign_Inc_Input>;
  _set?: Maybe<Campaign_Set_Input>;
  where: Campaign_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Campaign_By_PkArgs = {
  _inc?: Maybe<Campaign_Inc_Input>;
  _set?: Maybe<Campaign_Set_Input>;
  pk_columns: Campaign_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Campaign_ContributorArgs = {
  _inc?: Maybe<Campaign_Contributor_Inc_Input>;
  _set?: Maybe<Campaign_Contributor_Set_Input>;
  where: Campaign_Contributor_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Campaign_Contributor_By_PkArgs = {
  _inc?: Maybe<Campaign_Contributor_Inc_Input>;
  _set?: Maybe<Campaign_Contributor_Set_Input>;
  pk_columns: Campaign_Contributor_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ComposerArgs = {
  _inc?: Maybe<Composer_Inc_Input>;
  _set?: Maybe<Composer_Set_Input>;
  where: Composer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Composer_By_PkArgs = {
  _inc?: Maybe<Composer_Inc_Input>;
  _set?: Maybe<Composer_Set_Input>;
  pk_columns: Composer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Composer_RoleArgs = {
  _inc?: Maybe<Composer_Role_Inc_Input>;
  _set?: Maybe<Composer_Role_Set_Input>;
  where: Composer_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Composer_Role_By_PkArgs = {
  _inc?: Maybe<Composer_Role_Inc_Input>;
  _set?: Maybe<Composer_Role_Set_Input>;
  pk_columns: Composer_Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_InstrumentArgs = {
  _inc?: Maybe<Instrument_Inc_Input>;
  _set?: Maybe<Instrument_Set_Input>;
  where: Instrument_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Instrument_By_PkArgs = {
  _inc?: Maybe<Instrument_Inc_Input>;
  _set?: Maybe<Instrument_Set_Input>;
  pk_columns: Instrument_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Roled_ComposerArgs = {
  _inc?: Maybe<Roled_Composer_Inc_Input>;
  _set?: Maybe<Roled_Composer_Set_Input>;
  where: Roled_Composer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Roled_Composer_By_PkArgs = {
  _inc?: Maybe<Roled_Composer_Inc_Input>;
  _set?: Maybe<Roled_Composer_Set_Input>;
  pk_columns: Roled_Composer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TranspositionArgs = {
  _inc?: Maybe<Transposition_Inc_Input>;
  _set?: Maybe<Transposition_Set_Input>;
  where: Transposition_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transposition_By_PkArgs = {
  _inc?: Maybe<Transposition_Inc_Input>;
  _set?: Maybe<Transposition_Set_Input>;
  pk_columns: Transposition_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_WorkArgs = {
  _inc?: Maybe<Work_Inc_Input>;
  _set?: Maybe<Work_Set_Input>;
  where: Work_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Work_By_PkArgs = {
  _inc?: Maybe<Work_Inc_Input>;
  _set?: Maybe<Work_Set_Input>;
  pk_columns: Work_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Work_Roled_ComposerArgs = {
  _inc?: Maybe<Work_Roled_Composer_Inc_Input>;
  _set?: Maybe<Work_Roled_Composer_Set_Input>;
  where: Work_Roled_Composer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Work_Roled_Composer_By_PkArgs = {
  _inc?: Maybe<Work_Roled_Composer_Inc_Input>;
  _set?: Maybe<Work_Roled_Composer_Set_Input>;
  pk_columns: Work_Roled_Composer_Pk_Columns_Input;
};


/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "campaign" */
  campaign: Array<Campaign>;
  /** fetch aggregated fields from the table: "campaign" */
  campaign_aggregate: Campaign_Aggregate;
  /** fetch data from the table: "campaign" using primary key columns */
  campaign_by_pk?: Maybe<Campaign>;
  /** fetch data from the table: "campaign_contributor" */
  campaign_contributor: Array<Campaign_Contributor>;
  /** fetch aggregated fields from the table: "campaign_contributor" */
  campaign_contributor_aggregate: Campaign_Contributor_Aggregate;
  /** fetch data from the table: "campaign_contributor" using primary key columns */
  campaign_contributor_by_pk?: Maybe<Campaign_Contributor>;
  /** fetch data from the table: "composer" */
  composer: Array<Composer>;
  /** fetch aggregated fields from the table: "composer" */
  composer_aggregate: Composer_Aggregate;
  /** fetch data from the table: "composer" using primary key columns */
  composer_by_pk?: Maybe<Composer>;
  /** fetch data from the table: "composer_role" */
  composer_role: Array<Composer_Role>;
  /** fetch aggregated fields from the table: "composer_role" */
  composer_role_aggregate: Composer_Role_Aggregate;
  /** fetch data from the table: "composer_role" using primary key columns */
  composer_role_by_pk?: Maybe<Composer_Role>;
  /** fetch data from the table: "instrument" */
  instrument: Array<Instrument>;
  /** fetch aggregated fields from the table: "instrument" */
  instrument_aggregate: Instrument_Aggregate;
  /** fetch data from the table: "instrument" using primary key columns */
  instrument_by_pk?: Maybe<Instrument>;
  /** fetch data from the table: "roled_composer" */
  roled_composer: Array<Roled_Composer>;
  /** fetch aggregated fields from the table: "roled_composer" */
  roled_composer_aggregate: Roled_Composer_Aggregate;
  /** fetch data from the table: "roled_composer" using primary key columns */
  roled_composer_by_pk?: Maybe<Roled_Composer>;
  /** fetch data from the table: "transposition" */
  transposition: Array<Transposition>;
  /** fetch aggregated fields from the table: "transposition" */
  transposition_aggregate: Transposition_Aggregate;
  /** fetch data from the table: "transposition" using primary key columns */
  transposition_by_pk?: Maybe<Transposition>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "work" */
  work: Array<Work>;
  /** fetch aggregated fields from the table: "work" */
  work_aggregate: Work_Aggregate;
  /** fetch data from the table: "work" using primary key columns */
  work_by_pk?: Maybe<Work>;
  /** fetch data from the table: "work_roled_composer" */
  work_roled_composer: Array<Work_Roled_Composer>;
  /** fetch aggregated fields from the table: "work_roled_composer" */
  work_roled_composer_aggregate: Work_Roled_Composer_Aggregate;
  /** fetch data from the table: "work_roled_composer" using primary key columns */
  work_roled_composer_by_pk?: Maybe<Work_Roled_Composer>;
};


/** query root */
export type Query_RootCampaignArgs = {
  distinct_on?: Maybe<Array<Campaign_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Order_By>>;
  where?: Maybe<Campaign_Bool_Exp>;
};


/** query root */
export type Query_RootCampaign_AggregateArgs = {
  distinct_on?: Maybe<Array<Campaign_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Order_By>>;
  where?: Maybe<Campaign_Bool_Exp>;
};


/** query root */
export type Query_RootCampaign_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootCampaign_ContributorArgs = {
  distinct_on?: Maybe<Array<Campaign_Contributor_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Contributor_Order_By>>;
  where?: Maybe<Campaign_Contributor_Bool_Exp>;
};


/** query root */
export type Query_RootCampaign_Contributor_AggregateArgs = {
  distinct_on?: Maybe<Array<Campaign_Contributor_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Contributor_Order_By>>;
  where?: Maybe<Campaign_Contributor_Bool_Exp>;
};


/** query root */
export type Query_RootCampaign_Contributor_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootComposerArgs = {
  distinct_on?: Maybe<Array<Composer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Composer_Order_By>>;
  where?: Maybe<Composer_Bool_Exp>;
};


/** query root */
export type Query_RootComposer_AggregateArgs = {
  distinct_on?: Maybe<Array<Composer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Composer_Order_By>>;
  where?: Maybe<Composer_Bool_Exp>;
};


/** query root */
export type Query_RootComposer_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootComposer_RoleArgs = {
  distinct_on?: Maybe<Array<Composer_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Composer_Role_Order_By>>;
  where?: Maybe<Composer_Role_Bool_Exp>;
};


/** query root */
export type Query_RootComposer_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<Composer_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Composer_Role_Order_By>>;
  where?: Maybe<Composer_Role_Bool_Exp>;
};


/** query root */
export type Query_RootComposer_Role_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootInstrumentArgs = {
  distinct_on?: Maybe<Array<Instrument_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instrument_Order_By>>;
  where?: Maybe<Instrument_Bool_Exp>;
};


/** query root */
export type Query_RootInstrument_AggregateArgs = {
  distinct_on?: Maybe<Array<Instrument_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instrument_Order_By>>;
  where?: Maybe<Instrument_Bool_Exp>;
};


/** query root */
export type Query_RootInstrument_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootRoled_ComposerArgs = {
  distinct_on?: Maybe<Array<Roled_Composer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roled_Composer_Order_By>>;
  where?: Maybe<Roled_Composer_Bool_Exp>;
};


/** query root */
export type Query_RootRoled_Composer_AggregateArgs = {
  distinct_on?: Maybe<Array<Roled_Composer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roled_Composer_Order_By>>;
  where?: Maybe<Roled_Composer_Bool_Exp>;
};


/** query root */
export type Query_RootRoled_Composer_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootTranspositionArgs = {
  distinct_on?: Maybe<Array<Transposition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transposition_Order_By>>;
  where?: Maybe<Transposition_Bool_Exp>;
};


/** query root */
export type Query_RootTransposition_AggregateArgs = {
  distinct_on?: Maybe<Array<Transposition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transposition_Order_By>>;
  where?: Maybe<Transposition_Bool_Exp>;
};


/** query root */
export type Query_RootTransposition_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootWorkArgs = {
  distinct_on?: Maybe<Array<Work_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Order_By>>;
  where?: Maybe<Work_Bool_Exp>;
};


/** query root */
export type Query_RootWork_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Order_By>>;
  where?: Maybe<Work_Bool_Exp>;
};


/** query root */
export type Query_RootWork_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootWork_Roled_ComposerArgs = {
  distinct_on?: Maybe<Array<Work_Roled_Composer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Roled_Composer_Order_By>>;
  where?: Maybe<Work_Roled_Composer_Bool_Exp>;
};


/** query root */
export type Query_RootWork_Roled_Composer_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Roled_Composer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Roled_Composer_Order_By>>;
  where?: Maybe<Work_Roled_Composer_Bool_Exp>;
};


/** query root */
export type Query_RootWork_Roled_Composer_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "roled_composer" */
export type Roled_Composer = {
  __typename?: 'roled_composer';
  /** An object relationship */
  composer: Composer;
  composer_id: Scalars['Int'];
  /** An object relationship */
  composer_role: Composer_Role;
  composer_role_id: Scalars['Int'];
  id: Scalars['Int'];
  /** An array relationship */
  work_roled_composers: Array<Work_Roled_Composer>;
  /** An aggregated array relationship */
  work_roled_composers_aggregate: Work_Roled_Composer_Aggregate;
};


/** columns and relationships of "roled_composer" */
export type Roled_ComposerWork_Roled_ComposersArgs = {
  distinct_on?: Maybe<Array<Work_Roled_Composer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Roled_Composer_Order_By>>;
  where?: Maybe<Work_Roled_Composer_Bool_Exp>;
};


/** columns and relationships of "roled_composer" */
export type Roled_ComposerWork_Roled_Composers_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Roled_Composer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Roled_Composer_Order_By>>;
  where?: Maybe<Work_Roled_Composer_Bool_Exp>;
};

/** aggregated selection of "roled_composer" */
export type Roled_Composer_Aggregate = {
  __typename?: 'roled_composer_aggregate';
  aggregate?: Maybe<Roled_Composer_Aggregate_Fields>;
  nodes: Array<Roled_Composer>;
};

/** aggregate fields of "roled_composer" */
export type Roled_Composer_Aggregate_Fields = {
  __typename?: 'roled_composer_aggregate_fields';
  avg?: Maybe<Roled_Composer_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Roled_Composer_Max_Fields>;
  min?: Maybe<Roled_Composer_Min_Fields>;
  stddev?: Maybe<Roled_Composer_Stddev_Fields>;
  stddev_pop?: Maybe<Roled_Composer_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Roled_Composer_Stddev_Samp_Fields>;
  sum?: Maybe<Roled_Composer_Sum_Fields>;
  var_pop?: Maybe<Roled_Composer_Var_Pop_Fields>;
  var_samp?: Maybe<Roled_Composer_Var_Samp_Fields>;
  variance?: Maybe<Roled_Composer_Variance_Fields>;
};


/** aggregate fields of "roled_composer" */
export type Roled_Composer_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Roled_Composer_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "roled_composer" */
export type Roled_Composer_Aggregate_Order_By = {
  avg?: Maybe<Roled_Composer_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Roled_Composer_Max_Order_By>;
  min?: Maybe<Roled_Composer_Min_Order_By>;
  stddev?: Maybe<Roled_Composer_Stddev_Order_By>;
  stddev_pop?: Maybe<Roled_Composer_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Roled_Composer_Stddev_Samp_Order_By>;
  sum?: Maybe<Roled_Composer_Sum_Order_By>;
  var_pop?: Maybe<Roled_Composer_Var_Pop_Order_By>;
  var_samp?: Maybe<Roled_Composer_Var_Samp_Order_By>;
  variance?: Maybe<Roled_Composer_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "roled_composer" */
export type Roled_Composer_Arr_Rel_Insert_Input = {
  data: Array<Roled_Composer_Insert_Input>;
  on_conflict?: Maybe<Roled_Composer_On_Conflict>;
};

/** aggregate avg on columns */
export type Roled_Composer_Avg_Fields = {
  __typename?: 'roled_composer_avg_fields';
  composer_id?: Maybe<Scalars['Float']>;
  composer_role_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "roled_composer" */
export type Roled_Composer_Avg_Order_By = {
  composer_id?: Maybe<Order_By>;
  composer_role_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "roled_composer". All fields are combined with a logical 'AND'. */
export type Roled_Composer_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Roled_Composer_Bool_Exp>>>;
  _not?: Maybe<Roled_Composer_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Roled_Composer_Bool_Exp>>>;
  composer?: Maybe<Composer_Bool_Exp>;
  composer_id?: Maybe<Int_Comparison_Exp>;
  composer_role?: Maybe<Composer_Role_Bool_Exp>;
  composer_role_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  work_roled_composers?: Maybe<Work_Roled_Composer_Bool_Exp>;
};

/** unique or primary key constraints on table "roled_composer" */
export enum Roled_Composer_Constraint {
  /** unique or primary key constraint */
  RoledComposerComposerRoleIdComposerIdKey = 'roled_composer_composer_role_id_composer_id_key',
  /** unique or primary key constraint */
  RoledComposerPkey = 'roled_composer_pkey'
}

/** input type for incrementing integer column in table "roled_composer" */
export type Roled_Composer_Inc_Input = {
  composer_id?: Maybe<Scalars['Int']>;
  composer_role_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "roled_composer" */
export type Roled_Composer_Insert_Input = {
  composer?: Maybe<Composer_Obj_Rel_Insert_Input>;
  composer_id?: Maybe<Scalars['Int']>;
  composer_role?: Maybe<Composer_Role_Obj_Rel_Insert_Input>;
  composer_role_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  work_roled_composers?: Maybe<Work_Roled_Composer_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Roled_Composer_Max_Fields = {
  __typename?: 'roled_composer_max_fields';
  composer_id?: Maybe<Scalars['Int']>;
  composer_role_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "roled_composer" */
export type Roled_Composer_Max_Order_By = {
  composer_id?: Maybe<Order_By>;
  composer_role_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Roled_Composer_Min_Fields = {
  __typename?: 'roled_composer_min_fields';
  composer_id?: Maybe<Scalars['Int']>;
  composer_role_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "roled_composer" */
export type Roled_Composer_Min_Order_By = {
  composer_id?: Maybe<Order_By>;
  composer_role_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** response of any mutation on the table "roled_composer" */
export type Roled_Composer_Mutation_Response = {
  __typename?: 'roled_composer_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Roled_Composer>;
};

/** input type for inserting object relation for remote table "roled_composer" */
export type Roled_Composer_Obj_Rel_Insert_Input = {
  data: Roled_Composer_Insert_Input;
  on_conflict?: Maybe<Roled_Composer_On_Conflict>;
};

/** on conflict condition type for table "roled_composer" */
export type Roled_Composer_On_Conflict = {
  constraint: Roled_Composer_Constraint;
  update_columns: Array<Roled_Composer_Update_Column>;
  where?: Maybe<Roled_Composer_Bool_Exp>;
};

/** ordering options when selecting data from "roled_composer" */
export type Roled_Composer_Order_By = {
  composer?: Maybe<Composer_Order_By>;
  composer_id?: Maybe<Order_By>;
  composer_role?: Maybe<Composer_Role_Order_By>;
  composer_role_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  work_roled_composers_aggregate?: Maybe<Work_Roled_Composer_Aggregate_Order_By>;
};

/** primary key columns input for table: "roled_composer" */
export type Roled_Composer_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "roled_composer" */
export enum Roled_Composer_Select_Column {
  /** column name */
  ComposerId = 'composer_id',
  /** column name */
  ComposerRoleId = 'composer_role_id',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "roled_composer" */
export type Roled_Composer_Set_Input = {
  composer_id?: Maybe<Scalars['Int']>;
  composer_role_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Roled_Composer_Stddev_Fields = {
  __typename?: 'roled_composer_stddev_fields';
  composer_id?: Maybe<Scalars['Float']>;
  composer_role_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "roled_composer" */
export type Roled_Composer_Stddev_Order_By = {
  composer_id?: Maybe<Order_By>;
  composer_role_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Roled_Composer_Stddev_Pop_Fields = {
  __typename?: 'roled_composer_stddev_pop_fields';
  composer_id?: Maybe<Scalars['Float']>;
  composer_role_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "roled_composer" */
export type Roled_Composer_Stddev_Pop_Order_By = {
  composer_id?: Maybe<Order_By>;
  composer_role_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Roled_Composer_Stddev_Samp_Fields = {
  __typename?: 'roled_composer_stddev_samp_fields';
  composer_id?: Maybe<Scalars['Float']>;
  composer_role_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "roled_composer" */
export type Roled_Composer_Stddev_Samp_Order_By = {
  composer_id?: Maybe<Order_By>;
  composer_role_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Roled_Composer_Sum_Fields = {
  __typename?: 'roled_composer_sum_fields';
  composer_id?: Maybe<Scalars['Int']>;
  composer_role_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "roled_composer" */
export type Roled_Composer_Sum_Order_By = {
  composer_id?: Maybe<Order_By>;
  composer_role_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "roled_composer" */
export enum Roled_Composer_Update_Column {
  /** column name */
  ComposerId = 'composer_id',
  /** column name */
  ComposerRoleId = 'composer_role_id',
  /** column name */
  Id = 'id'
}

/** aggregate var_pop on columns */
export type Roled_Composer_Var_Pop_Fields = {
  __typename?: 'roled_composer_var_pop_fields';
  composer_id?: Maybe<Scalars['Float']>;
  composer_role_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "roled_composer" */
export type Roled_Composer_Var_Pop_Order_By = {
  composer_id?: Maybe<Order_By>;
  composer_role_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Roled_Composer_Var_Samp_Fields = {
  __typename?: 'roled_composer_var_samp_fields';
  composer_id?: Maybe<Scalars['Float']>;
  composer_role_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "roled_composer" */
export type Roled_Composer_Var_Samp_Order_By = {
  composer_id?: Maybe<Order_By>;
  composer_role_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Roled_Composer_Variance_Fields = {
  __typename?: 'roled_composer_variance_fields';
  composer_id?: Maybe<Scalars['Float']>;
  composer_role_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "roled_composer" */
export type Roled_Composer_Variance_Order_By = {
  composer_id?: Maybe<Order_By>;
  composer_role_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "campaign" */
  campaign: Array<Campaign>;
  /** fetch aggregated fields from the table: "campaign" */
  campaign_aggregate: Campaign_Aggregate;
  /** fetch data from the table: "campaign" using primary key columns */
  campaign_by_pk?: Maybe<Campaign>;
  /** fetch data from the table: "campaign_contributor" */
  campaign_contributor: Array<Campaign_Contributor>;
  /** fetch aggregated fields from the table: "campaign_contributor" */
  campaign_contributor_aggregate: Campaign_Contributor_Aggregate;
  /** fetch data from the table: "campaign_contributor" using primary key columns */
  campaign_contributor_by_pk?: Maybe<Campaign_Contributor>;
  /** fetch data from the table: "composer" */
  composer: Array<Composer>;
  /** fetch aggregated fields from the table: "composer" */
  composer_aggregate: Composer_Aggregate;
  /** fetch data from the table: "composer" using primary key columns */
  composer_by_pk?: Maybe<Composer>;
  /** fetch data from the table: "composer_role" */
  composer_role: Array<Composer_Role>;
  /** fetch aggregated fields from the table: "composer_role" */
  composer_role_aggregate: Composer_Role_Aggregate;
  /** fetch data from the table: "composer_role" using primary key columns */
  composer_role_by_pk?: Maybe<Composer_Role>;
  /** fetch data from the table: "instrument" */
  instrument: Array<Instrument>;
  /** fetch aggregated fields from the table: "instrument" */
  instrument_aggregate: Instrument_Aggregate;
  /** fetch data from the table: "instrument" using primary key columns */
  instrument_by_pk?: Maybe<Instrument>;
  /** fetch data from the table: "roled_composer" */
  roled_composer: Array<Roled_Composer>;
  /** fetch aggregated fields from the table: "roled_composer" */
  roled_composer_aggregate: Roled_Composer_Aggregate;
  /** fetch data from the table: "roled_composer" using primary key columns */
  roled_composer_by_pk?: Maybe<Roled_Composer>;
  /** fetch data from the table: "transposition" */
  transposition: Array<Transposition>;
  /** fetch aggregated fields from the table: "transposition" */
  transposition_aggregate: Transposition_Aggregate;
  /** fetch data from the table: "transposition" using primary key columns */
  transposition_by_pk?: Maybe<Transposition>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "work" */
  work: Array<Work>;
  /** fetch aggregated fields from the table: "work" */
  work_aggregate: Work_Aggregate;
  /** fetch data from the table: "work" using primary key columns */
  work_by_pk?: Maybe<Work>;
  /** fetch data from the table: "work_roled_composer" */
  work_roled_composer: Array<Work_Roled_Composer>;
  /** fetch aggregated fields from the table: "work_roled_composer" */
  work_roled_composer_aggregate: Work_Roled_Composer_Aggregate;
  /** fetch data from the table: "work_roled_composer" using primary key columns */
  work_roled_composer_by_pk?: Maybe<Work_Roled_Composer>;
};


/** subscription root */
export type Subscription_RootCampaignArgs = {
  distinct_on?: Maybe<Array<Campaign_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Order_By>>;
  where?: Maybe<Campaign_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCampaign_AggregateArgs = {
  distinct_on?: Maybe<Array<Campaign_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Order_By>>;
  where?: Maybe<Campaign_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCampaign_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootCampaign_ContributorArgs = {
  distinct_on?: Maybe<Array<Campaign_Contributor_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Contributor_Order_By>>;
  where?: Maybe<Campaign_Contributor_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCampaign_Contributor_AggregateArgs = {
  distinct_on?: Maybe<Array<Campaign_Contributor_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Contributor_Order_By>>;
  where?: Maybe<Campaign_Contributor_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCampaign_Contributor_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootComposerArgs = {
  distinct_on?: Maybe<Array<Composer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Composer_Order_By>>;
  where?: Maybe<Composer_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootComposer_AggregateArgs = {
  distinct_on?: Maybe<Array<Composer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Composer_Order_By>>;
  where?: Maybe<Composer_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootComposer_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootComposer_RoleArgs = {
  distinct_on?: Maybe<Array<Composer_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Composer_Role_Order_By>>;
  where?: Maybe<Composer_Role_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootComposer_Role_AggregateArgs = {
  distinct_on?: Maybe<Array<Composer_Role_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Composer_Role_Order_By>>;
  where?: Maybe<Composer_Role_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootComposer_Role_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootInstrumentArgs = {
  distinct_on?: Maybe<Array<Instrument_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instrument_Order_By>>;
  where?: Maybe<Instrument_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootInstrument_AggregateArgs = {
  distinct_on?: Maybe<Array<Instrument_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instrument_Order_By>>;
  where?: Maybe<Instrument_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootInstrument_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootRoled_ComposerArgs = {
  distinct_on?: Maybe<Array<Roled_Composer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roled_Composer_Order_By>>;
  where?: Maybe<Roled_Composer_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRoled_Composer_AggregateArgs = {
  distinct_on?: Maybe<Array<Roled_Composer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roled_Composer_Order_By>>;
  where?: Maybe<Roled_Composer_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRoled_Composer_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootTranspositionArgs = {
  distinct_on?: Maybe<Array<Transposition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transposition_Order_By>>;
  where?: Maybe<Transposition_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTransposition_AggregateArgs = {
  distinct_on?: Maybe<Array<Transposition_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transposition_Order_By>>;
  where?: Maybe<Transposition_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTransposition_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootWorkArgs = {
  distinct_on?: Maybe<Array<Work_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Order_By>>;
  where?: Maybe<Work_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWork_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Order_By>>;
  where?: Maybe<Work_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWork_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootWork_Roled_ComposerArgs = {
  distinct_on?: Maybe<Array<Work_Roled_Composer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Roled_Composer_Order_By>>;
  where?: Maybe<Work_Roled_Composer_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWork_Roled_Composer_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Roled_Composer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Roled_Composer_Order_By>>;
  where?: Maybe<Work_Roled_Composer_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWork_Roled_Composer_By_PkArgs = {
  id: Scalars['Int'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};


/** expression to compare columns of type timetz. All fields are combined with logical 'AND'. */
export type Timetz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timetz']>;
  _gt?: Maybe<Scalars['timetz']>;
  _gte?: Maybe<Scalars['timetz']>;
  _in?: Maybe<Array<Scalars['timetz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timetz']>;
  _lte?: Maybe<Scalars['timetz']>;
  _neq?: Maybe<Scalars['timetz']>;
  _nin?: Maybe<Array<Scalars['timetz']>>;
};

/** columns and relationships of "transposition" */
export type Transposition = {
  __typename?: 'transposition';
  id: Scalars['Int'];
  key: Scalars['String'];
};

/** aggregated selection of "transposition" */
export type Transposition_Aggregate = {
  __typename?: 'transposition_aggregate';
  aggregate?: Maybe<Transposition_Aggregate_Fields>;
  nodes: Array<Transposition>;
};

/** aggregate fields of "transposition" */
export type Transposition_Aggregate_Fields = {
  __typename?: 'transposition_aggregate_fields';
  avg?: Maybe<Transposition_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Transposition_Max_Fields>;
  min?: Maybe<Transposition_Min_Fields>;
  stddev?: Maybe<Transposition_Stddev_Fields>;
  stddev_pop?: Maybe<Transposition_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transposition_Stddev_Samp_Fields>;
  sum?: Maybe<Transposition_Sum_Fields>;
  var_pop?: Maybe<Transposition_Var_Pop_Fields>;
  var_samp?: Maybe<Transposition_Var_Samp_Fields>;
  variance?: Maybe<Transposition_Variance_Fields>;
};


/** aggregate fields of "transposition" */
export type Transposition_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Transposition_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "transposition" */
export type Transposition_Aggregate_Order_By = {
  avg?: Maybe<Transposition_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Transposition_Max_Order_By>;
  min?: Maybe<Transposition_Min_Order_By>;
  stddev?: Maybe<Transposition_Stddev_Order_By>;
  stddev_pop?: Maybe<Transposition_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Transposition_Stddev_Samp_Order_By>;
  sum?: Maybe<Transposition_Sum_Order_By>;
  var_pop?: Maybe<Transposition_Var_Pop_Order_By>;
  var_samp?: Maybe<Transposition_Var_Samp_Order_By>;
  variance?: Maybe<Transposition_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "transposition" */
export type Transposition_Arr_Rel_Insert_Input = {
  data: Array<Transposition_Insert_Input>;
  on_conflict?: Maybe<Transposition_On_Conflict>;
};

/** aggregate avg on columns */
export type Transposition_Avg_Fields = {
  __typename?: 'transposition_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "transposition" */
export type Transposition_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transposition". All fields are combined with a logical 'AND'. */
export type Transposition_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Transposition_Bool_Exp>>>;
  _not?: Maybe<Transposition_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Transposition_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  key?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "transposition" */
export enum Transposition_Constraint {
  /** unique or primary key constraint */
  TranspositionPkey = 'transposition_pkey'
}

/** input type for incrementing integer column in table "transposition" */
export type Transposition_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "transposition" */
export type Transposition_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Transposition_Max_Fields = {
  __typename?: 'transposition_max_fields';
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "transposition" */
export type Transposition_Max_Order_By = {
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Transposition_Min_Fields = {
  __typename?: 'transposition_min_fields';
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "transposition" */
export type Transposition_Min_Order_By = {
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
};

/** response of any mutation on the table "transposition" */
export type Transposition_Mutation_Response = {
  __typename?: 'transposition_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Transposition>;
};

/** input type for inserting object relation for remote table "transposition" */
export type Transposition_Obj_Rel_Insert_Input = {
  data: Transposition_Insert_Input;
  on_conflict?: Maybe<Transposition_On_Conflict>;
};

/** on conflict condition type for table "transposition" */
export type Transposition_On_Conflict = {
  constraint: Transposition_Constraint;
  update_columns: Array<Transposition_Update_Column>;
  where?: Maybe<Transposition_Bool_Exp>;
};

/** ordering options when selecting data from "transposition" */
export type Transposition_Order_By = {
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
};

/** primary key columns input for table: "transposition" */
export type Transposition_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "transposition" */
export enum Transposition_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key'
}

/** input type for updating data in table "transposition" */
export type Transposition_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Transposition_Stddev_Fields = {
  __typename?: 'transposition_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "transposition" */
export type Transposition_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transposition_Stddev_Pop_Fields = {
  __typename?: 'transposition_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "transposition" */
export type Transposition_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transposition_Stddev_Samp_Fields = {
  __typename?: 'transposition_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "transposition" */
export type Transposition_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Transposition_Sum_Fields = {
  __typename?: 'transposition_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "transposition" */
export type Transposition_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "transposition" */
export enum Transposition_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key'
}

/** aggregate var_pop on columns */
export type Transposition_Var_Pop_Fields = {
  __typename?: 'transposition_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "transposition" */
export type Transposition_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transposition_Var_Samp_Fields = {
  __typename?: 'transposition_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "transposition" */
export type Transposition_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Transposition_Variance_Fields = {
  __typename?: 'transposition_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "transposition" */
export type Transposition_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  /** An array relationship */
  campaign_contributors: Array<Campaign_Contributor>;
  /** An aggregated array relationship */
  campaign_contributors_aggregate: Campaign_Contributor_Aggregate;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  hash: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  surname: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  username: Scalars['String'];
};


/** columns and relationships of "user" */
export type UserCampaign_ContributorsArgs = {
  distinct_on?: Maybe<Array<Campaign_Contributor_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Contributor_Order_By>>;
  where?: Maybe<Campaign_Contributor_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserCampaign_Contributors_AggregateArgs = {
  distinct_on?: Maybe<Array<Campaign_Contributor_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Contributor_Order_By>>;
  where?: Maybe<Campaign_Contributor_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  avg?: Maybe<User_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
  stddev?: Maybe<User_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Sum_Order_By>;
  var_pop?: Maybe<User_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Var_Samp_Order_By>;
  variance?: Maybe<User_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user" */
export type User_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  campaign_contributors?: Maybe<Campaign_Contributor_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  hash?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
  surname?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'user_pkey',
  /** unique or primary key constraint */
  UserUsernameKey = 'user_username_key'
}

/** input type for incrementing integer column in table "user" */
export type User_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  campaign_contributors?: Maybe<Campaign_Contributor_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  hash?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  surname?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  hash?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  surname?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** ordering options when selecting data from "user" */
export type User_Order_By = {
  campaign_contributors_aggregate?: Maybe<Campaign_Contributor_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  hash?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  surname?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** primary key columns input for table: "user" */
export type User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Hash = 'hash',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone',
  /** column name */
  Surname = 'surname',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user" */
export type User_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user" */
export type User_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user" */
export type User_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user" */
export type User_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Hash = 'hash',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone',
  /** column name */
  Surname = 'surname',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user" */
export type User_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user" */
export type User_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user" */
export type User_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "work" */
export type Work = {
  __typename?: 'work';
  /** An array relationship */
  campaigns: Array<Campaign>;
  /** An aggregated array relationship */
  campaigns_aggregate: Campaign_Aggregate;
  duration?: Maybe<Scalars['timetz']>;
  id: Scalars['Int'];
  title: Scalars['String'];
  /** An array relationship */
  work_roled_composers: Array<Work_Roled_Composer>;
  /** An aggregated array relationship */
  work_roled_composers_aggregate: Work_Roled_Composer_Aggregate;
};


/** columns and relationships of "work" */
export type WorkCampaignsArgs = {
  distinct_on?: Maybe<Array<Campaign_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Order_By>>;
  where?: Maybe<Campaign_Bool_Exp>;
};


/** columns and relationships of "work" */
export type WorkCampaigns_AggregateArgs = {
  distinct_on?: Maybe<Array<Campaign_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Order_By>>;
  where?: Maybe<Campaign_Bool_Exp>;
};


/** columns and relationships of "work" */
export type WorkWork_Roled_ComposersArgs = {
  distinct_on?: Maybe<Array<Work_Roled_Composer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Roled_Composer_Order_By>>;
  where?: Maybe<Work_Roled_Composer_Bool_Exp>;
};


/** columns and relationships of "work" */
export type WorkWork_Roled_Composers_AggregateArgs = {
  distinct_on?: Maybe<Array<Work_Roled_Composer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Work_Roled_Composer_Order_By>>;
  where?: Maybe<Work_Roled_Composer_Bool_Exp>;
};

/** aggregated selection of "work" */
export type Work_Aggregate = {
  __typename?: 'work_aggregate';
  aggregate?: Maybe<Work_Aggregate_Fields>;
  nodes: Array<Work>;
};

/** aggregate fields of "work" */
export type Work_Aggregate_Fields = {
  __typename?: 'work_aggregate_fields';
  avg?: Maybe<Work_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Work_Max_Fields>;
  min?: Maybe<Work_Min_Fields>;
  stddev?: Maybe<Work_Stddev_Fields>;
  stddev_pop?: Maybe<Work_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Work_Stddev_Samp_Fields>;
  sum?: Maybe<Work_Sum_Fields>;
  var_pop?: Maybe<Work_Var_Pop_Fields>;
  var_samp?: Maybe<Work_Var_Samp_Fields>;
  variance?: Maybe<Work_Variance_Fields>;
};


/** aggregate fields of "work" */
export type Work_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Work_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "work" */
export type Work_Aggregate_Order_By = {
  avg?: Maybe<Work_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Work_Max_Order_By>;
  min?: Maybe<Work_Min_Order_By>;
  stddev?: Maybe<Work_Stddev_Order_By>;
  stddev_pop?: Maybe<Work_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Work_Stddev_Samp_Order_By>;
  sum?: Maybe<Work_Sum_Order_By>;
  var_pop?: Maybe<Work_Var_Pop_Order_By>;
  var_samp?: Maybe<Work_Var_Samp_Order_By>;
  variance?: Maybe<Work_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "work" */
export type Work_Arr_Rel_Insert_Input = {
  data: Array<Work_Insert_Input>;
  on_conflict?: Maybe<Work_On_Conflict>;
};

/** aggregate avg on columns */
export type Work_Avg_Fields = {
  __typename?: 'work_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "work" */
export type Work_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "work". All fields are combined with a logical 'AND'. */
export type Work_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Work_Bool_Exp>>>;
  _not?: Maybe<Work_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Work_Bool_Exp>>>;
  campaigns?: Maybe<Campaign_Bool_Exp>;
  duration?: Maybe<Timetz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  work_roled_composers?: Maybe<Work_Roled_Composer_Bool_Exp>;
};

/** unique or primary key constraints on table "work" */
export enum Work_Constraint {
  /** unique or primary key constraint */
  WorkPkey = 'work_pkey'
}

/** input type for incrementing integer column in table "work" */
export type Work_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "work" */
export type Work_Insert_Input = {
  campaigns?: Maybe<Campaign_Arr_Rel_Insert_Input>;
  duration?: Maybe<Scalars['timetz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  work_roled_composers?: Maybe<Work_Roled_Composer_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Work_Max_Fields = {
  __typename?: 'work_max_fields';
  duration?: Maybe<Scalars['timetz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "work" */
export type Work_Max_Order_By = {
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Work_Min_Fields = {
  __typename?: 'work_min_fields';
  duration?: Maybe<Scalars['timetz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "work" */
export type Work_Min_Order_By = {
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "work" */
export type Work_Mutation_Response = {
  __typename?: 'work_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Work>;
};

/** input type for inserting object relation for remote table "work" */
export type Work_Obj_Rel_Insert_Input = {
  data: Work_Insert_Input;
  on_conflict?: Maybe<Work_On_Conflict>;
};

/** on conflict condition type for table "work" */
export type Work_On_Conflict = {
  constraint: Work_Constraint;
  update_columns: Array<Work_Update_Column>;
  where?: Maybe<Work_Bool_Exp>;
};

/** ordering options when selecting data from "work" */
export type Work_Order_By = {
  campaigns_aggregate?: Maybe<Campaign_Aggregate_Order_By>;
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  work_roled_composers_aggregate?: Maybe<Work_Roled_Composer_Aggregate_Order_By>;
};

/** primary key columns input for table: "work" */
export type Work_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** columns and relationships of "work_roled_composer" */
export type Work_Roled_Composer = {
  __typename?: 'work_roled_composer';
  id: Scalars['Int'];
  /** An object relationship */
  roled_composer: Roled_Composer;
  roled_composer_id: Scalars['Int'];
  /** An object relationship */
  work: Work;
  work_id: Scalars['Int'];
};

/** aggregated selection of "work_roled_composer" */
export type Work_Roled_Composer_Aggregate = {
  __typename?: 'work_roled_composer_aggregate';
  aggregate?: Maybe<Work_Roled_Composer_Aggregate_Fields>;
  nodes: Array<Work_Roled_Composer>;
};

/** aggregate fields of "work_roled_composer" */
export type Work_Roled_Composer_Aggregate_Fields = {
  __typename?: 'work_roled_composer_aggregate_fields';
  avg?: Maybe<Work_Roled_Composer_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Work_Roled_Composer_Max_Fields>;
  min?: Maybe<Work_Roled_Composer_Min_Fields>;
  stddev?: Maybe<Work_Roled_Composer_Stddev_Fields>;
  stddev_pop?: Maybe<Work_Roled_Composer_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Work_Roled_Composer_Stddev_Samp_Fields>;
  sum?: Maybe<Work_Roled_Composer_Sum_Fields>;
  var_pop?: Maybe<Work_Roled_Composer_Var_Pop_Fields>;
  var_samp?: Maybe<Work_Roled_Composer_Var_Samp_Fields>;
  variance?: Maybe<Work_Roled_Composer_Variance_Fields>;
};


/** aggregate fields of "work_roled_composer" */
export type Work_Roled_Composer_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Work_Roled_Composer_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "work_roled_composer" */
export type Work_Roled_Composer_Aggregate_Order_By = {
  avg?: Maybe<Work_Roled_Composer_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Work_Roled_Composer_Max_Order_By>;
  min?: Maybe<Work_Roled_Composer_Min_Order_By>;
  stddev?: Maybe<Work_Roled_Composer_Stddev_Order_By>;
  stddev_pop?: Maybe<Work_Roled_Composer_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Work_Roled_Composer_Stddev_Samp_Order_By>;
  sum?: Maybe<Work_Roled_Composer_Sum_Order_By>;
  var_pop?: Maybe<Work_Roled_Composer_Var_Pop_Order_By>;
  var_samp?: Maybe<Work_Roled_Composer_Var_Samp_Order_By>;
  variance?: Maybe<Work_Roled_Composer_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "work_roled_composer" */
export type Work_Roled_Composer_Arr_Rel_Insert_Input = {
  data: Array<Work_Roled_Composer_Insert_Input>;
  on_conflict?: Maybe<Work_Roled_Composer_On_Conflict>;
};

/** aggregate avg on columns */
export type Work_Roled_Composer_Avg_Fields = {
  __typename?: 'work_roled_composer_avg_fields';
  id?: Maybe<Scalars['Float']>;
  roled_composer_id?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "work_roled_composer" */
export type Work_Roled_Composer_Avg_Order_By = {
  id?: Maybe<Order_By>;
  roled_composer_id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "work_roled_composer". All fields are combined with a logical 'AND'. */
export type Work_Roled_Composer_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Work_Roled_Composer_Bool_Exp>>>;
  _not?: Maybe<Work_Roled_Composer_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Work_Roled_Composer_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  roled_composer?: Maybe<Roled_Composer_Bool_Exp>;
  roled_composer_id?: Maybe<Int_Comparison_Exp>;
  work?: Maybe<Work_Bool_Exp>;
  work_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "work_roled_composer" */
export enum Work_Roled_Composer_Constraint {
  /** unique or primary key constraint */
  WorkRoledComposerPkey = 'work_roled_composer_pkey',
  /** unique or primary key constraint */
  WorkRoledComposerWorkIdRoledComposerIdKey = 'work_roled_composer_work_id_roled_composer_id_key'
}

/** input type for incrementing integer column in table "work_roled_composer" */
export type Work_Roled_Composer_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  roled_composer_id?: Maybe<Scalars['Int']>;
  work_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "work_roled_composer" */
export type Work_Roled_Composer_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  roled_composer?: Maybe<Roled_Composer_Obj_Rel_Insert_Input>;
  roled_composer_id?: Maybe<Scalars['Int']>;
  work?: Maybe<Work_Obj_Rel_Insert_Input>;
  work_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Work_Roled_Composer_Max_Fields = {
  __typename?: 'work_roled_composer_max_fields';
  id?: Maybe<Scalars['Int']>;
  roled_composer_id?: Maybe<Scalars['Int']>;
  work_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "work_roled_composer" */
export type Work_Roled_Composer_Max_Order_By = {
  id?: Maybe<Order_By>;
  roled_composer_id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Work_Roled_Composer_Min_Fields = {
  __typename?: 'work_roled_composer_min_fields';
  id?: Maybe<Scalars['Int']>;
  roled_composer_id?: Maybe<Scalars['Int']>;
  work_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "work_roled_composer" */
export type Work_Roled_Composer_Min_Order_By = {
  id?: Maybe<Order_By>;
  roled_composer_id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "work_roled_composer" */
export type Work_Roled_Composer_Mutation_Response = {
  __typename?: 'work_roled_composer_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Work_Roled_Composer>;
};

/** input type for inserting object relation for remote table "work_roled_composer" */
export type Work_Roled_Composer_Obj_Rel_Insert_Input = {
  data: Work_Roled_Composer_Insert_Input;
  on_conflict?: Maybe<Work_Roled_Composer_On_Conflict>;
};

/** on conflict condition type for table "work_roled_composer" */
export type Work_Roled_Composer_On_Conflict = {
  constraint: Work_Roled_Composer_Constraint;
  update_columns: Array<Work_Roled_Composer_Update_Column>;
  where?: Maybe<Work_Roled_Composer_Bool_Exp>;
};

/** ordering options when selecting data from "work_roled_composer" */
export type Work_Roled_Composer_Order_By = {
  id?: Maybe<Order_By>;
  roled_composer?: Maybe<Roled_Composer_Order_By>;
  roled_composer_id?: Maybe<Order_By>;
  work?: Maybe<Work_Order_By>;
  work_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "work_roled_composer" */
export type Work_Roled_Composer_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "work_roled_composer" */
export enum Work_Roled_Composer_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RoledComposerId = 'roled_composer_id',
  /** column name */
  WorkId = 'work_id'
}

/** input type for updating data in table "work_roled_composer" */
export type Work_Roled_Composer_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  roled_composer_id?: Maybe<Scalars['Int']>;
  work_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Work_Roled_Composer_Stddev_Fields = {
  __typename?: 'work_roled_composer_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  roled_composer_id?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "work_roled_composer" */
export type Work_Roled_Composer_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  roled_composer_id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Work_Roled_Composer_Stddev_Pop_Fields = {
  __typename?: 'work_roled_composer_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  roled_composer_id?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "work_roled_composer" */
export type Work_Roled_Composer_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  roled_composer_id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Work_Roled_Composer_Stddev_Samp_Fields = {
  __typename?: 'work_roled_composer_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  roled_composer_id?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "work_roled_composer" */
export type Work_Roled_Composer_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  roled_composer_id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Work_Roled_Composer_Sum_Fields = {
  __typename?: 'work_roled_composer_sum_fields';
  id?: Maybe<Scalars['Int']>;
  roled_composer_id?: Maybe<Scalars['Int']>;
  work_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "work_roled_composer" */
export type Work_Roled_Composer_Sum_Order_By = {
  id?: Maybe<Order_By>;
  roled_composer_id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** update columns of table "work_roled_composer" */
export enum Work_Roled_Composer_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RoledComposerId = 'roled_composer_id',
  /** column name */
  WorkId = 'work_id'
}

/** aggregate var_pop on columns */
export type Work_Roled_Composer_Var_Pop_Fields = {
  __typename?: 'work_roled_composer_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  roled_composer_id?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "work_roled_composer" */
export type Work_Roled_Composer_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  roled_composer_id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Work_Roled_Composer_Var_Samp_Fields = {
  __typename?: 'work_roled_composer_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  roled_composer_id?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "work_roled_composer" */
export type Work_Roled_Composer_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  roled_composer_id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Work_Roled_Composer_Variance_Fields = {
  __typename?: 'work_roled_composer_variance_fields';
  id?: Maybe<Scalars['Float']>;
  roled_composer_id?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "work_roled_composer" */
export type Work_Roled_Composer_Variance_Order_By = {
  id?: Maybe<Order_By>;
  roled_composer_id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** select columns of table "work" */
export enum Work_Select_Column {
  /** column name */
  Duration = 'duration',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "work" */
export type Work_Set_Input = {
  duration?: Maybe<Scalars['timetz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Work_Stddev_Fields = {
  __typename?: 'work_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "work" */
export type Work_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Work_Stddev_Pop_Fields = {
  __typename?: 'work_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "work" */
export type Work_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Work_Stddev_Samp_Fields = {
  __typename?: 'work_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "work" */
export type Work_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Work_Sum_Fields = {
  __typename?: 'work_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "work" */
export type Work_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "work" */
export enum Work_Update_Column {
  /** column name */
  Duration = 'duration',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type Work_Var_Pop_Fields = {
  __typename?: 'work_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "work" */
export type Work_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Work_Var_Samp_Fields = {
  __typename?: 'work_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "work" */
export type Work_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Work_Variance_Fields = {
  __typename?: 'work_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "work" */
export type Work_Variance_Order_By = {
  id?: Maybe<Order_By>;
};
