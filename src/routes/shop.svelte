<script lang="ts">
  import { _ } from "svelte-i18n";
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
