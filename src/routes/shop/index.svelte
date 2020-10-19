<script context="module" lang="ts">
  import client from "database/apollo";
  import { WorksList } from "database/operations/Works.graphql";

  export async function preload() {
    return {
      worksCache: await client.query({ query: WorksList }),
    };
  }
</script>

<script lang="ts">
  import type { ApolloQueryResult } from "apollo-boost";
  import { PageHeader } from "components/Layout";
  import { LoadWorksGridView } from "components/Works";
  import type { WorksListQuery } from "database/generated/operations";
  import { _ } from "svelte-i18n";

  export let worksCache: ApolloQueryResult<WorksListQuery>;
</script>

<svelte:head>
  <title>{$_('routes.shop')} — Newold Music</title>
</svelte:head>

<PageHeader title={$_('routes.shop')} />

<LoadWorksGridView bind:worksCache />
