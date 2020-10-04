<script context="module" lang="ts">
  import client from "database/apollo";
  import { CAMPAIGN_INFO } from "database/operations";

  export async function preload({ params }) {
    const { campaignId } = params;

    return {
      campaignCache: await client.query({
        query: CAMPAIGN_INFO,
        variables: { id: campaignId },
      }),
      id: parseInt(campaignId),
    };
  }
</script>

<script lang="ts">
  import type { ApolloQueryResult } from "apollo-boost";
  import { Loading } from "carbon-components-svelte";
  import {
    ContributorsDataTable,
    CampaignProgressBar,
  } from "components/Campaigns";
  import { PageHeader } from "components/Layout";
  import { WorkGridViewTile } from "components/Works";
  import type { CampaignInfoQuery } from "database/generated/operations";
  import { query, restore } from "svelte-apollo";
  import { _ } from "svelte-i18n";

  export let campaignCache: ApolloQueryResult<CampaignInfoQuery>;
  export let id: number;

  restore(client, CAMPAIGN_INFO, campaignCache.data);

  const campaign = query<CampaignInfoQuery>(client, {
    query: CAMPAIGN_INFO,
  });
</script>

<style>
  .progress-bar {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
</style>

<svelte:head>
  <title>{$_('routes.campaigns')} — Newold Music</title>
</svelte:head>

{#await $campaign}
  <Loading small />
{:then result}
  {#if result && result.data && result.data.campaigns_by_pk}
    <PageHeader
      title={result.data.campaigns_by_pk.title}
      description={result.data.campaigns_by_pk.description}
      goBackRoute="campaigns"
    />

    <WorkGridViewTile
      id={result.data.campaigns_by_pk.work.id}
      title={result.data.campaigns_by_pk.work.title}
      composers={result.data.campaigns_by_pk.work.work_roled_composers.map(({ roled_composer }) => `${roled_composer.composer.name} ${roled_composer.composer.surname}`)}
      duration={result.data.campaigns_by_pk.work.duration}
    />

    <div class="progress-bar">
      <CampaignProgressBar
        amount={result.data.campaigns_by_pk.campaign_contributors_aggregate.aggregate.sum.quantity}
        stops={result.data.campaigns_by_pk.campaign_progress_stops.map(({ stop }) => stop)}
      />
    </div>

    <ContributorsDataTable campaignId={id} />
  {/if}
{/await}
