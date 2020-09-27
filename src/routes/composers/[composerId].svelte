<script context="module" lang="ts">
  import client from "database/apollo";
  import { COMPOSER_INFO } from "database/operations";

  export async function preload({ params }) {
    const { composerId } = params;

    return {
      composerCache: await client.query({
        query: COMPOSER_INFO,
        variables: { id: composerId },
      }),
    };
  }
</script>

<script lang="ts">
  import type { ApolloQueryResult } from "apollo-boost";
  import {
    Breadcrumb,
    BreadcrumbItem,
    Loading,
  } from "carbon-components-svelte";
  import { GridView } from "components/GridView";
  import { WorkGridViewTile } from "components/Works";
  import type { ComposerInfoQuery } from "database/generated/operations";
  import { query, restore } from "svelte-apollo";
  import { _ } from "svelte-i18n";

  export let composerCache: ApolloQueryResult<ComposerInfoQuery>;

  restore(client, COMPOSER_INFO, composerCache.data);

  const composer = query<ComposerInfoQuery>(client, {
    query: COMPOSER_INFO,
  });
</script>

<style>
  h1 {
    margin-bottom: 2rem;
  }
</style>

<svelte:head>
  <title>{$_('routes.composers')} — Newold Music</title>
</svelte:head>

{#await $composer}
  <Loading small />
{:then result}
  {#if result && result.data && result.data.composers_by_pk}
    <Breadcrumb noTrailingSlash>
      <BreadcrumbItem let:props>
        <a {...props} href="composers">{$_('routes.composers')}</a>
      </BreadcrumbItem>
      <BreadcrumbItem aria-current="page">
        {result.data.composers_by_pk.name}
        {result.data.composers_by_pk.surname}
      </BreadcrumbItem>
    </Breadcrumb>

    <h1>
      {result.data.composers_by_pk.name}
      {result.data.composers_by_pk.surname}
    </h1>

    {#each result.data.composers_by_pk.roled_composers as { id, work_roled_composers } (id)}
      {#if work_roled_composers.length > 0}
        <GridView numerableName="works" count={work_roled_composers.length}>
          {#each work_roled_composers as { work: { id, title, duration } } (id)}
            <WorkGridViewTile {id} {title} {duration} />
          {/each}
        </GridView>
      {:else}
        <GridView numerableName="works" />
      {/if}
    {/each}
  {/if}
{/await}
