<script lang="ts">
  import type { ApolloQueryResult } from "apollo-boost";
  import { Loading } from "carbon-components-svelte";
  import Timer20 from "carbon-icons-svelte/lib/Timer20";
  import GridView from "components/GridView.svelte";
  import GridViewTile from "components/GridViewTile.svelte";
  import GridViewTileDetail from "components/GridViewTileDetail.svelte";
  import { client } from "database/apollo";
  import type { WorksListQuery } from "database/generated/operations";
  import { WORKS_LIST } from "database/operations";
  import { query, restore } from "svelte-apollo";
  import { timeDuration } from "utils/datetime";

  export let worksCache: ApolloQueryResult<WorksListQuery>;

  restore(client, WORKS_LIST, worksCache.data);

  const works = query<WorksListQuery>(client, {
    query: WORKS_LIST,
  });

  const numerableName = "works";
</script>

{#await $works}
  <Loading small />
{:then result}
  {#if result && result.data && result.data.works.length > 0}
    <GridView {numerableName} count={result.data.works.length}>
      {#each result.data.works as { id, title, duration, work_roled_composers } (id)}
        <GridViewTile href={`shop/${id}`}>
          <span slot="title">{title}</span>
          <span slot="meta">
            {work_roled_composers
              .map(
                ({ roled_composer }) =>
                  `${roled_composer.composer.name} ${roled_composer.composer.surname}`
              )
              .join(', ')}
          </span>
          <div slot="details">
            <GridViewTileDetail icon={Timer20} label={timeDuration(duration)} />
          </div>
        </GridViewTile>
      {/each}
    </GridView>
  {:else}
    <GridView {numerableName} />
  {/if}
{/await}
