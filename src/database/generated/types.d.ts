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

/** columns and relationships of "campaign_progress_stops" */
export type Campaign_Progress_Stops = {
  __typename?: 'campaign_progress_stops';
  /** An object relationship */
  campaign: Campaigns;
  campaign_id: Scalars['Int'];
  id: Scalars['Int'];
  stop: Scalars['numeric'];
};

/** aggregated selection of "campaign_progress_stops" */
export type Campaign_Progress_Stops_Aggregate = {
  __typename?: 'campaign_progress_stops_aggregate';
  aggregate?: Maybe<Campaign_Progress_Stops_Aggregate_Fields>;
  nodes: Array<Campaign_Progress_Stops>;
};

/** aggregate fields of "campaign_progress_stops" */
export type Campaign_Progress_Stops_Aggregate_Fields = {
  __typename?: 'campaign_progress_stops_aggregate_fields';
  avg?: Maybe<Campaign_Progress_Stops_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Campaign_Progress_Stops_Max_Fields>;
  min?: Maybe<Campaign_Progress_Stops_Min_Fields>;
  stddev?: Maybe<Campaign_Progress_Stops_Stddev_Fields>;
  stddev_pop?: Maybe<Campaign_Progress_Stops_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Campaign_Progress_Stops_Stddev_Samp_Fields>;
  sum?: Maybe<Campaign_Progress_Stops_Sum_Fields>;
  var_pop?: Maybe<Campaign_Progress_Stops_Var_Pop_Fields>;
  var_samp?: Maybe<Campaign_Progress_Stops_Var_Samp_Fields>;
  variance?: Maybe<Campaign_Progress_Stops_Variance_Fields>;
};


/** aggregate fields of "campaign_progress_stops" */
export type Campaign_Progress_Stops_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Campaign_Progress_Stops_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "campaign_progress_stops" */
export type Campaign_Progress_Stops_Aggregate_Order_By = {
  avg?: Maybe<Campaign_Progress_Stops_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Campaign_Progress_Stops_Max_Order_By>;
  min?: Maybe<Campaign_Progress_Stops_Min_Order_By>;
  stddev?: Maybe<Campaign_Progress_Stops_Stddev_Order_By>;
  stddev_pop?: Maybe<Campaign_Progress_Stops_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Campaign_Progress_Stops_Stddev_Samp_Order_By>;
  sum?: Maybe<Campaign_Progress_Stops_Sum_Order_By>;
  var_pop?: Maybe<Campaign_Progress_Stops_Var_Pop_Order_By>;
  var_samp?: Maybe<Campaign_Progress_Stops_Var_Samp_Order_By>;
  variance?: Maybe<Campaign_Progress_Stops_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "campaign_progress_stops" */
export type Campaign_Progress_Stops_Arr_Rel_Insert_Input = {
  data: Array<Campaign_Progress_Stops_Insert_Input>;
  on_conflict?: Maybe<Campaign_Progress_Stops_On_Conflict>;
};

/** aggregate avg on columns */
export type Campaign_Progress_Stops_Avg_Fields = {
  __typename?: 'campaign_progress_stops_avg_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  stop?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "campaign_progress_stops" */
export type Campaign_Progress_Stops_Avg_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  stop?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "campaign_progress_stops". All fields are combined with a logical 'AND'. */
export type Campaign_Progress_Stops_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Campaign_Progress_Stops_Bool_Exp>>>;
  _not?: Maybe<Campaign_Progress_Stops_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Campaign_Progress_Stops_Bool_Exp>>>;
  campaign?: Maybe<Campaigns_Bool_Exp>;
  campaign_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  stop?: Maybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "campaign_progress_stops" */
export enum Campaign_Progress_Stops_Constraint {
  /** unique or primary key constraint */
  CampaignProgressStopsCampaignIdStopKey = 'campaign_progress_stops_campaign_id_stop_key',
  /** unique or primary key constraint */
  CampaignProgressStopsPkey = 'campaign_progress_stops_pkey'
}

/** input type for incrementing integer column in table "campaign_progress_stops" */
export type Campaign_Progress_Stops_Inc_Input = {
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  stop?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "campaign_progress_stops" */
export type Campaign_Progress_Stops_Insert_Input = {
  campaign?: Maybe<Campaigns_Obj_Rel_Insert_Input>;
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  stop?: Maybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Campaign_Progress_Stops_Max_Fields = {
  __typename?: 'campaign_progress_stops_max_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  stop?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "campaign_progress_stops" */
export type Campaign_Progress_Stops_Max_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  stop?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Campaign_Progress_Stops_Min_Fields = {
  __typename?: 'campaign_progress_stops_min_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  stop?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "campaign_progress_stops" */
export type Campaign_Progress_Stops_Min_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  stop?: Maybe<Order_By>;
};

/** response of any mutation on the table "campaign_progress_stops" */
export type Campaign_Progress_Stops_Mutation_Response = {
  __typename?: 'campaign_progress_stops_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Campaign_Progress_Stops>;
};

/** input type for inserting object relation for remote table "campaign_progress_stops" */
export type Campaign_Progress_Stops_Obj_Rel_Insert_Input = {
  data: Campaign_Progress_Stops_Insert_Input;
  on_conflict?: Maybe<Campaign_Progress_Stops_On_Conflict>;
};

/** on conflict condition type for table "campaign_progress_stops" */
export type Campaign_Progress_Stops_On_Conflict = {
  constraint: Campaign_Progress_Stops_Constraint;
  update_columns: Array<Campaign_Progress_Stops_Update_Column>;
  where?: Maybe<Campaign_Progress_Stops_Bool_Exp>;
};

/** ordering options when selecting data from "campaign_progress_stops" */
export type Campaign_Progress_Stops_Order_By = {
  campaign?: Maybe<Campaigns_Order_By>;
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  stop?: Maybe<Order_By>;
};

/** primary key columns input for table: "campaign_progress_stops" */
export type Campaign_Progress_Stops_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "campaign_progress_stops" */
export enum Campaign_Progress_Stops_Select_Column {
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  Id = 'id',
  /** column name */
  Stop = 'stop'
}

/** input type for updating data in table "campaign_progress_stops" */
export type Campaign_Progress_Stops_Set_Input = {
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  stop?: Maybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Campaign_Progress_Stops_Stddev_Fields = {
  __typename?: 'campaign_progress_stops_stddev_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  stop?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "campaign_progress_stops" */
export type Campaign_Progress_Stops_Stddev_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  stop?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Campaign_Progress_Stops_Stddev_Pop_Fields = {
  __typename?: 'campaign_progress_stops_stddev_pop_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  stop?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "campaign_progress_stops" */
export type Campaign_Progress_Stops_Stddev_Pop_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  stop?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Campaign_Progress_Stops_Stddev_Samp_Fields = {
  __typename?: 'campaign_progress_stops_stddev_samp_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  stop?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "campaign_progress_stops" */
export type Campaign_Progress_Stops_Stddev_Samp_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  stop?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Campaign_Progress_Stops_Sum_Fields = {
  __typename?: 'campaign_progress_stops_sum_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  stop?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "campaign_progress_stops" */
export type Campaign_Progress_Stops_Sum_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  stop?: Maybe<Order_By>;
};

/** update columns of table "campaign_progress_stops" */
export enum Campaign_Progress_Stops_Update_Column {
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  Id = 'id',
  /** column name */
  Stop = 'stop'
}

/** aggregate var_pop on columns */
export type Campaign_Progress_Stops_Var_Pop_Fields = {
  __typename?: 'campaign_progress_stops_var_pop_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  stop?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "campaign_progress_stops" */
export type Campaign_Progress_Stops_Var_Pop_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  stop?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Campaign_Progress_Stops_Var_Samp_Fields = {
  __typename?: 'campaign_progress_stops_var_samp_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  stop?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "campaign_progress_stops" */
export type Campaign_Progress_Stops_Var_Samp_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  stop?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Campaign_Progress_Stops_Variance_Fields = {
  __typename?: 'campaign_progress_stops_variance_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  stop?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "campaign_progress_stops" */
export type Campaign_Progress_Stops_Variance_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  stop?: Maybe<Order_By>;
};

/** columns and relationships of "campaigns" */
export type Campaigns = {
  __typename?: 'campaigns';
  /** An array relationship */
  campaign_contributors: Array<Campaigns_Contributors>;
  /** An aggregated array relationship */
  campaign_contributors_aggregate: Campaigns_Contributors_Aggregate;
  /** An array relationship */
  campaign_progress_stops: Array<Campaign_Progress_Stops>;
  /** An aggregated array relationship */
  campaign_progress_stops_aggregate: Campaign_Progress_Stops_Aggregate;
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  end_date?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  work?: Maybe<Works>;
  work_id?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "campaigns" */
export type CampaignsCampaign_ContributorsArgs = {
  distinct_on?: Maybe<Array<Campaigns_Contributors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaigns_Contributors_Order_By>>;
  where?: Maybe<Campaigns_Contributors_Bool_Exp>;
};


/** columns and relationships of "campaigns" */
export type CampaignsCampaign_Contributors_AggregateArgs = {
  distinct_on?: Maybe<Array<Campaigns_Contributors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaigns_Contributors_Order_By>>;
  where?: Maybe<Campaigns_Contributors_Bool_Exp>;
};


/** columns and relationships of "campaigns" */
export type CampaignsCampaign_Progress_StopsArgs = {
  distinct_on?: Maybe<Array<Campaign_Progress_Stops_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Progress_Stops_Order_By>>;
  where?: Maybe<Campaign_Progress_Stops_Bool_Exp>;
};


/** columns and relationships of "campaigns" */
export type CampaignsCampaign_Progress_Stops_AggregateArgs = {
  distinct_on?: Maybe<Array<Campaign_Progress_Stops_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Progress_Stops_Order_By>>;
  where?: Maybe<Campaign_Progress_Stops_Bool_Exp>;
};

/** aggregated selection of "campaigns" */
export type Campaigns_Aggregate = {
  __typename?: 'campaigns_aggregate';
  aggregate?: Maybe<Campaigns_Aggregate_Fields>;
  nodes: Array<Campaigns>;
};

/** aggregate fields of "campaigns" */
export type Campaigns_Aggregate_Fields = {
  __typename?: 'campaigns_aggregate_fields';
  avg?: Maybe<Campaigns_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Campaigns_Max_Fields>;
  min?: Maybe<Campaigns_Min_Fields>;
  stddev?: Maybe<Campaigns_Stddev_Fields>;
  stddev_pop?: Maybe<Campaigns_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Campaigns_Stddev_Samp_Fields>;
  sum?: Maybe<Campaigns_Sum_Fields>;
  var_pop?: Maybe<Campaigns_Var_Pop_Fields>;
  var_samp?: Maybe<Campaigns_Var_Samp_Fields>;
  variance?: Maybe<Campaigns_Variance_Fields>;
};


/** aggregate fields of "campaigns" */
export type Campaigns_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Campaigns_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "campaigns" */
export type Campaigns_Aggregate_Order_By = {
  avg?: Maybe<Campaigns_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Campaigns_Max_Order_By>;
  min?: Maybe<Campaigns_Min_Order_By>;
  stddev?: Maybe<Campaigns_Stddev_Order_By>;
  stddev_pop?: Maybe<Campaigns_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Campaigns_Stddev_Samp_Order_By>;
  sum?: Maybe<Campaigns_Sum_Order_By>;
  var_pop?: Maybe<Campaigns_Var_Pop_Order_By>;
  var_samp?: Maybe<Campaigns_Var_Samp_Order_By>;
  variance?: Maybe<Campaigns_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "campaigns" */
export type Campaigns_Arr_Rel_Insert_Input = {
  data: Array<Campaigns_Insert_Input>;
  on_conflict?: Maybe<Campaigns_On_Conflict>;
};

/** aggregate avg on columns */
export type Campaigns_Avg_Fields = {
  __typename?: 'campaigns_avg_fields';
  id?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "campaigns" */
export type Campaigns_Avg_Order_By = {
  id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "campaigns". All fields are combined with a logical 'AND'. */
export type Campaigns_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Campaigns_Bool_Exp>>>;
  _not?: Maybe<Campaigns_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Campaigns_Bool_Exp>>>;
  campaign_contributors?: Maybe<Campaigns_Contributors_Bool_Exp>;
  campaign_progress_stops?: Maybe<Campaign_Progress_Stops_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  end_date?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  work?: Maybe<Works_Bool_Exp>;
  work_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "campaigns" */
export enum Campaigns_Constraint {
  /** unique or primary key constraint */
  CampaignPkey = 'campaign_pkey',
  /** unique or primary key constraint */
  CampaignsWorkIdKey = 'campaigns_work_id_key'
}

/** columns and relationships of "campaigns_contributors" */
export type Campaigns_Contributors = {
  __typename?: 'campaigns_contributors';
  /** An object relationship */
  campaign: Campaigns;
  campaign_id: Scalars['Int'];
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  quantity: Scalars['numeric'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int'];
};

/** aggregated selection of "campaigns_contributors" */
export type Campaigns_Contributors_Aggregate = {
  __typename?: 'campaigns_contributors_aggregate';
  aggregate?: Maybe<Campaigns_Contributors_Aggregate_Fields>;
  nodes: Array<Campaigns_Contributors>;
};

/** aggregate fields of "campaigns_contributors" */
export type Campaigns_Contributors_Aggregate_Fields = {
  __typename?: 'campaigns_contributors_aggregate_fields';
  avg?: Maybe<Campaigns_Contributors_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Campaigns_Contributors_Max_Fields>;
  min?: Maybe<Campaigns_Contributors_Min_Fields>;
  stddev?: Maybe<Campaigns_Contributors_Stddev_Fields>;
  stddev_pop?: Maybe<Campaigns_Contributors_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Campaigns_Contributors_Stddev_Samp_Fields>;
  sum?: Maybe<Campaigns_Contributors_Sum_Fields>;
  var_pop?: Maybe<Campaigns_Contributors_Var_Pop_Fields>;
  var_samp?: Maybe<Campaigns_Contributors_Var_Samp_Fields>;
  variance?: Maybe<Campaigns_Contributors_Variance_Fields>;
};


/** aggregate fields of "campaigns_contributors" */
export type Campaigns_Contributors_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Campaigns_Contributors_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "campaigns_contributors" */
export type Campaigns_Contributors_Aggregate_Order_By = {
  avg?: Maybe<Campaigns_Contributors_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Campaigns_Contributors_Max_Order_By>;
  min?: Maybe<Campaigns_Contributors_Min_Order_By>;
  stddev?: Maybe<Campaigns_Contributors_Stddev_Order_By>;
  stddev_pop?: Maybe<Campaigns_Contributors_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Campaigns_Contributors_Stddev_Samp_Order_By>;
  sum?: Maybe<Campaigns_Contributors_Sum_Order_By>;
  var_pop?: Maybe<Campaigns_Contributors_Var_Pop_Order_By>;
  var_samp?: Maybe<Campaigns_Contributors_Var_Samp_Order_By>;
  variance?: Maybe<Campaigns_Contributors_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "campaigns_contributors" */
export type Campaigns_Contributors_Arr_Rel_Insert_Input = {
  data: Array<Campaigns_Contributors_Insert_Input>;
  on_conflict?: Maybe<Campaigns_Contributors_On_Conflict>;
};

/** aggregate avg on columns */
export type Campaigns_Contributors_Avg_Fields = {
  __typename?: 'campaigns_contributors_avg_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "campaigns_contributors" */
export type Campaigns_Contributors_Avg_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "campaigns_contributors". All fields are combined with a logical 'AND'. */
export type Campaigns_Contributors_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Campaigns_Contributors_Bool_Exp>>>;
  _not?: Maybe<Campaigns_Contributors_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Campaigns_Contributors_Bool_Exp>>>;
  campaign?: Maybe<Campaigns_Bool_Exp>;
  campaign_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  quantity?: Maybe<Numeric_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "campaigns_contributors" */
export enum Campaigns_Contributors_Constraint {
  /** unique or primary key constraint */
  CampaignContributorPkey = 'campaign_contributor_pkey',
  /** unique or primary key constraint */
  CampaignContributorUserIdCampaignIdKey = 'campaign_contributor_user_id_campaign_id_key'
}

/** input type for incrementing integer column in table "campaigns_contributors" */
export type Campaigns_Contributors_Inc_Input = {
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "campaigns_contributors" */
export type Campaigns_Contributors_Insert_Input = {
  campaign?: Maybe<Campaigns_Obj_Rel_Insert_Input>;
  campaign_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Campaigns_Contributors_Max_Fields = {
  __typename?: 'campaigns_contributors_max_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "campaigns_contributors" */
export type Campaigns_Contributors_Max_Order_By = {
  campaign_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Campaigns_Contributors_Min_Fields = {
  __typename?: 'campaigns_contributors_min_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "campaigns_contributors" */
export type Campaigns_Contributors_Min_Order_By = {
  campaign_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "campaigns_contributors" */
export type Campaigns_Contributors_Mutation_Response = {
  __typename?: 'campaigns_contributors_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Campaigns_Contributors>;
};

/** input type for inserting object relation for remote table "campaigns_contributors" */
export type Campaigns_Contributors_Obj_Rel_Insert_Input = {
  data: Campaigns_Contributors_Insert_Input;
  on_conflict?: Maybe<Campaigns_Contributors_On_Conflict>;
};

/** on conflict condition type for table "campaigns_contributors" */
export type Campaigns_Contributors_On_Conflict = {
  constraint: Campaigns_Contributors_Constraint;
  update_columns: Array<Campaigns_Contributors_Update_Column>;
  where?: Maybe<Campaigns_Contributors_Bool_Exp>;
};

/** ordering options when selecting data from "campaigns_contributors" */
export type Campaigns_Contributors_Order_By = {
  campaign?: Maybe<Campaigns_Order_By>;
  campaign_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "campaigns_contributors" */
export type Campaigns_Contributors_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "campaigns_contributors" */
export enum Campaigns_Contributors_Select_Column {
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "campaigns_contributors" */
export type Campaigns_Contributors_Set_Input = {
  campaign_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Campaigns_Contributors_Stddev_Fields = {
  __typename?: 'campaigns_contributors_stddev_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "campaigns_contributors" */
export type Campaigns_Contributors_Stddev_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Campaigns_Contributors_Stddev_Pop_Fields = {
  __typename?: 'campaigns_contributors_stddev_pop_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "campaigns_contributors" */
export type Campaigns_Contributors_Stddev_Pop_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Campaigns_Contributors_Stddev_Samp_Fields = {
  __typename?: 'campaigns_contributors_stddev_samp_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "campaigns_contributors" */
export type Campaigns_Contributors_Stddev_Samp_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Campaigns_Contributors_Sum_Fields = {
  __typename?: 'campaigns_contributors_sum_fields';
  campaign_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "campaigns_contributors" */
export type Campaigns_Contributors_Sum_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "campaigns_contributors" */
export enum Campaigns_Contributors_Update_Column {
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Campaigns_Contributors_Var_Pop_Fields = {
  __typename?: 'campaigns_contributors_var_pop_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "campaigns_contributors" */
export type Campaigns_Contributors_Var_Pop_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Campaigns_Contributors_Var_Samp_Fields = {
  __typename?: 'campaigns_contributors_var_samp_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "campaigns_contributors" */
export type Campaigns_Contributors_Var_Samp_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Campaigns_Contributors_Variance_Fields = {
  __typename?: 'campaigns_contributors_variance_fields';
  campaign_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "campaigns_contributors" */
export type Campaigns_Contributors_Variance_Order_By = {
  campaign_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** input type for incrementing integer column in table "campaigns" */
export type Campaigns_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  work_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "campaigns" */
export type Campaigns_Insert_Input = {
  campaign_contributors?: Maybe<Campaigns_Contributors_Arr_Rel_Insert_Input>;
  campaign_progress_stops?: Maybe<Campaign_Progress_Stops_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  work?: Maybe<Works_Obj_Rel_Insert_Input>;
  work_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Campaigns_Max_Fields = {
  __typename?: 'campaigns_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  work_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "campaigns" */
export type Campaigns_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Campaigns_Min_Fields = {
  __typename?: 'campaigns_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  work_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "campaigns" */
export type Campaigns_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "campaigns" */
export type Campaigns_Mutation_Response = {
  __typename?: 'campaigns_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Campaigns>;
};

/** input type for inserting object relation for remote table "campaigns" */
export type Campaigns_Obj_Rel_Insert_Input = {
  data: Campaigns_Insert_Input;
  on_conflict?: Maybe<Campaigns_On_Conflict>;
};

/** on conflict condition type for table "campaigns" */
export type Campaigns_On_Conflict = {
  constraint: Campaigns_Constraint;
  update_columns: Array<Campaigns_Update_Column>;
  where?: Maybe<Campaigns_Bool_Exp>;
};

/** ordering options when selecting data from "campaigns" */
export type Campaigns_Order_By = {
  campaign_contributors_aggregate?: Maybe<Campaigns_Contributors_Aggregate_Order_By>;
  campaign_progress_stops_aggregate?: Maybe<Campaign_Progress_Stops_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  work?: Maybe<Works_Order_By>;
  work_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "campaigns" */
export type Campaigns_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "campaigns" */
export enum Campaigns_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WorkId = 'work_id'
}

/** input type for updating data in table "campaigns" */
export type Campaigns_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  work_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Campaigns_Stddev_Fields = {
  __typename?: 'campaigns_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "campaigns" */
export type Campaigns_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Campaigns_Stddev_Pop_Fields = {
  __typename?: 'campaigns_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "campaigns" */
export type Campaigns_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Campaigns_Stddev_Samp_Fields = {
  __typename?: 'campaigns_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "campaigns" */
export type Campaigns_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Campaigns_Sum_Fields = {
  __typename?: 'campaigns_sum_fields';
  id?: Maybe<Scalars['Int']>;
  work_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "campaigns" */
export type Campaigns_Sum_Order_By = {
  id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** update columns of table "campaigns" */
export enum Campaigns_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  EndDate = 'end_date',
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
export type Campaigns_Var_Pop_Fields = {
  __typename?: 'campaigns_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "campaigns" */
export type Campaigns_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Campaigns_Var_Samp_Fields = {
  __typename?: 'campaigns_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "campaigns" */
export type Campaigns_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Campaigns_Variance_Fields = {
  __typename?: 'campaigns_variance_fields';
  id?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "campaigns" */
export type Campaigns_Variance_Order_By = {
  id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** columns and relationships of "composers" */
export type Composers = {
  __typename?: 'composers';
  birthyear?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  roled_composers: Array<Roled_Composers>;
  /** An aggregated array relationship */
  roled_composers_aggregate: Roled_Composers_Aggregate;
  surname: Scalars['String'];
};


/** columns and relationships of "composers" */
export type ComposersRoled_ComposersArgs = {
  distinct_on?: Maybe<Array<Roled_Composers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roled_Composers_Order_By>>;
  where?: Maybe<Roled_Composers_Bool_Exp>;
};


/** columns and relationships of "composers" */
export type ComposersRoled_Composers_AggregateArgs = {
  distinct_on?: Maybe<Array<Roled_Composers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roled_Composers_Order_By>>;
  where?: Maybe<Roled_Composers_Bool_Exp>;
};

/** aggregated selection of "composers" */
export type Composers_Aggregate = {
  __typename?: 'composers_aggregate';
  aggregate?: Maybe<Composers_Aggregate_Fields>;
  nodes: Array<Composers>;
};

/** aggregate fields of "composers" */
export type Composers_Aggregate_Fields = {
  __typename?: 'composers_aggregate_fields';
  avg?: Maybe<Composers_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Composers_Max_Fields>;
  min?: Maybe<Composers_Min_Fields>;
  stddev?: Maybe<Composers_Stddev_Fields>;
  stddev_pop?: Maybe<Composers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Composers_Stddev_Samp_Fields>;
  sum?: Maybe<Composers_Sum_Fields>;
  var_pop?: Maybe<Composers_Var_Pop_Fields>;
  var_samp?: Maybe<Composers_Var_Samp_Fields>;
  variance?: Maybe<Composers_Variance_Fields>;
};


/** aggregate fields of "composers" */
export type Composers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Composers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "composers" */
export type Composers_Aggregate_Order_By = {
  avg?: Maybe<Composers_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Composers_Max_Order_By>;
  min?: Maybe<Composers_Min_Order_By>;
  stddev?: Maybe<Composers_Stddev_Order_By>;
  stddev_pop?: Maybe<Composers_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Composers_Stddev_Samp_Order_By>;
  sum?: Maybe<Composers_Sum_Order_By>;
  var_pop?: Maybe<Composers_Var_Pop_Order_By>;
  var_samp?: Maybe<Composers_Var_Samp_Order_By>;
  variance?: Maybe<Composers_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "composers" */
export type Composers_Arr_Rel_Insert_Input = {
  data: Array<Composers_Insert_Input>;
  on_conflict?: Maybe<Composers_On_Conflict>;
};

/** aggregate avg on columns */
export type Composers_Avg_Fields = {
  __typename?: 'composers_avg_fields';
  birthyear?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "composers" */
export type Composers_Avg_Order_By = {
  birthyear?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "composers". All fields are combined with a logical 'AND'. */
export type Composers_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Composers_Bool_Exp>>>;
  _not?: Maybe<Composers_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Composers_Bool_Exp>>>;
  birthyear?: Maybe<Int_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  roled_composers?: Maybe<Roled_Composers_Bool_Exp>;
  surname?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "composers" */
export enum Composers_Constraint {
  /** unique or primary key constraint */
  ComposerPkey = 'composer_pkey'
}

/** input type for incrementing integer column in table "composers" */
export type Composers_Inc_Input = {
  birthyear?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "composers" */
export type Composers_Insert_Input = {
  birthyear?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  roled_composers?: Maybe<Roled_Composers_Arr_Rel_Insert_Input>;
  surname?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Composers_Max_Fields = {
  __typename?: 'composers_max_fields';
  birthyear?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "composers" */
export type Composers_Max_Order_By = {
  birthyear?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  surname?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Composers_Min_Fields = {
  __typename?: 'composers_min_fields';
  birthyear?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "composers" */
export type Composers_Min_Order_By = {
  birthyear?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  surname?: Maybe<Order_By>;
};

/** response of any mutation on the table "composers" */
export type Composers_Mutation_Response = {
  __typename?: 'composers_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Composers>;
};

/** input type for inserting object relation for remote table "composers" */
export type Composers_Obj_Rel_Insert_Input = {
  data: Composers_Insert_Input;
  on_conflict?: Maybe<Composers_On_Conflict>;
};

/** on conflict condition type for table "composers" */
export type Composers_On_Conflict = {
  constraint: Composers_Constraint;
  update_columns: Array<Composers_Update_Column>;
  where?: Maybe<Composers_Bool_Exp>;
};

/** ordering options when selecting data from "composers" */
export type Composers_Order_By = {
  birthyear?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  roled_composers_aggregate?: Maybe<Roled_Composers_Aggregate_Order_By>;
  surname?: Maybe<Order_By>;
};

/** primary key columns input for table: "composers" */
export type Composers_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** columns and relationships of "composers_roles" */
export type Composers_Roles = {
  __typename?: 'composers_roles';
  id: Scalars['Int'];
  role: Scalars['String'];
  /** An array relationship */
  roled_composers: Array<Roled_Composers>;
  /** An aggregated array relationship */
  roled_composers_aggregate: Roled_Composers_Aggregate;
};


/** columns and relationships of "composers_roles" */
export type Composers_RolesRoled_ComposersArgs = {
  distinct_on?: Maybe<Array<Roled_Composers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roled_Composers_Order_By>>;
  where?: Maybe<Roled_Composers_Bool_Exp>;
};


/** columns and relationships of "composers_roles" */
export type Composers_RolesRoled_Composers_AggregateArgs = {
  distinct_on?: Maybe<Array<Roled_Composers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roled_Composers_Order_By>>;
  where?: Maybe<Roled_Composers_Bool_Exp>;
};

/** aggregated selection of "composers_roles" */
export type Composers_Roles_Aggregate = {
  __typename?: 'composers_roles_aggregate';
  aggregate?: Maybe<Composers_Roles_Aggregate_Fields>;
  nodes: Array<Composers_Roles>;
};

/** aggregate fields of "composers_roles" */
export type Composers_Roles_Aggregate_Fields = {
  __typename?: 'composers_roles_aggregate_fields';
  avg?: Maybe<Composers_Roles_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Composers_Roles_Max_Fields>;
  min?: Maybe<Composers_Roles_Min_Fields>;
  stddev?: Maybe<Composers_Roles_Stddev_Fields>;
  stddev_pop?: Maybe<Composers_Roles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Composers_Roles_Stddev_Samp_Fields>;
  sum?: Maybe<Composers_Roles_Sum_Fields>;
  var_pop?: Maybe<Composers_Roles_Var_Pop_Fields>;
  var_samp?: Maybe<Composers_Roles_Var_Samp_Fields>;
  variance?: Maybe<Composers_Roles_Variance_Fields>;
};


/** aggregate fields of "composers_roles" */
export type Composers_Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Composers_Roles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "composers_roles" */
export type Composers_Roles_Aggregate_Order_By = {
  avg?: Maybe<Composers_Roles_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Composers_Roles_Max_Order_By>;
  min?: Maybe<Composers_Roles_Min_Order_By>;
  stddev?: Maybe<Composers_Roles_Stddev_Order_By>;
  stddev_pop?: Maybe<Composers_Roles_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Composers_Roles_Stddev_Samp_Order_By>;
  sum?: Maybe<Composers_Roles_Sum_Order_By>;
  var_pop?: Maybe<Composers_Roles_Var_Pop_Order_By>;
  var_samp?: Maybe<Composers_Roles_Var_Samp_Order_By>;
  variance?: Maybe<Composers_Roles_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "composers_roles" */
export type Composers_Roles_Arr_Rel_Insert_Input = {
  data: Array<Composers_Roles_Insert_Input>;
  on_conflict?: Maybe<Composers_Roles_On_Conflict>;
};

/** aggregate avg on columns */
export type Composers_Roles_Avg_Fields = {
  __typename?: 'composers_roles_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "composers_roles" */
export type Composers_Roles_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "composers_roles". All fields are combined with a logical 'AND'. */
export type Composers_Roles_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Composers_Roles_Bool_Exp>>>;
  _not?: Maybe<Composers_Roles_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Composers_Roles_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  role?: Maybe<String_Comparison_Exp>;
  roled_composers?: Maybe<Roled_Composers_Bool_Exp>;
};

/** unique or primary key constraints on table "composers_roles" */
export enum Composers_Roles_Constraint {
  /** unique or primary key constraint */
  ComposerRolesPkey = 'composer_roles_pkey'
}

/** input type for incrementing integer column in table "composers_roles" */
export type Composers_Roles_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "composers_roles" */
export type Composers_Roles_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
  roled_composers?: Maybe<Roled_Composers_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Composers_Roles_Max_Fields = {
  __typename?: 'composers_roles_max_fields';
  id?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "composers_roles" */
export type Composers_Roles_Max_Order_By = {
  id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Composers_Roles_Min_Fields = {
  __typename?: 'composers_roles_min_fields';
  id?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "composers_roles" */
export type Composers_Roles_Min_Order_By = {
  id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
};

/** response of any mutation on the table "composers_roles" */
export type Composers_Roles_Mutation_Response = {
  __typename?: 'composers_roles_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Composers_Roles>;
};

/** input type for inserting object relation for remote table "composers_roles" */
export type Composers_Roles_Obj_Rel_Insert_Input = {
  data: Composers_Roles_Insert_Input;
  on_conflict?: Maybe<Composers_Roles_On_Conflict>;
};

/** on conflict condition type for table "composers_roles" */
export type Composers_Roles_On_Conflict = {
  constraint: Composers_Roles_Constraint;
  update_columns: Array<Composers_Roles_Update_Column>;
  where?: Maybe<Composers_Roles_Bool_Exp>;
};

/** ordering options when selecting data from "composers_roles" */
export type Composers_Roles_Order_By = {
  id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  roled_composers_aggregate?: Maybe<Roled_Composers_Aggregate_Order_By>;
};

/** primary key columns input for table: "composers_roles" */
export type Composers_Roles_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "composers_roles" */
export enum Composers_Roles_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "composers_roles" */
export type Composers_Roles_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Composers_Roles_Stddev_Fields = {
  __typename?: 'composers_roles_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "composers_roles" */
export type Composers_Roles_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Composers_Roles_Stddev_Pop_Fields = {
  __typename?: 'composers_roles_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "composers_roles" */
export type Composers_Roles_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Composers_Roles_Stddev_Samp_Fields = {
  __typename?: 'composers_roles_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "composers_roles" */
export type Composers_Roles_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Composers_Roles_Sum_Fields = {
  __typename?: 'composers_roles_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "composers_roles" */
export type Composers_Roles_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "composers_roles" */
export enum Composers_Roles_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role'
}

/** aggregate var_pop on columns */
export type Composers_Roles_Var_Pop_Fields = {
  __typename?: 'composers_roles_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "composers_roles" */
export type Composers_Roles_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Composers_Roles_Var_Samp_Fields = {
  __typename?: 'composers_roles_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "composers_roles" */
export type Composers_Roles_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Composers_Roles_Variance_Fields = {
  __typename?: 'composers_roles_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "composers_roles" */
export type Composers_Roles_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** select columns of table "composers" */
export enum Composers_Select_Column {
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

/** input type for updating data in table "composers" */
export type Composers_Set_Input = {
  birthyear?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Composers_Stddev_Fields = {
  __typename?: 'composers_stddev_fields';
  birthyear?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "composers" */
export type Composers_Stddev_Order_By = {
  birthyear?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Composers_Stddev_Pop_Fields = {
  __typename?: 'composers_stddev_pop_fields';
  birthyear?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "composers" */
export type Composers_Stddev_Pop_Order_By = {
  birthyear?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Composers_Stddev_Samp_Fields = {
  __typename?: 'composers_stddev_samp_fields';
  birthyear?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "composers" */
export type Composers_Stddev_Samp_Order_By = {
  birthyear?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Composers_Sum_Fields = {
  __typename?: 'composers_sum_fields';
  birthyear?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "composers" */
export type Composers_Sum_Order_By = {
  birthyear?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "composers" */
export enum Composers_Update_Column {
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
export type Composers_Var_Pop_Fields = {
  __typename?: 'composers_var_pop_fields';
  birthyear?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "composers" */
export type Composers_Var_Pop_Order_By = {
  birthyear?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Composers_Var_Samp_Fields = {
  __typename?: 'composers_var_samp_fields';
  birthyear?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "composers" */
export type Composers_Var_Samp_Order_By = {
  birthyear?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Composers_Variance_Fields = {
  __typename?: 'composers_variance_fields';
  birthyear?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "composers" */
export type Composers_Variance_Order_By = {
  birthyear?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** columns and relationships of "instruments" */
export type Instruments = {
  __typename?: 'instruments';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "instruments" */
export type Instruments_Aggregate = {
  __typename?: 'instruments_aggregate';
  aggregate?: Maybe<Instruments_Aggregate_Fields>;
  nodes: Array<Instruments>;
};

/** aggregate fields of "instruments" */
export type Instruments_Aggregate_Fields = {
  __typename?: 'instruments_aggregate_fields';
  avg?: Maybe<Instruments_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Instruments_Max_Fields>;
  min?: Maybe<Instruments_Min_Fields>;
  stddev?: Maybe<Instruments_Stddev_Fields>;
  stddev_pop?: Maybe<Instruments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Instruments_Stddev_Samp_Fields>;
  sum?: Maybe<Instruments_Sum_Fields>;
  var_pop?: Maybe<Instruments_Var_Pop_Fields>;
  var_samp?: Maybe<Instruments_Var_Samp_Fields>;
  variance?: Maybe<Instruments_Variance_Fields>;
};


/** aggregate fields of "instruments" */
export type Instruments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Instruments_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "instruments" */
export type Instruments_Aggregate_Order_By = {
  avg?: Maybe<Instruments_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Instruments_Max_Order_By>;
  min?: Maybe<Instruments_Min_Order_By>;
  stddev?: Maybe<Instruments_Stddev_Order_By>;
  stddev_pop?: Maybe<Instruments_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Instruments_Stddev_Samp_Order_By>;
  sum?: Maybe<Instruments_Sum_Order_By>;
  var_pop?: Maybe<Instruments_Var_Pop_Order_By>;
  var_samp?: Maybe<Instruments_Var_Samp_Order_By>;
  variance?: Maybe<Instruments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "instruments" */
export type Instruments_Arr_Rel_Insert_Input = {
  data: Array<Instruments_Insert_Input>;
  on_conflict?: Maybe<Instruments_On_Conflict>;
};

/** aggregate avg on columns */
export type Instruments_Avg_Fields = {
  __typename?: 'instruments_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "instruments" */
export type Instruments_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "instruments". All fields are combined with a logical 'AND'. */
export type Instruments_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Instruments_Bool_Exp>>>;
  _not?: Maybe<Instruments_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Instruments_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "instruments" */
export enum Instruments_Constraint {
  /** unique or primary key constraint */
  InstrumentPkey = 'instrument_pkey'
}

/** input type for incrementing integer column in table "instruments" */
export type Instruments_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "instruments" */
export type Instruments_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Instruments_Max_Fields = {
  __typename?: 'instruments_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "instruments" */
export type Instruments_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Instruments_Min_Fields = {
  __typename?: 'instruments_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "instruments" */
export type Instruments_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "instruments" */
export type Instruments_Mutation_Response = {
  __typename?: 'instruments_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Instruments>;
};

/** input type for inserting object relation for remote table "instruments" */
export type Instruments_Obj_Rel_Insert_Input = {
  data: Instruments_Insert_Input;
  on_conflict?: Maybe<Instruments_On_Conflict>;
};

/** on conflict condition type for table "instruments" */
export type Instruments_On_Conflict = {
  constraint: Instruments_Constraint;
  update_columns: Array<Instruments_Update_Column>;
  where?: Maybe<Instruments_Bool_Exp>;
};

/** ordering options when selecting data from "instruments" */
export type Instruments_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "instruments" */
export type Instruments_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "instruments" */
export enum Instruments_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "instruments" */
export type Instruments_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Instruments_Stddev_Fields = {
  __typename?: 'instruments_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "instruments" */
export type Instruments_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Instruments_Stddev_Pop_Fields = {
  __typename?: 'instruments_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "instruments" */
export type Instruments_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Instruments_Stddev_Samp_Fields = {
  __typename?: 'instruments_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "instruments" */
export type Instruments_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Instruments_Sum_Fields = {
  __typename?: 'instruments_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "instruments" */
export type Instruments_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "instruments" */
export enum Instruments_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Instruments_Var_Pop_Fields = {
  __typename?: 'instruments_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "instruments" */
export type Instruments_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Instruments_Var_Samp_Fields = {
  __typename?: 'instruments_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "instruments" */
export type Instruments_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Instruments_Variance_Fields = {
  __typename?: 'instruments_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "instruments" */
export type Instruments_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "campaign_progress_stops" */
  delete_campaign_progress_stops?: Maybe<Campaign_Progress_Stops_Mutation_Response>;
  /** delete single row from the table: "campaign_progress_stops" */
  delete_campaign_progress_stops_by_pk?: Maybe<Campaign_Progress_Stops>;
  /** delete data from the table: "campaigns" */
  delete_campaigns?: Maybe<Campaigns_Mutation_Response>;
  /** delete single row from the table: "campaigns" */
  delete_campaigns_by_pk?: Maybe<Campaigns>;
  /** delete data from the table: "campaigns_contributors" */
  delete_campaigns_contributors?: Maybe<Campaigns_Contributors_Mutation_Response>;
  /** delete single row from the table: "campaigns_contributors" */
  delete_campaigns_contributors_by_pk?: Maybe<Campaigns_Contributors>;
  /** delete data from the table: "composers" */
  delete_composers?: Maybe<Composers_Mutation_Response>;
  /** delete single row from the table: "composers" */
  delete_composers_by_pk?: Maybe<Composers>;
  /** delete data from the table: "composers_roles" */
  delete_composers_roles?: Maybe<Composers_Roles_Mutation_Response>;
  /** delete single row from the table: "composers_roles" */
  delete_composers_roles_by_pk?: Maybe<Composers_Roles>;
  /** delete data from the table: "instruments" */
  delete_instruments?: Maybe<Instruments_Mutation_Response>;
  /** delete single row from the table: "instruments" */
  delete_instruments_by_pk?: Maybe<Instruments>;
  /** delete data from the table: "roled_composers" */
  delete_roled_composers?: Maybe<Roled_Composers_Mutation_Response>;
  /** delete single row from the table: "roled_composers" */
  delete_roled_composers_by_pk?: Maybe<Roled_Composers>;
  /** delete data from the table: "transpositions" */
  delete_transpositions?: Maybe<Transpositions_Mutation_Response>;
  /** delete single row from the table: "transpositions" */
  delete_transpositions_by_pk?: Maybe<Transpositions>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "works" */
  delete_works?: Maybe<Works_Mutation_Response>;
  /** delete single row from the table: "works" */
  delete_works_by_pk?: Maybe<Works>;
  /** delete data from the table: "works_roled_composers" */
  delete_works_roled_composers?: Maybe<Works_Roled_Composers_Mutation_Response>;
  /** delete single row from the table: "works_roled_composers" */
  delete_works_roled_composers_by_pk?: Maybe<Works_Roled_Composers>;
  /** insert data into the table: "campaign_progress_stops" */
  insert_campaign_progress_stops?: Maybe<Campaign_Progress_Stops_Mutation_Response>;
  /** insert a single row into the table: "campaign_progress_stops" */
  insert_campaign_progress_stops_one?: Maybe<Campaign_Progress_Stops>;
  /** insert data into the table: "campaigns" */
  insert_campaigns?: Maybe<Campaigns_Mutation_Response>;
  /** insert data into the table: "campaigns_contributors" */
  insert_campaigns_contributors?: Maybe<Campaigns_Contributors_Mutation_Response>;
  /** insert a single row into the table: "campaigns_contributors" */
  insert_campaigns_contributors_one?: Maybe<Campaigns_Contributors>;
  /** insert a single row into the table: "campaigns" */
  insert_campaigns_one?: Maybe<Campaigns>;
  /** insert data into the table: "composers" */
  insert_composers?: Maybe<Composers_Mutation_Response>;
  /** insert a single row into the table: "composers" */
  insert_composers_one?: Maybe<Composers>;
  /** insert data into the table: "composers_roles" */
  insert_composers_roles?: Maybe<Composers_Roles_Mutation_Response>;
  /** insert a single row into the table: "composers_roles" */
  insert_composers_roles_one?: Maybe<Composers_Roles>;
  /** insert data into the table: "instruments" */
  insert_instruments?: Maybe<Instruments_Mutation_Response>;
  /** insert a single row into the table: "instruments" */
  insert_instruments_one?: Maybe<Instruments>;
  /** insert data into the table: "roled_composers" */
  insert_roled_composers?: Maybe<Roled_Composers_Mutation_Response>;
  /** insert a single row into the table: "roled_composers" */
  insert_roled_composers_one?: Maybe<Roled_Composers>;
  /** insert data into the table: "transpositions" */
  insert_transpositions?: Maybe<Transpositions_Mutation_Response>;
  /** insert a single row into the table: "transpositions" */
  insert_transpositions_one?: Maybe<Transpositions>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "works" */
  insert_works?: Maybe<Works_Mutation_Response>;
  /** insert a single row into the table: "works" */
  insert_works_one?: Maybe<Works>;
  /** insert data into the table: "works_roled_composers" */
  insert_works_roled_composers?: Maybe<Works_Roled_Composers_Mutation_Response>;
  /** insert a single row into the table: "works_roled_composers" */
  insert_works_roled_composers_one?: Maybe<Works_Roled_Composers>;
  /** update data of the table: "campaign_progress_stops" */
  update_campaign_progress_stops?: Maybe<Campaign_Progress_Stops_Mutation_Response>;
  /** update single row of the table: "campaign_progress_stops" */
  update_campaign_progress_stops_by_pk?: Maybe<Campaign_Progress_Stops>;
  /** update data of the table: "campaigns" */
  update_campaigns?: Maybe<Campaigns_Mutation_Response>;
  /** update single row of the table: "campaigns" */
  update_campaigns_by_pk?: Maybe<Campaigns>;
  /** update data of the table: "campaigns_contributors" */
  update_campaigns_contributors?: Maybe<Campaigns_Contributors_Mutation_Response>;
  /** update single row of the table: "campaigns_contributors" */
  update_campaigns_contributors_by_pk?: Maybe<Campaigns_Contributors>;
  /** update data of the table: "composers" */
  update_composers?: Maybe<Composers_Mutation_Response>;
  /** update single row of the table: "composers" */
  update_composers_by_pk?: Maybe<Composers>;
  /** update data of the table: "composers_roles" */
  update_composers_roles?: Maybe<Composers_Roles_Mutation_Response>;
  /** update single row of the table: "composers_roles" */
  update_composers_roles_by_pk?: Maybe<Composers_Roles>;
  /** update data of the table: "instruments" */
  update_instruments?: Maybe<Instruments_Mutation_Response>;
  /** update single row of the table: "instruments" */
  update_instruments_by_pk?: Maybe<Instruments>;
  /** update data of the table: "roled_composers" */
  update_roled_composers?: Maybe<Roled_Composers_Mutation_Response>;
  /** update single row of the table: "roled_composers" */
  update_roled_composers_by_pk?: Maybe<Roled_Composers>;
  /** update data of the table: "transpositions" */
  update_transpositions?: Maybe<Transpositions_Mutation_Response>;
  /** update single row of the table: "transpositions" */
  update_transpositions_by_pk?: Maybe<Transpositions>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "works" */
  update_works?: Maybe<Works_Mutation_Response>;
  /** update single row of the table: "works" */
  update_works_by_pk?: Maybe<Works>;
  /** update data of the table: "works_roled_composers" */
  update_works_roled_composers?: Maybe<Works_Roled_Composers_Mutation_Response>;
  /** update single row of the table: "works_roled_composers" */
  update_works_roled_composers_by_pk?: Maybe<Works_Roled_Composers>;
};


/** mutation root */
export type Mutation_RootDelete_Campaign_Progress_StopsArgs = {
  where: Campaign_Progress_Stops_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Campaign_Progress_Stops_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_CampaignsArgs = {
  where: Campaigns_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Campaigns_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Campaigns_ContributorsArgs = {
  where: Campaigns_Contributors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Campaigns_Contributors_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ComposersArgs = {
  where: Composers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Composers_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Composers_RolesArgs = {
  where: Composers_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Composers_Roles_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_InstrumentsArgs = {
  where: Instruments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Instruments_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Roled_ComposersArgs = {
  where: Roled_Composers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Roled_Composers_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_TranspositionsArgs = {
  where: Transpositions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transpositions_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_WorksArgs = {
  where: Works_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Works_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Works_Roled_ComposersArgs = {
  where: Works_Roled_Composers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Works_Roled_Composers_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_Campaign_Progress_StopsArgs = {
  objects: Array<Campaign_Progress_Stops_Insert_Input>;
  on_conflict?: Maybe<Campaign_Progress_Stops_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Campaign_Progress_Stops_OneArgs = {
  object: Campaign_Progress_Stops_Insert_Input;
  on_conflict?: Maybe<Campaign_Progress_Stops_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CampaignsArgs = {
  objects: Array<Campaigns_Insert_Input>;
  on_conflict?: Maybe<Campaigns_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Campaigns_ContributorsArgs = {
  objects: Array<Campaigns_Contributors_Insert_Input>;
  on_conflict?: Maybe<Campaigns_Contributors_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Campaigns_Contributors_OneArgs = {
  object: Campaigns_Contributors_Insert_Input;
  on_conflict?: Maybe<Campaigns_Contributors_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Campaigns_OneArgs = {
  object: Campaigns_Insert_Input;
  on_conflict?: Maybe<Campaigns_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ComposersArgs = {
  objects: Array<Composers_Insert_Input>;
  on_conflict?: Maybe<Composers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Composers_OneArgs = {
  object: Composers_Insert_Input;
  on_conflict?: Maybe<Composers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Composers_RolesArgs = {
  objects: Array<Composers_Roles_Insert_Input>;
  on_conflict?: Maybe<Composers_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Composers_Roles_OneArgs = {
  object: Composers_Roles_Insert_Input;
  on_conflict?: Maybe<Composers_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_InstrumentsArgs = {
  objects: Array<Instruments_Insert_Input>;
  on_conflict?: Maybe<Instruments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Instruments_OneArgs = {
  object: Instruments_Insert_Input;
  on_conflict?: Maybe<Instruments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Roled_ComposersArgs = {
  objects: Array<Roled_Composers_Insert_Input>;
  on_conflict?: Maybe<Roled_Composers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Roled_Composers_OneArgs = {
  object: Roled_Composers_Insert_Input;
  on_conflict?: Maybe<Roled_Composers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TranspositionsArgs = {
  objects: Array<Transpositions_Insert_Input>;
  on_conflict?: Maybe<Transpositions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transpositions_OneArgs = {
  object: Transpositions_Insert_Input;
  on_conflict?: Maybe<Transpositions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WorksArgs = {
  objects: Array<Works_Insert_Input>;
  on_conflict?: Maybe<Works_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Works_OneArgs = {
  object: Works_Insert_Input;
  on_conflict?: Maybe<Works_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Works_Roled_ComposersArgs = {
  objects: Array<Works_Roled_Composers_Insert_Input>;
  on_conflict?: Maybe<Works_Roled_Composers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Works_Roled_Composers_OneArgs = {
  object: Works_Roled_Composers_Insert_Input;
  on_conflict?: Maybe<Works_Roled_Composers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Campaign_Progress_StopsArgs = {
  _inc?: Maybe<Campaign_Progress_Stops_Inc_Input>;
  _set?: Maybe<Campaign_Progress_Stops_Set_Input>;
  where: Campaign_Progress_Stops_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Campaign_Progress_Stops_By_PkArgs = {
  _inc?: Maybe<Campaign_Progress_Stops_Inc_Input>;
  _set?: Maybe<Campaign_Progress_Stops_Set_Input>;
  pk_columns: Campaign_Progress_Stops_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CampaignsArgs = {
  _inc?: Maybe<Campaigns_Inc_Input>;
  _set?: Maybe<Campaigns_Set_Input>;
  where: Campaigns_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Campaigns_By_PkArgs = {
  _inc?: Maybe<Campaigns_Inc_Input>;
  _set?: Maybe<Campaigns_Set_Input>;
  pk_columns: Campaigns_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Campaigns_ContributorsArgs = {
  _inc?: Maybe<Campaigns_Contributors_Inc_Input>;
  _set?: Maybe<Campaigns_Contributors_Set_Input>;
  where: Campaigns_Contributors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Campaigns_Contributors_By_PkArgs = {
  _inc?: Maybe<Campaigns_Contributors_Inc_Input>;
  _set?: Maybe<Campaigns_Contributors_Set_Input>;
  pk_columns: Campaigns_Contributors_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ComposersArgs = {
  _inc?: Maybe<Composers_Inc_Input>;
  _set?: Maybe<Composers_Set_Input>;
  where: Composers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Composers_By_PkArgs = {
  _inc?: Maybe<Composers_Inc_Input>;
  _set?: Maybe<Composers_Set_Input>;
  pk_columns: Composers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Composers_RolesArgs = {
  _inc?: Maybe<Composers_Roles_Inc_Input>;
  _set?: Maybe<Composers_Roles_Set_Input>;
  where: Composers_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Composers_Roles_By_PkArgs = {
  _inc?: Maybe<Composers_Roles_Inc_Input>;
  _set?: Maybe<Composers_Roles_Set_Input>;
  pk_columns: Composers_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_InstrumentsArgs = {
  _inc?: Maybe<Instruments_Inc_Input>;
  _set?: Maybe<Instruments_Set_Input>;
  where: Instruments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Instruments_By_PkArgs = {
  _inc?: Maybe<Instruments_Inc_Input>;
  _set?: Maybe<Instruments_Set_Input>;
  pk_columns: Instruments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Roled_ComposersArgs = {
  _inc?: Maybe<Roled_Composers_Inc_Input>;
  _set?: Maybe<Roled_Composers_Set_Input>;
  where: Roled_Composers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Roled_Composers_By_PkArgs = {
  _inc?: Maybe<Roled_Composers_Inc_Input>;
  _set?: Maybe<Roled_Composers_Set_Input>;
  pk_columns: Roled_Composers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TranspositionsArgs = {
  _inc?: Maybe<Transpositions_Inc_Input>;
  _set?: Maybe<Transpositions_Set_Input>;
  where: Transpositions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transpositions_By_PkArgs = {
  _inc?: Maybe<Transpositions_Inc_Input>;
  _set?: Maybe<Transpositions_Set_Input>;
  pk_columns: Transpositions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_WorksArgs = {
  _inc?: Maybe<Works_Inc_Input>;
  _set?: Maybe<Works_Set_Input>;
  where: Works_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Works_By_PkArgs = {
  _inc?: Maybe<Works_Inc_Input>;
  _set?: Maybe<Works_Set_Input>;
  pk_columns: Works_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Works_Roled_ComposersArgs = {
  _inc?: Maybe<Works_Roled_Composers_Inc_Input>;
  _set?: Maybe<Works_Roled_Composers_Set_Input>;
  where: Works_Roled_Composers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Works_Roled_Composers_By_PkArgs = {
  _inc?: Maybe<Works_Roled_Composers_Inc_Input>;
  _set?: Maybe<Works_Roled_Composers_Set_Input>;
  pk_columns: Works_Roled_Composers_Pk_Columns_Input;
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
  /** fetch data from the table: "campaign_progress_stops" */
  campaign_progress_stops: Array<Campaign_Progress_Stops>;
  /** fetch aggregated fields from the table: "campaign_progress_stops" */
  campaign_progress_stops_aggregate: Campaign_Progress_Stops_Aggregate;
  /** fetch data from the table: "campaign_progress_stops" using primary key columns */
  campaign_progress_stops_by_pk?: Maybe<Campaign_Progress_Stops>;
  /** fetch data from the table: "campaigns" */
  campaigns: Array<Campaigns>;
  /** fetch aggregated fields from the table: "campaigns" */
  campaigns_aggregate: Campaigns_Aggregate;
  /** fetch data from the table: "campaigns" using primary key columns */
  campaigns_by_pk?: Maybe<Campaigns>;
  /** fetch data from the table: "campaigns_contributors" */
  campaigns_contributors: Array<Campaigns_Contributors>;
  /** fetch aggregated fields from the table: "campaigns_contributors" */
  campaigns_contributors_aggregate: Campaigns_Contributors_Aggregate;
  /** fetch data from the table: "campaigns_contributors" using primary key columns */
  campaigns_contributors_by_pk?: Maybe<Campaigns_Contributors>;
  /** fetch data from the table: "composers" */
  composers: Array<Composers>;
  /** fetch aggregated fields from the table: "composers" */
  composers_aggregate: Composers_Aggregate;
  /** fetch data from the table: "composers" using primary key columns */
  composers_by_pk?: Maybe<Composers>;
  /** fetch data from the table: "composers_roles" */
  composers_roles: Array<Composers_Roles>;
  /** fetch aggregated fields from the table: "composers_roles" */
  composers_roles_aggregate: Composers_Roles_Aggregate;
  /** fetch data from the table: "composers_roles" using primary key columns */
  composers_roles_by_pk?: Maybe<Composers_Roles>;
  /** fetch data from the table: "instruments" */
  instruments: Array<Instruments>;
  /** fetch aggregated fields from the table: "instruments" */
  instruments_aggregate: Instruments_Aggregate;
  /** fetch data from the table: "instruments" using primary key columns */
  instruments_by_pk?: Maybe<Instruments>;
  /** fetch data from the table: "roled_composers" */
  roled_composers: Array<Roled_Composers>;
  /** fetch aggregated fields from the table: "roled_composers" */
  roled_composers_aggregate: Roled_Composers_Aggregate;
  /** fetch data from the table: "roled_composers" using primary key columns */
  roled_composers_by_pk?: Maybe<Roled_Composers>;
  /** fetch data from the table: "transpositions" */
  transpositions: Array<Transpositions>;
  /** fetch aggregated fields from the table: "transpositions" */
  transpositions_aggregate: Transpositions_Aggregate;
  /** fetch data from the table: "transpositions" using primary key columns */
  transpositions_by_pk?: Maybe<Transpositions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "works" */
  works: Array<Works>;
  /** fetch aggregated fields from the table: "works" */
  works_aggregate: Works_Aggregate;
  /** fetch data from the table: "works" using primary key columns */
  works_by_pk?: Maybe<Works>;
  /** fetch data from the table: "works_roled_composers" */
  works_roled_composers: Array<Works_Roled_Composers>;
  /** fetch aggregated fields from the table: "works_roled_composers" */
  works_roled_composers_aggregate: Works_Roled_Composers_Aggregate;
  /** fetch data from the table: "works_roled_composers" using primary key columns */
  works_roled_composers_by_pk?: Maybe<Works_Roled_Composers>;
};


/** query root */
export type Query_RootCampaign_Progress_StopsArgs = {
  distinct_on?: Maybe<Array<Campaign_Progress_Stops_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Progress_Stops_Order_By>>;
  where?: Maybe<Campaign_Progress_Stops_Bool_Exp>;
};


/** query root */
export type Query_RootCampaign_Progress_Stops_AggregateArgs = {
  distinct_on?: Maybe<Array<Campaign_Progress_Stops_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Progress_Stops_Order_By>>;
  where?: Maybe<Campaign_Progress_Stops_Bool_Exp>;
};


/** query root */
export type Query_RootCampaign_Progress_Stops_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootCampaignsArgs = {
  distinct_on?: Maybe<Array<Campaigns_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaigns_Order_By>>;
  where?: Maybe<Campaigns_Bool_Exp>;
};


/** query root */
export type Query_RootCampaigns_AggregateArgs = {
  distinct_on?: Maybe<Array<Campaigns_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaigns_Order_By>>;
  where?: Maybe<Campaigns_Bool_Exp>;
};


/** query root */
export type Query_RootCampaigns_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootCampaigns_ContributorsArgs = {
  distinct_on?: Maybe<Array<Campaigns_Contributors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaigns_Contributors_Order_By>>;
  where?: Maybe<Campaigns_Contributors_Bool_Exp>;
};


/** query root */
export type Query_RootCampaigns_Contributors_AggregateArgs = {
  distinct_on?: Maybe<Array<Campaigns_Contributors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaigns_Contributors_Order_By>>;
  where?: Maybe<Campaigns_Contributors_Bool_Exp>;
};


/** query root */
export type Query_RootCampaigns_Contributors_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootComposersArgs = {
  distinct_on?: Maybe<Array<Composers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Composers_Order_By>>;
  where?: Maybe<Composers_Bool_Exp>;
};


/** query root */
export type Query_RootComposers_AggregateArgs = {
  distinct_on?: Maybe<Array<Composers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Composers_Order_By>>;
  where?: Maybe<Composers_Bool_Exp>;
};


/** query root */
export type Query_RootComposers_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootComposers_RolesArgs = {
  distinct_on?: Maybe<Array<Composers_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Composers_Roles_Order_By>>;
  where?: Maybe<Composers_Roles_Bool_Exp>;
};


/** query root */
export type Query_RootComposers_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Composers_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Composers_Roles_Order_By>>;
  where?: Maybe<Composers_Roles_Bool_Exp>;
};


/** query root */
export type Query_RootComposers_Roles_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootInstrumentsArgs = {
  distinct_on?: Maybe<Array<Instruments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instruments_Order_By>>;
  where?: Maybe<Instruments_Bool_Exp>;
};


/** query root */
export type Query_RootInstruments_AggregateArgs = {
  distinct_on?: Maybe<Array<Instruments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instruments_Order_By>>;
  where?: Maybe<Instruments_Bool_Exp>;
};


/** query root */
export type Query_RootInstruments_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootRoled_ComposersArgs = {
  distinct_on?: Maybe<Array<Roled_Composers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roled_Composers_Order_By>>;
  where?: Maybe<Roled_Composers_Bool_Exp>;
};


/** query root */
export type Query_RootRoled_Composers_AggregateArgs = {
  distinct_on?: Maybe<Array<Roled_Composers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roled_Composers_Order_By>>;
  where?: Maybe<Roled_Composers_Bool_Exp>;
};


/** query root */
export type Query_RootRoled_Composers_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootTranspositionsArgs = {
  distinct_on?: Maybe<Array<Transpositions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transpositions_Order_By>>;
  where?: Maybe<Transpositions_Bool_Exp>;
};


/** query root */
export type Query_RootTranspositions_AggregateArgs = {
  distinct_on?: Maybe<Array<Transpositions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transpositions_Order_By>>;
  where?: Maybe<Transpositions_Bool_Exp>;
};


/** query root */
export type Query_RootTranspositions_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootWorksArgs = {
  distinct_on?: Maybe<Array<Works_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Order_By>>;
  where?: Maybe<Works_Bool_Exp>;
};


/** query root */
export type Query_RootWorks_AggregateArgs = {
  distinct_on?: Maybe<Array<Works_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Order_By>>;
  where?: Maybe<Works_Bool_Exp>;
};


/** query root */
export type Query_RootWorks_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootWorks_Roled_ComposersArgs = {
  distinct_on?: Maybe<Array<Works_Roled_Composers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Roled_Composers_Order_By>>;
  where?: Maybe<Works_Roled_Composers_Bool_Exp>;
};


/** query root */
export type Query_RootWorks_Roled_Composers_AggregateArgs = {
  distinct_on?: Maybe<Array<Works_Roled_Composers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Roled_Composers_Order_By>>;
  where?: Maybe<Works_Roled_Composers_Bool_Exp>;
};


/** query root */
export type Query_RootWorks_Roled_Composers_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "roled_composers" */
export type Roled_Composers = {
  __typename?: 'roled_composers';
  /** An object relationship */
  composer: Composers;
  composer_id: Scalars['Int'];
  /** An object relationship */
  composer_role: Composers_Roles;
  composer_role_id: Scalars['Int'];
  id: Scalars['Int'];
  /** An array relationship */
  work_roled_composers: Array<Works_Roled_Composers>;
  /** An aggregated array relationship */
  work_roled_composers_aggregate: Works_Roled_Composers_Aggregate;
};


/** columns and relationships of "roled_composers" */
export type Roled_ComposersWork_Roled_ComposersArgs = {
  distinct_on?: Maybe<Array<Works_Roled_Composers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Roled_Composers_Order_By>>;
  where?: Maybe<Works_Roled_Composers_Bool_Exp>;
};


/** columns and relationships of "roled_composers" */
export type Roled_ComposersWork_Roled_Composers_AggregateArgs = {
  distinct_on?: Maybe<Array<Works_Roled_Composers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Roled_Composers_Order_By>>;
  where?: Maybe<Works_Roled_Composers_Bool_Exp>;
};

/** aggregated selection of "roled_composers" */
export type Roled_Composers_Aggregate = {
  __typename?: 'roled_composers_aggregate';
  aggregate?: Maybe<Roled_Composers_Aggregate_Fields>;
  nodes: Array<Roled_Composers>;
};

/** aggregate fields of "roled_composers" */
export type Roled_Composers_Aggregate_Fields = {
  __typename?: 'roled_composers_aggregate_fields';
  avg?: Maybe<Roled_Composers_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Roled_Composers_Max_Fields>;
  min?: Maybe<Roled_Composers_Min_Fields>;
  stddev?: Maybe<Roled_Composers_Stddev_Fields>;
  stddev_pop?: Maybe<Roled_Composers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Roled_Composers_Stddev_Samp_Fields>;
  sum?: Maybe<Roled_Composers_Sum_Fields>;
  var_pop?: Maybe<Roled_Composers_Var_Pop_Fields>;
  var_samp?: Maybe<Roled_Composers_Var_Samp_Fields>;
  variance?: Maybe<Roled_Composers_Variance_Fields>;
};


/** aggregate fields of "roled_composers" */
export type Roled_Composers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Roled_Composers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "roled_composers" */
export type Roled_Composers_Aggregate_Order_By = {
  avg?: Maybe<Roled_Composers_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Roled_Composers_Max_Order_By>;
  min?: Maybe<Roled_Composers_Min_Order_By>;
  stddev?: Maybe<Roled_Composers_Stddev_Order_By>;
  stddev_pop?: Maybe<Roled_Composers_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Roled_Composers_Stddev_Samp_Order_By>;
  sum?: Maybe<Roled_Composers_Sum_Order_By>;
  var_pop?: Maybe<Roled_Composers_Var_Pop_Order_By>;
  var_samp?: Maybe<Roled_Composers_Var_Samp_Order_By>;
  variance?: Maybe<Roled_Composers_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "roled_composers" */
export type Roled_Composers_Arr_Rel_Insert_Input = {
  data: Array<Roled_Composers_Insert_Input>;
  on_conflict?: Maybe<Roled_Composers_On_Conflict>;
};

/** aggregate avg on columns */
export type Roled_Composers_Avg_Fields = {
  __typename?: 'roled_composers_avg_fields';
  composer_id?: Maybe<Scalars['Float']>;
  composer_role_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "roled_composers" */
export type Roled_Composers_Avg_Order_By = {
  composer_id?: Maybe<Order_By>;
  composer_role_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "roled_composers". All fields are combined with a logical 'AND'. */
export type Roled_Composers_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Roled_Composers_Bool_Exp>>>;
  _not?: Maybe<Roled_Composers_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Roled_Composers_Bool_Exp>>>;
  composer?: Maybe<Composers_Bool_Exp>;
  composer_id?: Maybe<Int_Comparison_Exp>;
  composer_role?: Maybe<Composers_Roles_Bool_Exp>;
  composer_role_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  work_roled_composers?: Maybe<Works_Roled_Composers_Bool_Exp>;
};

/** unique or primary key constraints on table "roled_composers" */
export enum Roled_Composers_Constraint {
  /** unique or primary key constraint */
  RoledComposerComposerRoleIdComposerIdKey = 'roled_composer_composer_role_id_composer_id_key',
  /** unique or primary key constraint */
  RoledComposerPkey = 'roled_composer_pkey'
}

/** input type for incrementing integer column in table "roled_composers" */
export type Roled_Composers_Inc_Input = {
  composer_id?: Maybe<Scalars['Int']>;
  composer_role_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "roled_composers" */
export type Roled_Composers_Insert_Input = {
  composer?: Maybe<Composers_Obj_Rel_Insert_Input>;
  composer_id?: Maybe<Scalars['Int']>;
  composer_role?: Maybe<Composers_Roles_Obj_Rel_Insert_Input>;
  composer_role_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  work_roled_composers?: Maybe<Works_Roled_Composers_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Roled_Composers_Max_Fields = {
  __typename?: 'roled_composers_max_fields';
  composer_id?: Maybe<Scalars['Int']>;
  composer_role_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "roled_composers" */
export type Roled_Composers_Max_Order_By = {
  composer_id?: Maybe<Order_By>;
  composer_role_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Roled_Composers_Min_Fields = {
  __typename?: 'roled_composers_min_fields';
  composer_id?: Maybe<Scalars['Int']>;
  composer_role_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "roled_composers" */
export type Roled_Composers_Min_Order_By = {
  composer_id?: Maybe<Order_By>;
  composer_role_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** response of any mutation on the table "roled_composers" */
export type Roled_Composers_Mutation_Response = {
  __typename?: 'roled_composers_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Roled_Composers>;
};

/** input type for inserting object relation for remote table "roled_composers" */
export type Roled_Composers_Obj_Rel_Insert_Input = {
  data: Roled_Composers_Insert_Input;
  on_conflict?: Maybe<Roled_Composers_On_Conflict>;
};

/** on conflict condition type for table "roled_composers" */
export type Roled_Composers_On_Conflict = {
  constraint: Roled_Composers_Constraint;
  update_columns: Array<Roled_Composers_Update_Column>;
  where?: Maybe<Roled_Composers_Bool_Exp>;
};

/** ordering options when selecting data from "roled_composers" */
export type Roled_Composers_Order_By = {
  composer?: Maybe<Composers_Order_By>;
  composer_id?: Maybe<Order_By>;
  composer_role?: Maybe<Composers_Roles_Order_By>;
  composer_role_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  work_roled_composers_aggregate?: Maybe<Works_Roled_Composers_Aggregate_Order_By>;
};

/** primary key columns input for table: "roled_composers" */
export type Roled_Composers_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "roled_composers" */
export enum Roled_Composers_Select_Column {
  /** column name */
  ComposerId = 'composer_id',
  /** column name */
  ComposerRoleId = 'composer_role_id',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "roled_composers" */
export type Roled_Composers_Set_Input = {
  composer_id?: Maybe<Scalars['Int']>;
  composer_role_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Roled_Composers_Stddev_Fields = {
  __typename?: 'roled_composers_stddev_fields';
  composer_id?: Maybe<Scalars['Float']>;
  composer_role_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "roled_composers" */
export type Roled_Composers_Stddev_Order_By = {
  composer_id?: Maybe<Order_By>;
  composer_role_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Roled_Composers_Stddev_Pop_Fields = {
  __typename?: 'roled_composers_stddev_pop_fields';
  composer_id?: Maybe<Scalars['Float']>;
  composer_role_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "roled_composers" */
export type Roled_Composers_Stddev_Pop_Order_By = {
  composer_id?: Maybe<Order_By>;
  composer_role_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Roled_Composers_Stddev_Samp_Fields = {
  __typename?: 'roled_composers_stddev_samp_fields';
  composer_id?: Maybe<Scalars['Float']>;
  composer_role_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "roled_composers" */
export type Roled_Composers_Stddev_Samp_Order_By = {
  composer_id?: Maybe<Order_By>;
  composer_role_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Roled_Composers_Sum_Fields = {
  __typename?: 'roled_composers_sum_fields';
  composer_id?: Maybe<Scalars['Int']>;
  composer_role_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "roled_composers" */
export type Roled_Composers_Sum_Order_By = {
  composer_id?: Maybe<Order_By>;
  composer_role_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "roled_composers" */
export enum Roled_Composers_Update_Column {
  /** column name */
  ComposerId = 'composer_id',
  /** column name */
  ComposerRoleId = 'composer_role_id',
  /** column name */
  Id = 'id'
}

/** aggregate var_pop on columns */
export type Roled_Composers_Var_Pop_Fields = {
  __typename?: 'roled_composers_var_pop_fields';
  composer_id?: Maybe<Scalars['Float']>;
  composer_role_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "roled_composers" */
export type Roled_Composers_Var_Pop_Order_By = {
  composer_id?: Maybe<Order_By>;
  composer_role_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Roled_Composers_Var_Samp_Fields = {
  __typename?: 'roled_composers_var_samp_fields';
  composer_id?: Maybe<Scalars['Float']>;
  composer_role_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "roled_composers" */
export type Roled_Composers_Var_Samp_Order_By = {
  composer_id?: Maybe<Order_By>;
  composer_role_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Roled_Composers_Variance_Fields = {
  __typename?: 'roled_composers_variance_fields';
  composer_id?: Maybe<Scalars['Float']>;
  composer_role_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "roled_composers" */
export type Roled_Composers_Variance_Order_By = {
  composer_id?: Maybe<Order_By>;
  composer_role_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "campaign_progress_stops" */
  campaign_progress_stops: Array<Campaign_Progress_Stops>;
  /** fetch aggregated fields from the table: "campaign_progress_stops" */
  campaign_progress_stops_aggregate: Campaign_Progress_Stops_Aggregate;
  /** fetch data from the table: "campaign_progress_stops" using primary key columns */
  campaign_progress_stops_by_pk?: Maybe<Campaign_Progress_Stops>;
  /** fetch data from the table: "campaigns" */
  campaigns: Array<Campaigns>;
  /** fetch aggregated fields from the table: "campaigns" */
  campaigns_aggregate: Campaigns_Aggregate;
  /** fetch data from the table: "campaigns" using primary key columns */
  campaigns_by_pk?: Maybe<Campaigns>;
  /** fetch data from the table: "campaigns_contributors" */
  campaigns_contributors: Array<Campaigns_Contributors>;
  /** fetch aggregated fields from the table: "campaigns_contributors" */
  campaigns_contributors_aggregate: Campaigns_Contributors_Aggregate;
  /** fetch data from the table: "campaigns_contributors" using primary key columns */
  campaigns_contributors_by_pk?: Maybe<Campaigns_Contributors>;
  /** fetch data from the table: "composers" */
  composers: Array<Composers>;
  /** fetch aggregated fields from the table: "composers" */
  composers_aggregate: Composers_Aggregate;
  /** fetch data from the table: "composers" using primary key columns */
  composers_by_pk?: Maybe<Composers>;
  /** fetch data from the table: "composers_roles" */
  composers_roles: Array<Composers_Roles>;
  /** fetch aggregated fields from the table: "composers_roles" */
  composers_roles_aggregate: Composers_Roles_Aggregate;
  /** fetch data from the table: "composers_roles" using primary key columns */
  composers_roles_by_pk?: Maybe<Composers_Roles>;
  /** fetch data from the table: "instruments" */
  instruments: Array<Instruments>;
  /** fetch aggregated fields from the table: "instruments" */
  instruments_aggregate: Instruments_Aggregate;
  /** fetch data from the table: "instruments" using primary key columns */
  instruments_by_pk?: Maybe<Instruments>;
  /** fetch data from the table: "roled_composers" */
  roled_composers: Array<Roled_Composers>;
  /** fetch aggregated fields from the table: "roled_composers" */
  roled_composers_aggregate: Roled_Composers_Aggregate;
  /** fetch data from the table: "roled_composers" using primary key columns */
  roled_composers_by_pk?: Maybe<Roled_Composers>;
  /** fetch data from the table: "transpositions" */
  transpositions: Array<Transpositions>;
  /** fetch aggregated fields from the table: "transpositions" */
  transpositions_aggregate: Transpositions_Aggregate;
  /** fetch data from the table: "transpositions" using primary key columns */
  transpositions_by_pk?: Maybe<Transpositions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "works" */
  works: Array<Works>;
  /** fetch aggregated fields from the table: "works" */
  works_aggregate: Works_Aggregate;
  /** fetch data from the table: "works" using primary key columns */
  works_by_pk?: Maybe<Works>;
  /** fetch data from the table: "works_roled_composers" */
  works_roled_composers: Array<Works_Roled_Composers>;
  /** fetch aggregated fields from the table: "works_roled_composers" */
  works_roled_composers_aggregate: Works_Roled_Composers_Aggregate;
  /** fetch data from the table: "works_roled_composers" using primary key columns */
  works_roled_composers_by_pk?: Maybe<Works_Roled_Composers>;
};


/** subscription root */
export type Subscription_RootCampaign_Progress_StopsArgs = {
  distinct_on?: Maybe<Array<Campaign_Progress_Stops_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Progress_Stops_Order_By>>;
  where?: Maybe<Campaign_Progress_Stops_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCampaign_Progress_Stops_AggregateArgs = {
  distinct_on?: Maybe<Array<Campaign_Progress_Stops_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaign_Progress_Stops_Order_By>>;
  where?: Maybe<Campaign_Progress_Stops_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCampaign_Progress_Stops_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootCampaignsArgs = {
  distinct_on?: Maybe<Array<Campaigns_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaigns_Order_By>>;
  where?: Maybe<Campaigns_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCampaigns_AggregateArgs = {
  distinct_on?: Maybe<Array<Campaigns_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaigns_Order_By>>;
  where?: Maybe<Campaigns_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCampaigns_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootCampaigns_ContributorsArgs = {
  distinct_on?: Maybe<Array<Campaigns_Contributors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaigns_Contributors_Order_By>>;
  where?: Maybe<Campaigns_Contributors_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCampaigns_Contributors_AggregateArgs = {
  distinct_on?: Maybe<Array<Campaigns_Contributors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaigns_Contributors_Order_By>>;
  where?: Maybe<Campaigns_Contributors_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCampaigns_Contributors_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootComposersArgs = {
  distinct_on?: Maybe<Array<Composers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Composers_Order_By>>;
  where?: Maybe<Composers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootComposers_AggregateArgs = {
  distinct_on?: Maybe<Array<Composers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Composers_Order_By>>;
  where?: Maybe<Composers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootComposers_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootComposers_RolesArgs = {
  distinct_on?: Maybe<Array<Composers_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Composers_Roles_Order_By>>;
  where?: Maybe<Composers_Roles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootComposers_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Composers_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Composers_Roles_Order_By>>;
  where?: Maybe<Composers_Roles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootComposers_Roles_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootInstrumentsArgs = {
  distinct_on?: Maybe<Array<Instruments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instruments_Order_By>>;
  where?: Maybe<Instruments_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootInstruments_AggregateArgs = {
  distinct_on?: Maybe<Array<Instruments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Instruments_Order_By>>;
  where?: Maybe<Instruments_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootInstruments_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootRoled_ComposersArgs = {
  distinct_on?: Maybe<Array<Roled_Composers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roled_Composers_Order_By>>;
  where?: Maybe<Roled_Composers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRoled_Composers_AggregateArgs = {
  distinct_on?: Maybe<Array<Roled_Composers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roled_Composers_Order_By>>;
  where?: Maybe<Roled_Composers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRoled_Composers_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootTranspositionsArgs = {
  distinct_on?: Maybe<Array<Transpositions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transpositions_Order_By>>;
  where?: Maybe<Transpositions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTranspositions_AggregateArgs = {
  distinct_on?: Maybe<Array<Transpositions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transpositions_Order_By>>;
  where?: Maybe<Transpositions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTranspositions_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootWorksArgs = {
  distinct_on?: Maybe<Array<Works_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Order_By>>;
  where?: Maybe<Works_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWorks_AggregateArgs = {
  distinct_on?: Maybe<Array<Works_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Order_By>>;
  where?: Maybe<Works_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWorks_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootWorks_Roled_ComposersArgs = {
  distinct_on?: Maybe<Array<Works_Roled_Composers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Roled_Composers_Order_By>>;
  where?: Maybe<Works_Roled_Composers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWorks_Roled_Composers_AggregateArgs = {
  distinct_on?: Maybe<Array<Works_Roled_Composers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Roled_Composers_Order_By>>;
  where?: Maybe<Works_Roled_Composers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWorks_Roled_Composers_By_PkArgs = {
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

/** columns and relationships of "transpositions" */
export type Transpositions = {
  __typename?: 'transpositions';
  id: Scalars['Int'];
  key: Scalars['String'];
};

/** aggregated selection of "transpositions" */
export type Transpositions_Aggregate = {
  __typename?: 'transpositions_aggregate';
  aggregate?: Maybe<Transpositions_Aggregate_Fields>;
  nodes: Array<Transpositions>;
};

/** aggregate fields of "transpositions" */
export type Transpositions_Aggregate_Fields = {
  __typename?: 'transpositions_aggregate_fields';
  avg?: Maybe<Transpositions_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Transpositions_Max_Fields>;
  min?: Maybe<Transpositions_Min_Fields>;
  stddev?: Maybe<Transpositions_Stddev_Fields>;
  stddev_pop?: Maybe<Transpositions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transpositions_Stddev_Samp_Fields>;
  sum?: Maybe<Transpositions_Sum_Fields>;
  var_pop?: Maybe<Transpositions_Var_Pop_Fields>;
  var_samp?: Maybe<Transpositions_Var_Samp_Fields>;
  variance?: Maybe<Transpositions_Variance_Fields>;
};


/** aggregate fields of "transpositions" */
export type Transpositions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Transpositions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "transpositions" */
export type Transpositions_Aggregate_Order_By = {
  avg?: Maybe<Transpositions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Transpositions_Max_Order_By>;
  min?: Maybe<Transpositions_Min_Order_By>;
  stddev?: Maybe<Transpositions_Stddev_Order_By>;
  stddev_pop?: Maybe<Transpositions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Transpositions_Stddev_Samp_Order_By>;
  sum?: Maybe<Transpositions_Sum_Order_By>;
  var_pop?: Maybe<Transpositions_Var_Pop_Order_By>;
  var_samp?: Maybe<Transpositions_Var_Samp_Order_By>;
  variance?: Maybe<Transpositions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "transpositions" */
export type Transpositions_Arr_Rel_Insert_Input = {
  data: Array<Transpositions_Insert_Input>;
  on_conflict?: Maybe<Transpositions_On_Conflict>;
};

/** aggregate avg on columns */
export type Transpositions_Avg_Fields = {
  __typename?: 'transpositions_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "transpositions" */
export type Transpositions_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transpositions". All fields are combined with a logical 'AND'. */
export type Transpositions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Transpositions_Bool_Exp>>>;
  _not?: Maybe<Transpositions_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Transpositions_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  key?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "transpositions" */
export enum Transpositions_Constraint {
  /** unique or primary key constraint */
  TranspositionPkey = 'transposition_pkey'
}

/** input type for incrementing integer column in table "transpositions" */
export type Transpositions_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "transpositions" */
export type Transpositions_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Transpositions_Max_Fields = {
  __typename?: 'transpositions_max_fields';
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "transpositions" */
export type Transpositions_Max_Order_By = {
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Transpositions_Min_Fields = {
  __typename?: 'transpositions_min_fields';
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "transpositions" */
export type Transpositions_Min_Order_By = {
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
};

/** response of any mutation on the table "transpositions" */
export type Transpositions_Mutation_Response = {
  __typename?: 'transpositions_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Transpositions>;
};

/** input type for inserting object relation for remote table "transpositions" */
export type Transpositions_Obj_Rel_Insert_Input = {
  data: Transpositions_Insert_Input;
  on_conflict?: Maybe<Transpositions_On_Conflict>;
};

/** on conflict condition type for table "transpositions" */
export type Transpositions_On_Conflict = {
  constraint: Transpositions_Constraint;
  update_columns: Array<Transpositions_Update_Column>;
  where?: Maybe<Transpositions_Bool_Exp>;
};

/** ordering options when selecting data from "transpositions" */
export type Transpositions_Order_By = {
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
};

/** primary key columns input for table: "transpositions" */
export type Transpositions_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "transpositions" */
export enum Transpositions_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key'
}

/** input type for updating data in table "transpositions" */
export type Transpositions_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Transpositions_Stddev_Fields = {
  __typename?: 'transpositions_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "transpositions" */
export type Transpositions_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transpositions_Stddev_Pop_Fields = {
  __typename?: 'transpositions_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "transpositions" */
export type Transpositions_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transpositions_Stddev_Samp_Fields = {
  __typename?: 'transpositions_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "transpositions" */
export type Transpositions_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Transpositions_Sum_Fields = {
  __typename?: 'transpositions_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "transpositions" */
export type Transpositions_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "transpositions" */
export enum Transpositions_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key'
}

/** aggregate var_pop on columns */
export type Transpositions_Var_Pop_Fields = {
  __typename?: 'transpositions_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "transpositions" */
export type Transpositions_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transpositions_Var_Samp_Fields = {
  __typename?: 'transpositions_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "transpositions" */
export type Transpositions_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Transpositions_Variance_Fields = {
  __typename?: 'transpositions_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "transpositions" */
export type Transpositions_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  campaign_contributors: Array<Campaigns_Contributors>;
  /** An aggregated array relationship */
  campaign_contributors_aggregate: Campaigns_Contributors_Aggregate;
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


/** columns and relationships of "users" */
export type UsersCampaign_ContributorsArgs = {
  distinct_on?: Maybe<Array<Campaigns_Contributors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaigns_Contributors_Order_By>>;
  where?: Maybe<Campaigns_Contributors_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCampaign_Contributors_AggregateArgs = {
  distinct_on?: Maybe<Array<Campaigns_Contributors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Campaigns_Contributors_Order_By>>;
  where?: Maybe<Campaigns_Contributors_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: Maybe<Users_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
  stddev?: Maybe<Users_Stddev_Order_By>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Order_By>;
  sum?: Maybe<Users_Sum_Order_By>;
  var_pop?: Maybe<Users_Var_Pop_Order_By>;
  var_samp?: Maybe<Users_Var_Samp_Order_By>;
  variance?: Maybe<Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  campaign_contributors?: Maybe<Campaigns_Contributors_Bool_Exp>;
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

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'user_pkey',
  /** unique or primary key constraint */
  UserUsernameKey = 'user_username_key'
}

/** input type for incrementing integer column in table "users" */
export type Users_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  campaign_contributors?: Maybe<Campaigns_Contributors_Arr_Rel_Insert_Input>;
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
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
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

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
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
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
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

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
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

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  campaign_contributors_aggregate?: Maybe<Campaigns_Contributors_Aggregate_Order_By>;
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

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
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

/** input type for updating data in table "users" */
export type Users_Set_Input = {
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
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
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
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "works" */
export type Works = {
  __typename?: 'works';
  /** An object relationship */
  campaign?: Maybe<Campaigns>;
  duration?: Maybe<Scalars['timetz']>;
  id: Scalars['Int'];
  title: Scalars['String'];
  /** An array relationship */
  work_roled_composers: Array<Works_Roled_Composers>;
  /** An aggregated array relationship */
  work_roled_composers_aggregate: Works_Roled_Composers_Aggregate;
};


/** columns and relationships of "works" */
export type WorksWork_Roled_ComposersArgs = {
  distinct_on?: Maybe<Array<Works_Roled_Composers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Roled_Composers_Order_By>>;
  where?: Maybe<Works_Roled_Composers_Bool_Exp>;
};


/** columns and relationships of "works" */
export type WorksWork_Roled_Composers_AggregateArgs = {
  distinct_on?: Maybe<Array<Works_Roled_Composers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Works_Roled_Composers_Order_By>>;
  where?: Maybe<Works_Roled_Composers_Bool_Exp>;
};

/** aggregated selection of "works" */
export type Works_Aggregate = {
  __typename?: 'works_aggregate';
  aggregate?: Maybe<Works_Aggregate_Fields>;
  nodes: Array<Works>;
};

/** aggregate fields of "works" */
export type Works_Aggregate_Fields = {
  __typename?: 'works_aggregate_fields';
  avg?: Maybe<Works_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Works_Max_Fields>;
  min?: Maybe<Works_Min_Fields>;
  stddev?: Maybe<Works_Stddev_Fields>;
  stddev_pop?: Maybe<Works_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Works_Stddev_Samp_Fields>;
  sum?: Maybe<Works_Sum_Fields>;
  var_pop?: Maybe<Works_Var_Pop_Fields>;
  var_samp?: Maybe<Works_Var_Samp_Fields>;
  variance?: Maybe<Works_Variance_Fields>;
};


/** aggregate fields of "works" */
export type Works_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Works_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "works" */
export type Works_Aggregate_Order_By = {
  avg?: Maybe<Works_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Works_Max_Order_By>;
  min?: Maybe<Works_Min_Order_By>;
  stddev?: Maybe<Works_Stddev_Order_By>;
  stddev_pop?: Maybe<Works_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Works_Stddev_Samp_Order_By>;
  sum?: Maybe<Works_Sum_Order_By>;
  var_pop?: Maybe<Works_Var_Pop_Order_By>;
  var_samp?: Maybe<Works_Var_Samp_Order_By>;
  variance?: Maybe<Works_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "works" */
export type Works_Arr_Rel_Insert_Input = {
  data: Array<Works_Insert_Input>;
  on_conflict?: Maybe<Works_On_Conflict>;
};

/** aggregate avg on columns */
export type Works_Avg_Fields = {
  __typename?: 'works_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "works" */
export type Works_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "works". All fields are combined with a logical 'AND'. */
export type Works_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Works_Bool_Exp>>>;
  _not?: Maybe<Works_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Works_Bool_Exp>>>;
  campaign?: Maybe<Campaigns_Bool_Exp>;
  duration?: Maybe<Timetz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  work_roled_composers?: Maybe<Works_Roled_Composers_Bool_Exp>;
};

/** unique or primary key constraints on table "works" */
export enum Works_Constraint {
  /** unique or primary key constraint */
  WorkPkey = 'work_pkey'
}

/** input type for incrementing integer column in table "works" */
export type Works_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "works" */
export type Works_Insert_Input = {
  campaign?: Maybe<Campaigns_Obj_Rel_Insert_Input>;
  duration?: Maybe<Scalars['timetz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  work_roled_composers?: Maybe<Works_Roled_Composers_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Works_Max_Fields = {
  __typename?: 'works_max_fields';
  duration?: Maybe<Scalars['timetz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "works" */
export type Works_Max_Order_By = {
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Works_Min_Fields = {
  __typename?: 'works_min_fields';
  duration?: Maybe<Scalars['timetz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "works" */
export type Works_Min_Order_By = {
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
};

/** response of any mutation on the table "works" */
export type Works_Mutation_Response = {
  __typename?: 'works_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Works>;
};

/** input type for inserting object relation for remote table "works" */
export type Works_Obj_Rel_Insert_Input = {
  data: Works_Insert_Input;
  on_conflict?: Maybe<Works_On_Conflict>;
};

/** on conflict condition type for table "works" */
export type Works_On_Conflict = {
  constraint: Works_Constraint;
  update_columns: Array<Works_Update_Column>;
  where?: Maybe<Works_Bool_Exp>;
};

/** ordering options when selecting data from "works" */
export type Works_Order_By = {
  campaign?: Maybe<Campaigns_Order_By>;
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  work_roled_composers_aggregate?: Maybe<Works_Roled_Composers_Aggregate_Order_By>;
};

/** primary key columns input for table: "works" */
export type Works_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** columns and relationships of "works_roled_composers" */
export type Works_Roled_Composers = {
  __typename?: 'works_roled_composers';
  id: Scalars['Int'];
  /** An object relationship */
  roled_composer: Roled_Composers;
  roled_composer_id: Scalars['Int'];
  /** An object relationship */
  work: Works;
  work_id: Scalars['Int'];
};

/** aggregated selection of "works_roled_composers" */
export type Works_Roled_Composers_Aggregate = {
  __typename?: 'works_roled_composers_aggregate';
  aggregate?: Maybe<Works_Roled_Composers_Aggregate_Fields>;
  nodes: Array<Works_Roled_Composers>;
};

/** aggregate fields of "works_roled_composers" */
export type Works_Roled_Composers_Aggregate_Fields = {
  __typename?: 'works_roled_composers_aggregate_fields';
  avg?: Maybe<Works_Roled_Composers_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Works_Roled_Composers_Max_Fields>;
  min?: Maybe<Works_Roled_Composers_Min_Fields>;
  stddev?: Maybe<Works_Roled_Composers_Stddev_Fields>;
  stddev_pop?: Maybe<Works_Roled_Composers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Works_Roled_Composers_Stddev_Samp_Fields>;
  sum?: Maybe<Works_Roled_Composers_Sum_Fields>;
  var_pop?: Maybe<Works_Roled_Composers_Var_Pop_Fields>;
  var_samp?: Maybe<Works_Roled_Composers_Var_Samp_Fields>;
  variance?: Maybe<Works_Roled_Composers_Variance_Fields>;
};


/** aggregate fields of "works_roled_composers" */
export type Works_Roled_Composers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Works_Roled_Composers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "works_roled_composers" */
export type Works_Roled_Composers_Aggregate_Order_By = {
  avg?: Maybe<Works_Roled_Composers_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Works_Roled_Composers_Max_Order_By>;
  min?: Maybe<Works_Roled_Composers_Min_Order_By>;
  stddev?: Maybe<Works_Roled_Composers_Stddev_Order_By>;
  stddev_pop?: Maybe<Works_Roled_Composers_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Works_Roled_Composers_Stddev_Samp_Order_By>;
  sum?: Maybe<Works_Roled_Composers_Sum_Order_By>;
  var_pop?: Maybe<Works_Roled_Composers_Var_Pop_Order_By>;
  var_samp?: Maybe<Works_Roled_Composers_Var_Samp_Order_By>;
  variance?: Maybe<Works_Roled_Composers_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "works_roled_composers" */
export type Works_Roled_Composers_Arr_Rel_Insert_Input = {
  data: Array<Works_Roled_Composers_Insert_Input>;
  on_conflict?: Maybe<Works_Roled_Composers_On_Conflict>;
};

/** aggregate avg on columns */
export type Works_Roled_Composers_Avg_Fields = {
  __typename?: 'works_roled_composers_avg_fields';
  id?: Maybe<Scalars['Float']>;
  roled_composer_id?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "works_roled_composers" */
export type Works_Roled_Composers_Avg_Order_By = {
  id?: Maybe<Order_By>;
  roled_composer_id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "works_roled_composers". All fields are combined with a logical 'AND'. */
export type Works_Roled_Composers_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Works_Roled_Composers_Bool_Exp>>>;
  _not?: Maybe<Works_Roled_Composers_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Works_Roled_Composers_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  roled_composer?: Maybe<Roled_Composers_Bool_Exp>;
  roled_composer_id?: Maybe<Int_Comparison_Exp>;
  work?: Maybe<Works_Bool_Exp>;
  work_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "works_roled_composers" */
export enum Works_Roled_Composers_Constraint {
  /** unique or primary key constraint */
  WorkRoledComposerPkey = 'work_roled_composer_pkey',
  /** unique or primary key constraint */
  WorkRoledComposerWorkIdRoledComposerIdKey = 'work_roled_composer_work_id_roled_composer_id_key'
}

/** input type for incrementing integer column in table "works_roled_composers" */
export type Works_Roled_Composers_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  roled_composer_id?: Maybe<Scalars['Int']>;
  work_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "works_roled_composers" */
export type Works_Roled_Composers_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  roled_composer?: Maybe<Roled_Composers_Obj_Rel_Insert_Input>;
  roled_composer_id?: Maybe<Scalars['Int']>;
  work?: Maybe<Works_Obj_Rel_Insert_Input>;
  work_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Works_Roled_Composers_Max_Fields = {
  __typename?: 'works_roled_composers_max_fields';
  id?: Maybe<Scalars['Int']>;
  roled_composer_id?: Maybe<Scalars['Int']>;
  work_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "works_roled_composers" */
export type Works_Roled_Composers_Max_Order_By = {
  id?: Maybe<Order_By>;
  roled_composer_id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Works_Roled_Composers_Min_Fields = {
  __typename?: 'works_roled_composers_min_fields';
  id?: Maybe<Scalars['Int']>;
  roled_composer_id?: Maybe<Scalars['Int']>;
  work_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "works_roled_composers" */
export type Works_Roled_Composers_Min_Order_By = {
  id?: Maybe<Order_By>;
  roled_composer_id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "works_roled_composers" */
export type Works_Roled_Composers_Mutation_Response = {
  __typename?: 'works_roled_composers_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Works_Roled_Composers>;
};

/** input type for inserting object relation for remote table "works_roled_composers" */
export type Works_Roled_Composers_Obj_Rel_Insert_Input = {
  data: Works_Roled_Composers_Insert_Input;
  on_conflict?: Maybe<Works_Roled_Composers_On_Conflict>;
};

/** on conflict condition type for table "works_roled_composers" */
export type Works_Roled_Composers_On_Conflict = {
  constraint: Works_Roled_Composers_Constraint;
  update_columns: Array<Works_Roled_Composers_Update_Column>;
  where?: Maybe<Works_Roled_Composers_Bool_Exp>;
};

/** ordering options when selecting data from "works_roled_composers" */
export type Works_Roled_Composers_Order_By = {
  id?: Maybe<Order_By>;
  roled_composer?: Maybe<Roled_Composers_Order_By>;
  roled_composer_id?: Maybe<Order_By>;
  work?: Maybe<Works_Order_By>;
  work_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "works_roled_composers" */
export type Works_Roled_Composers_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "works_roled_composers" */
export enum Works_Roled_Composers_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RoledComposerId = 'roled_composer_id',
  /** column name */
  WorkId = 'work_id'
}

/** input type for updating data in table "works_roled_composers" */
export type Works_Roled_Composers_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  roled_composer_id?: Maybe<Scalars['Int']>;
  work_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Works_Roled_Composers_Stddev_Fields = {
  __typename?: 'works_roled_composers_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  roled_composer_id?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "works_roled_composers" */
export type Works_Roled_Composers_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  roled_composer_id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Works_Roled_Composers_Stddev_Pop_Fields = {
  __typename?: 'works_roled_composers_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  roled_composer_id?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "works_roled_composers" */
export type Works_Roled_Composers_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  roled_composer_id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Works_Roled_Composers_Stddev_Samp_Fields = {
  __typename?: 'works_roled_composers_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  roled_composer_id?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "works_roled_composers" */
export type Works_Roled_Composers_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  roled_composer_id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Works_Roled_Composers_Sum_Fields = {
  __typename?: 'works_roled_composers_sum_fields';
  id?: Maybe<Scalars['Int']>;
  roled_composer_id?: Maybe<Scalars['Int']>;
  work_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "works_roled_composers" */
export type Works_Roled_Composers_Sum_Order_By = {
  id?: Maybe<Order_By>;
  roled_composer_id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** update columns of table "works_roled_composers" */
export enum Works_Roled_Composers_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RoledComposerId = 'roled_composer_id',
  /** column name */
  WorkId = 'work_id'
}

/** aggregate var_pop on columns */
export type Works_Roled_Composers_Var_Pop_Fields = {
  __typename?: 'works_roled_composers_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  roled_composer_id?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "works_roled_composers" */
export type Works_Roled_Composers_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  roled_composer_id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Works_Roled_Composers_Var_Samp_Fields = {
  __typename?: 'works_roled_composers_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  roled_composer_id?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "works_roled_composers" */
export type Works_Roled_Composers_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  roled_composer_id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Works_Roled_Composers_Variance_Fields = {
  __typename?: 'works_roled_composers_variance_fields';
  id?: Maybe<Scalars['Float']>;
  roled_composer_id?: Maybe<Scalars['Float']>;
  work_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "works_roled_composers" */
export type Works_Roled_Composers_Variance_Order_By = {
  id?: Maybe<Order_By>;
  roled_composer_id?: Maybe<Order_By>;
  work_id?: Maybe<Order_By>;
};

/** select columns of table "works" */
export enum Works_Select_Column {
  /** column name */
  Duration = 'duration',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "works" */
export type Works_Set_Input = {
  duration?: Maybe<Scalars['timetz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Works_Stddev_Fields = {
  __typename?: 'works_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "works" */
export type Works_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Works_Stddev_Pop_Fields = {
  __typename?: 'works_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "works" */
export type Works_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Works_Stddev_Samp_Fields = {
  __typename?: 'works_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "works" */
export type Works_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Works_Sum_Fields = {
  __typename?: 'works_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "works" */
export type Works_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "works" */
export enum Works_Update_Column {
  /** column name */
  Duration = 'duration',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type Works_Var_Pop_Fields = {
  __typename?: 'works_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "works" */
export type Works_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Works_Var_Samp_Fields = {
  __typename?: 'works_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "works" */
export type Works_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Works_Variance_Fields = {
  __typename?: 'works_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "works" */
export type Works_Variance_Order_By = {
  id?: Maybe<Order_By>;
};
