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
  import { Loading } from "carbon-components-svelte";
  import { PageHeader } from "components/Layout";
  import { ComposerWorksGridView } from "components/Works";
  import type { ComposerInfoQuery } from "database/generated/operations";
  import { query, restore } from "svelte-apollo";
  import { _ } from "svelte-i18n";

  export let composerCache: ApolloQueryResult<ComposerInfoQuery>;

  restore(client, COMPOSER_INFO, composerCache.data);

  const composer = query<ComposerInfoQuery>(client, {
    query: COMPOSER_INFO,
  });

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
  <title>{$_('routes.composers')} — Newold Music</title>
</svelte:head>

{#await $composer}
  <Loading small />
{:then result}
  {#if result && result.data && result.data.composers_by_pk}
    <PageHeader
      title="{result.data.composers_by_pk.name} {result.data.composers_by_pk.surname}"
      goBackRoute="composers"
    />

    <ComposerWorksGridView
      items={getComposerRoledWorks(result.data.composers_by_pk.roled_composers)}
    />
  {/if}
{/await}
