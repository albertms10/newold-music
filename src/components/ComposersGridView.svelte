<script lang="ts">
  import type { ApolloQueryResult } from "apollo-boost";
  import { Loading } from "carbon-components-svelte";
  import GridView from "components/GridView.svelte";
  import GridViewTile from "components/GridViewTile.svelte";
  import { client } from "database/apollo";
  import type { ComposerListQuery } from "database/generated/operations";
  import type { Composer } from "database/generated/types";
  import { COMPOSER_LIST } from "database/operations";
  import { query, restore } from "svelte-apollo";
  import { _ } from "svelte-i18n";

  export let composerCache: ApolloQueryResult<Composer>;

  restore(client, COMPOSER_LIST, composerCache.data);

  const composers = query<ComposerListQuery>(client, {
    query: COMPOSER_LIST,
  });

  const numerableName = "composers";
</script>

{#await $composers}
  <Loading small />
{:then result}
  {#if result && result.data && result.data.composer.length > 0}
    <GridView {numerableName} count={result.data.composer.length}>
      {#each result.data.composer as { id, name, surname, roled_composers } (id)}
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
