<script context="module" lang="ts">
  import client from "database/apollo";
  import { CampaignsList } from "database/operations/Campaigns.graphql";

  export async function preload() {
    return {
      campaignsCache: await client.query({ query: CampaignsList }),
    };
  }
</script>

<script lang="ts">
  import type { ApolloQueryResult } from "@apollo/client/core";
  import {
    CampaignFeedbackTooltip,
    LoadCampaignsGridView,
  } from "components/Campaigns";
  import { PageHeader } from "components/Layout";
  import type { CampaignsListQuery } from "database/generated/operations";
  import { _ } from "svelte-i18n";

  export let campaignsCache: ApolloQueryResult<CampaignsListQuery> = undefined;
</script>

<svelte:head>
  <title>{$_("routes.campaigns")} — Newold Music</title>
</svelte:head>

<PageHeader title={$_("routes.campaigns")}>
  <div slot="description">
    <CampaignFeedbackTooltip />
  </div>
</PageHeader>

<LoadCampaignsGridView bind:campaignsCache />
