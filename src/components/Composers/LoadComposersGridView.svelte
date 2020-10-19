<script lang="ts">
  import type { ApolloQueryResult } from "apollo-boost";
  import { Loading } from "carbon-components-svelte";
  import client from "database/apollo";
  import type { ComposersListQuery } from "database/generated/operations";
  import { ComposersList } from "database/operations/Composers.graphql";
  import { query, restore } from "svelte-apollo";
  import { GridView } from "../GridView";
  import ComposersGridView from "./ComposersGridView.svelte";

  export let composersCache: ApolloQueryResult<ComposersListQuery>;

  restore(client, ComposersList, composersCache.data);

  const composers = query<ComposersListQuery>(client, {
    query: ComposersList,
  });

  const numerableName = "composers";
</script>

{#await $composers}
  <Loading small />
{:then result}
  {#if result && result.data && result.data.composers.length > 0}
    <ComposersGridView items={result.data.composers} />
  {:else}
    <GridView {numerableName} />
  {/if}
{/await}
