<script context="module" lang="ts">
  import client from "database/apollo";
  import { ComposerInfo } from "database/operations/Composers.graphql";

  export async function preload({ params: { composerId: id } }) {
    return {
      composerCache: await client.query({
        query: ComposerInfo,
        variables: { id },
      }),
    };
  }
</script>

<script lang="ts">
  import type { ApolloQueryResult } from "@apollo/client/core";
  import { Loading } from "carbon-components-svelte";
  import { PageHeader } from "components/Layout";
  import { ComposerWorksGridView } from "components/Works";
  import type { ComposerInfoQuery } from "database/generated/operations";
  import { query, restore } from "svelte-apollo";
  import { _ } from "svelte-i18n";

  export let composerCache: ApolloQueryResult<ComposerInfoQuery> = undefined;

  restore(ComposerInfo, { data: composerCache.data });

  const composer = query<ComposerInfoQuery>(ComposerInfo);

  const getComposerRoledWorks = (
    roled_composers: ComposerInfoQuery["composers_by_pk"]["roled_composers"]
  ) => {
    const works = [];

    roled_composers.forEach((roled_composer) => {
      works.push(
        ...roled_composer.work_roled_composers.map((work_roled_composer) => ({
          ...roled_composer,
          ...work_roled_composer,
        }))
      );
    });

    return works;
  };
</script>

<svelte:head>
  <title>{$_("routes.composers")} — Newold Music</title>
</svelte:head>

{#await $composer}
  <Loading small />
{:then result}
  {#if result && result.data && result.data.composers_by_pk}
    <PageHeader
      title="{result.data.composers_by_pk.name} {result.data.composers_by_pk
        .surname}"
      goBackRoute="composers"
    />

    <ComposerWorksGridView
      items={getComposerRoledWorks(result.data.composers_by_pk.roled_composers)}
    />
  {/if}
{/await}
