<script lang="ts">
  import type { ApolloQueryResult } from "apollo-boost";
  import { Loading } from "carbon-components-svelte";
  import GridView from "components/GridView.svelte";
  import GridViewTile from "components/GridViewTile.svelte";
  import { client } from "database/apollo";
  import type { CampaignListQuery } from "database/generated/operations";
  import type { Campaign } from "database/generated/types";
  import { CAMPAIGN_LIST } from "database/operations";
  import { query, restore } from "svelte-apollo";
  import { _ } from "svelte-i18n";
  import { truncateString } from "utils/strings";

  export let campaignCache: ApolloQueryResult<Campaign>;

  restore(client, CAMPAIGN_LIST, campaignCache.data);

  const campaigns = query<CampaignListQuery>(client, {
    query: CAMPAIGN_LIST,
  });

  const numerableName = "campaigns";
</script>

{#await $campaigns}
  <Loading small />
{:then result}
  {#if result && result.data && result.data.campaign.length > 0}
    <GridView {numerableName} count={result.data.campaign.length}>
      {#each result.data.campaign as { id, title, description, campaign_contributors_aggregate } (id)}
        <GridViewTile
          {title}
          meta={truncateString(description, 82)}
          detail={$_('numerable.collaborators', {
            values: { n: campaign_contributors_aggregate.aggregate.count },
          })}
          href={`campaigns/${id}`} />
      {/each}
    </GridView>
  {:else}
    <GridView {numerableName} />
  {/if}
{/await}
