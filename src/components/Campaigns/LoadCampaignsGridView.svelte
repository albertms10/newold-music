<script lang="ts">
  import type { ApolloQueryResult } from "@apollo/client/core";
  import { Loading } from "carbon-components-svelte";
  import type { CampaignsListQuery } from "database/generated/operations";
  import { CAMPAIGNS_LIST } from "database/operations";
  import { query, restore } from "svelte-apollo";
  import { GridView } from "../GridView";
  import CampaignsGridView from "./CampaignsGridView.svelte";

  export let campaignsCache: ApolloQueryResult<CampaignsListQuery>;

  restore(CAMPAIGNS_LIST, { data: campaignsCache.data });

  const campaigns = query<CampaignsListQuery>(CAMPAIGNS_LIST);

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
