<script lang="ts">
  import type { ApolloQueryResult } from "apollo-boost";
  import { Loading } from "carbon-components-svelte";
  import client from "database/apollo";
  import type { WorksListQuery } from "database/generated/operations";
  import { WorksList } from "database/operations/Works.graphql";
  import { query, restore } from "svelte-apollo";
  import { GridView } from "../GridView";
  import WorksGridView from "./WorksGridView.svelte";

  export let worksCache: ApolloQueryResult<WorksListQuery>;

  restore(client, WorksList, worksCache.data);

  const works = query<WorksListQuery>(client, {
    query: WorksList,
  });

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
