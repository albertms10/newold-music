<script lang="ts">
  import { DataTable, DataTableSkeleton } from "carbon-components-svelte";
  import client from "database/apollo";
  import type { CampaignContributorsListQuery } from "database/generated/operations";
  import { CAMPAIGN_CONTRIBUTORS_LIST } from "database/operations";
  import { query } from "svelte-apollo";
  import { _, number } from "svelte-i18n";
  import { title } from "utils/strings";

  export let campaignId: number;

  const contributors = query<CampaignContributorsListQuery>(client, {
    query: CAMPAIGN_CONTRIBUTORS_LIST,
    variables: { id: campaignId },
    pollInterval: 10000,
  });

  const headers = ["name", "quantity", "date"];
</script>

{#await $contributors}
  <DataTableSkeleton  />
{:then result}
  <DataTable
    title={title($_('terms.contributors', { values: { n: 0 } }))}
    rows={result.data.campaigns_contributors.map(
      ({ user, quantity, created_at }) => ({
        name: `${user.name} ${user.surname}`,
        quantity: $number(quantity),
        date: created_at,
      })
    )}
    headers={headers.map((header) => ({
      key: header,
      value: $_(`fields.${header}`),
    }))} />
{/await}
