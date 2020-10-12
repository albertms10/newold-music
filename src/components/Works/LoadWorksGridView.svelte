<script lang="ts">
  import type { ApolloQueryResult } from "@apollo/client/core";
  import { Loading } from "carbon-components-svelte";
  import type { WorksListQuery } from "database/generated/operations";
  import { WORKS_LIST } from "database/operations";
  import { query, restore } from "svelte-apollo";
  import { GridView } from "../GridView";
  import WorksGridView from "./WorksGridView.svelte";

  export let worksCache: ApolloQueryResult<WorksListQuery>;

  restore(WORKS_LIST, { data: worksCache.data });

  const works = query<WorksListQuery>(WORKS_LIST);

  const numerableName = "works";
</script>

{#await $works}
  <Loading small />
{:then result}
  {#if result && result.data && result.data.works.length > 0}
    <WorksGridView items={result.data.works} />
  {:else}
    <GridView {numerableName} />
  {/if}
{/await}
