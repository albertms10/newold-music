<script lang="ts">
  import type { ApolloQueryResult } from "@apollo/client/core";
  import { Loading } from "carbon-components-svelte";
  import type { ComposersListQuery } from "database/generated/operations";
  import { COMPOSERS_LIST } from "database/operations";
  import { query, restore } from "svelte-apollo";
  import { GridView } from "../GridView";
  import ComposersGridView from "./ComposersGridView.svelte";

  export let composersCache: ApolloQueryResult<ComposersListQuery>;

  restore(COMPOSERS_LIST, { data: composersCache.data });

  const composers = query<ComposersListQuery>(COMPOSERS_LIST);

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
