<script context="module">
  import { client } from "database/apollo";
  import { COMPOSER_INFO } from "database/operations";

  export async function preload({ params }) {
    const { id } = params;

    return {
      composerCache: await client.query({
        query: COMPOSER_INFO,
        variables: { id },
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
  import Timer20 from "carbon-icons-svelte/lib/Timer20";
  import GridView from "components/GridView/GridView.svelte";
  import GridViewTile from "components/GridView/GridViewTile.svelte";
  import GridViewTileDetail from "components/GridView/GridViewTileDetail.svelte";
  import type { ComposerInfoQuery } from "database/generated/operations";
  import { query, restore } from "svelte-apollo";
  import { _ } from "svelte-i18n";
  import { timeDuration } from "utils/datetime";

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
          {#each work_roled_composers as { work } (work.id)}
            <GridViewTile href={`shop/${work.id}`}>
              <span slot="title">{work.title}</span>
              <div slot="details">
                <GridViewTileDetail
                  icon={Timer20}
                  label={timeDuration(work.duration)} />
              </div>
            </GridViewTile>
          {/each}
        </GridView>
      {:else}
        <GridView numerableName="works" />
      {/if}
    {/each}
  {/if}
{/await}
