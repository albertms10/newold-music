<script context="module" lang="ts">
  import client from "database/apollo";
  import { WORK_INFO } from "database/operations";

  export async function preload({ params }) {
    const { workId } = params;

    return {
      workCache: await client.query({
        query: WORK_INFO,
        variables: { id: workId },
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
  import { RoledComposersGridView } from "components/Composers";
  import type { WorkInfoQuery } from "database/generated/operations";
  import { query, restore } from "svelte-apollo";
  import { _ } from "svelte-i18n";
  import { timeDuration } from "utils/datetime";

  export let workCache: ApolloQueryResult<WorkInfoQuery>;

  restore(client, WORK_INFO, workCache.data);

  const work = query<WorkInfoQuery>(client, {
    query: WORK_INFO,
  });
</script>

<style>
  h1 {
    margin-bottom: 2rem;
  }
</style>

<svelte:head>
  <title>{$_('routes.shop')} — Newold Music</title>
</svelte:head>

{#await $work}
  <Loading small />
{:then result}
  {#if result && result.data && result.data.works_by_pk}
    <Breadcrumb noTrailingSlash>
      <BreadcrumbItem let:props>
        <a {...props} href="shop">{$_('routes.shop')}</a>
      </BreadcrumbItem>
      <BreadcrumbItem aria-current="page">
        {result.data.works_by_pk.title}
      </BreadcrumbItem>
    </Breadcrumb>

    <h1>{result.data.works_by_pk.title}</h1>

    <p>{timeDuration(result.data.works_by_pk.duration)}</p>

    <RoledComposersGridView
      items={result.data.works_by_pk.work_roled_composers}
    />
  {/if}
{/await}
