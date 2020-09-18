<script context="module">
  import { client } from "database/apollo";
  import { CAMPAIGN_INFO } from "database/operations";

  export async function preload({ params }) {
    const { id } = params;

    return {
      campaignCache: await client.query({
        query: CAMPAIGN_INFO,
        variables: { id },
      }),
    };
  }
</script>

<script lang="ts">
  import type { ApolloQueryResult } from "apollo-boost";
  import {
    Breadcrumb,
    BreadcrumbItem,
    Loading,
  } from "carbon-components-svelte";
  import Timer20 from "carbon-icons-svelte/lib/Timer20";
  import GridViewTile from "components/GridView/GridViewTile.svelte";
  import GridViewTileDetail from "components/GridView/GridViewTileDetail.svelte";
  import type { CampaignInfoQuery } from "database/generated/operations";
  import { query, restore } from "svelte-apollo";
  import { _ } from "svelte-i18n";
  import { timeDuration } from "utils/datetime";

  export let campaignCache: ApolloQueryResult<CampaignInfoQuery>;

  restore(client, CAMPAIGN_INFO, campaignCache.data);

  const campaign = query<CampaignInfoQuery>(client, {
    query: CAMPAIGN_INFO,
  });
</script>

<style>
  h1 {
    margin-bottom: 2rem;
  }
</style>

<svelte:head>
  <title>{$_('routes.campaigns')} — Newold Music</title>
</svelte:head>

{#await $campaign}
  <Loading small />
{:then result}
  {#if result && result.data && result.data.campaigns_by_pk}
    <Breadcrumb noTrailingSlash>
      <BreadcrumbItem let:props>
        <a {...props} href="campaigns">{$_('routes.campaigns')}</a>
      </BreadcrumbItem>
      <BreadcrumbItem aria-current="page">
        {result.data.campaigns_by_pk.title}
      </BreadcrumbItem>
    </Breadcrumb>

    <h1>{result.data.campaigns_by_pk.title}</h1>

    <GridViewTile href={`shop/${result.data.campaigns_by_pk.work.id}`}>
      <span slot="title">{result.data.campaigns_by_pk.work.title}</span>
      <span slot="meta">
        {result.data.campaigns_by_pk.work.work_roled_composers
          .map(
            ({ roled_composer }) =>
              `${roled_composer.composer.name} ${roled_composer.composer.surname}`
          )
          .join(', ')}
      </span>
      <div slot="details">
        <GridViewTileDetail
          icon={Timer20}
          label={timeDuration(result.data.campaigns_by_pk.work.duration)} />
      </div>
    </GridViewTile>
  {/if}
{/await}
