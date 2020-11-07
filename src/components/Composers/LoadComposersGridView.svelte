<script lang="ts">
  import type { ApolloQueryResult } from "@apollo/client/core";
  import { Loading } from "carbon-components-svelte";
  import type { ComposersListQuery } from "database/generated/operations";
  import { ComposersList } from "database/operations/Composers.graphql";
  import { query, restore } from "svelte-apollo";
  import { GridView } from "../GridView";
  import ComposersGridView from "./ComposersGridView.svelte";

  export let composersCache: ApolloQueryResult<ComposersListQuery> = undefined;

  restore(ComposersList, { data: composersCache.data });

  const composers = query<ComposersListQuery>(ComposersList);

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
