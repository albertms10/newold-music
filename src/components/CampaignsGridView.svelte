<script lang="ts">
  import type { ApolloQueryResult } from "apollo-boost";
  import { Loading } from "carbon-components-svelte";
  import GridView from "components/GridView.svelte";
  import GridViewTile from "components/GridViewTile.svelte";
  import { client } from "database/apollo";
  import type { CampaignsListQuery } from "database/generated/operations";
  import { CAMPAIGNS_LIST } from "database/operations";
  import { query, restore } from "svelte-apollo";
  import { _ } from "svelte-i18n";
  import { truncateString } from "utils/strings";

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
        <GridViewTile
          {title}
          meta={truncateString(description, 82)}
          detail={$_('numerable.collaborators', {
            values: { n: campaign_contributors_aggregate.aggregate.count },
          })}
          href={`campaigns/${id}`}
          aspectRatio="16x9"
          sm={4}
          md={8}
          lg={8} />
      {/each}
    </GridView>
  {:else}
    <GridView {numerableName} />
  {/if}
{/await}
