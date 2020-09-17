<script context="module">
  import { client } from "database/apollo";
  import { CAMPAIGNS_LIST } from "database/operations";

  export async function preload() {
    return {
      campaignsCache: await client.query({ query: CAMPAIGNS_LIST }),
    };
  }
</script>

<script lang="ts">
  import type { ApolloQueryResult } from "apollo-boost";
  import CampaignsGridView from "components/CampaignsGridView.svelte";
  import type { Campaigns } from "database/generated/types";
  import { _ } from "svelte-i18n";

  export let campaignsCache: ApolloQueryResult<Campaigns>;
</script>

<style>
  h1 {
    margin-bottom: 2rem;
  }
</style>

<svelte:head>
  <title>{$_('routes.campaigns')} — Newold Music</title>
</svelte:head>

<h1>{$_('routes.campaigns')}</h1>

<CampaignsGridView bind:campaignsCache />
