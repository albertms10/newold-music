<script lang="ts">
  import type { ApolloQueryResult } from "apollo-boost";
  import { Loading } from "carbon-components-svelte";
  import CampaignGridViewTile from "components/CampaignGridViewTile.svelte";
  import GridView from "components/GridView/GridView.svelte";
  import client from "database/apollo";
  import type { CampaignsListQuery } from "database/generated/operations";
  import { CAMPAIGNS_LIST } from "database/operations";
  import { query, restore } from "svelte-apollo";

  export let campaignsCache: ApolloQueryResult<CampaignsListQuery>;

  restore(client, CAMPAIGNS_LIST, campaignsCache.data);

  const campaigns = query<CampaignsListQuery>(client, {
    query: CAMPAIGNS_LIST,
  });

  const numerableName = "campaigns";
</script>

{#await $campaigns}
  <Loading small />
{:then result}
  {#if result && result.data && result.data.campaigns.length > 0}
    <GridView {numerableName} count={result.data.campaigns.length}>
      {#each result.data.campaigns as { id, title, description, campaign_contributors_aggregate } (id)}
        <CampaignGridViewTile
          {id}
          {title}
          {description}
          contributorsCount={campaign_contributors_aggregate.aggregate.count} />
      {/each}
    </GridView>
  {:else}
    <GridView {numerableName} />
  {/if}
{/await}
