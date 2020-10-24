<script context="module" lang="ts">
  import client from "database/apollo";
  import { ComposersList } from "database/operations/Composers.graphql";

  export async function preload() {
    return {
      composersCache: await client.query({ query: ComposersList }),
    };
  }
</script>

<script lang="ts">
  import type { ApolloQueryResult } from "@apollo/client/core";
  import { LoadComposersGridView } from "components/Composers";
  import { PageHeader } from "components/Layout";
  import type { ComposersListQuery } from "database/generated/operations";
  import { _ } from "svelte-i18n";

  export let composersCache: ApolloQueryResult<ComposersListQuery>;
</script>

<svelte:head>
  <title>{$_('routes.composers')} — Newold Music</title>
</svelte:head>

<PageHeader title={$_('routes.composers')} />

<LoadComposersGridView bind:composersCache />
