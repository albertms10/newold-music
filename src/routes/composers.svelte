<script context="module">
  import { client } from "../database/apollo";
  import { COMPOSER_LIST } from "../database/queries";

  export async function preload() {
    return {
      composerCache: await client.query({ query: COMPOSER_LIST }),
    };
  }
</script>

<script lang="ts">
  import type { ApolloQueryResult } from "apollo-boost";
  import { _ } from "svelte-i18n";
  import ComposersGridView from "../components/ComposersGridView.svelte";
  import type { Composer } from "../database/model";

  export let composerCache: ApolloQueryResult<Composer>;
</script>

<svelte:head>
  <title>{$_('routes.composers')} — Newold Music</title>
</svelte:head>

<h1>{$_('routes.composers')}</h1>

<ComposersGridView bind:composerCache />
