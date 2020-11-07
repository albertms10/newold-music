<script context="module" lang="ts">
  import client from "database/apollo";
  import { WorkInfo } from "database/operations/Works.graphql";

  export async function preload({ params: { workId: id } }) {
    return {
      workCache: await client.query({
        query: WorkInfo,
        variables: { id },
      }),
    };
  }
</script>

<script lang="ts">
  import type { ApolloQueryResult } from "@apollo/client/core";
  import { Loading } from "carbon-components-svelte";
  import { ComposersTagView } from "components/Composers";
  import { PageHeader } from "components/Layout";
  import type { WorkInfoQuery } from "database/generated/operations";
  import { query, restore } from "svelte-apollo";
  import { _ } from "svelte-i18n";
  import { timeDuration } from "utils/datetime";

  export let workCache: ApolloQueryResult<WorkInfoQuery> = undefined;

  restore(WorkInfo, { data: workCache.data });

  const work = query<WorkInfoQuery>(WorkInfo);
</script>

<style>
  .tag-view {
    margin-top: 1rem;
  }
</style>

<svelte:head>
  <title>{$_('routes.shop')} — Newold Music</title>
</svelte:head>

{#await $work}
  <Loading small />
{:then result}
  {#if result && result.data && result.data.works_by_pk}
    <PageHeader title={result.data.works_by_pk.title} goBackRoute="shop" />

    <p>{timeDuration(result.data.works_by_pk.duration, {
      defaultText: $_("fields.no duration")
    })}</p>

    <div class="tag-view">
      <ComposersTagView items={result.data.works_by_pk.work_roled_composers} />
    </div>
  {/if}
{/await}
