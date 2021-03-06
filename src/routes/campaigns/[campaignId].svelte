<script context="module" lang="ts">
  import client from "database/apollo";
  import { CampaignInfo } from "database/operations/Campaigns.graphql";

  export async function preload({ params: { campaignId: id } }) {
    return {
      campaignCache: await client.query({
        query: CampaignInfo,
        variables: { id },
      }),
      id: parseInt(id),
    };
  }
</script>

<script lang="ts">
  import type { ApolloQueryResult } from "@apollo/client/core";
  import { Loading } from "carbon-components-svelte";
  import {
    ContributorsDataTable,
    CampaignProgressBar,
    CampaignStats,
  } from "components/Campaigns";
  import { PageHeader } from "components/Layout";
  import { WorkGridViewTile } from "components/Works";
  import type { CampaignInfoQuery } from "database/generated/operations";
  import { query, restore } from "svelte-apollo";
  import { _ } from "svelte-i18n";

  export let campaignCache: ApolloQueryResult<CampaignInfoQuery> = undefined;
  export let id: number = undefined;

  restore(CampaignInfo, { data: campaignCache.data });

  const campaign = query<CampaignInfoQuery>(CampaignInfo);
</script>

<svelte:head>
  <title>{$_("routes.campaigns")} — Newold Music</title>
</svelte:head>

{#await $campaign}
  <Loading small />
{:then result}
  {#if result && result.data && result.data.campaigns_by_pk}
    <PageHeader
      title={result.data.campaigns_by_pk.title}
      goBackRoute="campaigns"
      backgroundImageUrl={result.data.campaigns_by_pk.image_url}
    >
      <CampaignStats
        contributorsCount={result.data.campaigns_by_pk
          .campaign_contributors_aggregate.aggregate.count}
        progressAmount={result.data.campaigns_by_pk
          .campaign_contributors_aggregate.aggregate.sum.quantity}
        progressGoal={result.data.campaigns_by_pk.goal}
        large
        light
      />
    </PageHeader>

    <div class="progress-bar">
      <CampaignProgressBar
        amount={result.data.campaigns_by_pk.campaign_contributors_aggregate
          .aggregate.sum.quantity}
        stops={[result.data.campaigns_by_pk.goal]}
      />
    </div>

    <p>{result.data.campaigns_by_pk.description}</p>

    <WorkGridViewTile
      id={result.data.campaigns_by_pk.work.id}
      title={result.data.campaigns_by_pk.work.title}
      composers={result.data.campaigns_by_pk.work.work_roled_composers.map(
        ({ roled_composer }) =>
          `${roled_composer.composer.name} ${roled_composer.composer.surname}`
      )}
      duration={result.data.campaigns_by_pk.work.duration}
    />

    <ContributorsDataTable campaignId={id} />
  {/if}
{/await}

<style>
  .progress-bar {
    margin: -2.1rem -2rem 4rem -2rem;
  }
</style>
