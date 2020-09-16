<script lang="ts">
  import type { ApolloQueryResult } from "apollo-boost";
  import { Loading } from "carbon-components-svelte";
  import { query, restore } from "svelte-apollo";
  import GridView from "../components/GridView.svelte";
  import { client } from "../database/apollo";
  import type { ComposerListQuery } from "../database/generated/operations";
  import type { Composer } from "../database/generated/types";
  import { COMPOSER_LIST } from "../database/operations";

  export let composerCache: ApolloQueryResult<Composer>;

  restore(client, COMPOSER_LIST, composerCache.data);

  const composers = query<ComposerListQuery>(client, {
    query: COMPOSER_LIST,
  });
</script>

{#await $composers}
  <Loading small />
{:then { data }}
  <GridView
    numerableName="composers"
    items={data.composer.map(({ id, name, surname }) => ({
      id,
      title: `${name} ${surname}`,
    }))} />
{/await}
