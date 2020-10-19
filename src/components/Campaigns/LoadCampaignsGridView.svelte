<script lang="ts">
  import type { ApolloQueryResult } from "apollo-boost";
  import { Loading } from "carbon-components-svelte";
  import client from "database/apollo";
  import type { CampaignsListQuery } from "database/generated/operations";
  import { CampaignsList } from "database/operations/Campaigns.graphql";
  import { query, restore } from "svelte-apollo";
  import { GridView } from "../GridView";
  import CampaignsGridView from "./CampaignsGridView.svelte";

  export let campaignsCache: ApolloQueryResult<CampaignsListQuery>;

  restore(client, CampaignsList, campaignsCache.data);

  const campaigns = query<CampaignsListQuery>(client, {
    query: CampaignsList,
  });

  const numerableName = "campaigns";
</script>

{#await $campaigns}
  <Loading small />
{:then result}
  {#if result && result.data && result.data.campaigns.length > 0}
    <CampaignsGridView items={result.data.campaigns} />
  {:else}
    <GridView {numerableName} />
  {/if}
{/await}
