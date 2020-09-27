<script context="module" lang="ts">
  import client from "database/apollo";
  import { COMPOSERS_LIST } from "database/operations";

  export async function preload() {
    return {
      composersCache: await client.query({ query: COMPOSERS_LIST }),
    };
  }
</script>

<script lang="ts">
  import type { ApolloQueryResult } from "apollo-boost";
  import LoadComposersGridView from "components/LoadComposersGridView.svelte";
  import type { ComposersListQuery } from "database/generated/operations";
  import { _ } from "svelte-i18n";

  export let composersCache: ApolloQueryResult<ComposersListQuery>;
</script>

<style>
  h1 {
    margin-bottom: 2rem;
  }
</style>

<svelte:head>
  <title>{$_('routes.composers')} — Newold Music</title>
</svelte:head>

<h1>{$_('routes.composers')}</h1>

<LoadComposersGridView bind:composersCache />
