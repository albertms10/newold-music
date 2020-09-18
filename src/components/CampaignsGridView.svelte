<script lang="ts">
  import type { ApolloQueryResult } from "apollo-boost";
  import { Loading } from "carbon-components-svelte";
  import Collaborate20 from "carbon-icons-svelte/lib/Collaborate20";
  import GridView from "components/GridView/GridView.svelte";
  import GridViewTile from "components/GridView/GridViewTile.svelte";
  import GridViewTileDetail from "components/GridView/GridViewTileDetail.svelte";
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
          href={`campaigns/${id}`}
          aspectRatio="16x9"
          sm={4}
          md={8}
          lg={8}>
          <span slot="title">{title}</span>
          <span slot="meta">{truncateString(description, 82)}</span>
          <div slot="details">
            <GridViewTileDetail
              icon={Collaborate20}
              label={$_('numerable.collaborators', {
                values: {
                  n: campaign_contributors_aggregate.aggregate.count,
                },
              })} />
          </div>
        </GridViewTile>
      {/each}
    </GridView>
  {:else}
    <GridView {numerableName} />
  {/if}
{/await}
