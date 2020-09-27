<script context="module" lang="ts">
  import client from "database/apollo";
  import { WORKS_LIST } from "database/operations";

  export async function preload() {
    return {
      worksCache: await client.query({ query: WORKS_LIST }),
    };
  }
</script>

<script lang="ts">
  import type { ApolloQueryResult } from "apollo-boost";
  import LoadWorksGridView from "components/LoadWorksGridView.svelte";
  import type { WorksListQuery } from "database/generated/operations";
  import { _ } from "svelte-i18n";

  export let worksCache: ApolloQueryResult<WorksListQuery>;
</script>

<style>
  h1 {
    margin-bottom: 2rem;
  }
</style>

<svelte:head>
  <title>{$_('routes.shop')} — Newold Music</title>
</svelte:head>

<h1>{$_('routes.shop')}</h1>

<LoadWorksGridView bind:worksCache />
