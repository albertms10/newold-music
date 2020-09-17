<script lang="ts">
  import type { ApolloQueryResult } from "apollo-boost";
  import { Loading } from "carbon-components-svelte";
  import GridView from "components/GridView.svelte";
  import GridViewTile from "components/GridViewTile.svelte";
  import { client } from "database/apollo";
  import type { ComposersListQuery } from "database/generated/operations";
  import { COMPOSERS_LIST } from "database/operations";
  import { query, restore } from "svelte-apollo";
  import { _ } from "svelte-i18n";

  export let composersCache: ApolloQueryResult<ComposersListQuery>;

  restore(client, COMPOSERS_LIST, composersCache.data);

  const composers = query<ComposersListQuery>(client, {
    query: COMPOSERS_LIST,
  });

  const numerableName = "composers";
</script>

{#await $composers}
  <Loading small />
{:then result}
  {#if result && result.data && result.data.composers.length > 0}
    <GridView {numerableName} count={result.data.composers.length}>
      {#each result.data.composers as { id, name, surname, roled_composers } (id)}
        <GridViewTile
          title={`${name} ${surname}`}
          detail={$_('numerable.works', {
            values: {
              n: roled_composers.reduce(
                (prev, curr) =>
                  prev + curr.work_roled_composers_aggregate.aggregate.count,
                0
              ),
            },
          })}
          href={`composers/${id}`} />
      {/each}
    </GridView>
  {:else}
    <GridView {numerableName} />
  {/if}
{/await}
