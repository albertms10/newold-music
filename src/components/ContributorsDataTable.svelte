<script lang="ts">
  import { DataTable, DataTableSkeleton } from "carbon-components-svelte";
  import client from "database/apollo";
  import type { CampaignContributorsListQuery } from "database/generated/operations";
  import { CAMPAIGN_CONTRIBUTORS_LIST } from "database/operations";
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
  import { query } from "svelte-apollo";
  import { number, _ } from "svelte-i18n";
  import { title } from "utils/strings";

  dayjs.extend(relativeTime);

  export let campaignId: number;

  const contributors = query<CampaignContributorsListQuery>(client, {
    query: CAMPAIGN_CONTRIBUTORS_LIST,
    variables: { id: campaignId },
    pollInterval: 10000,
  });

  const headersList = ["name", "quantity", "date"] as const;

  const headers = headersList.map((header: string) => ({
    key: header,
    value: $_(`fields.${header}`),
  }));

  type DataTableRows = {
    [P in typeof headersList[number]]: string;
  };

  $: mapContributorRow = ({ user, quantity, created_at }): DataTableRows => ({
    name: `${user.name} ${user.surname}`,
    quantity: $number(quantity, { format: "EUR" }),
    date: dayjs(created_at).fromNow(),
  });
</script>

{#await $contributors}
  <DataTableSkeleton zebra />
{:then result}
  <DataTable
    title={title($_('terms.contributors', { values: { n: 0 } }))}
    description="Llista d’usuaris que han participat en la campanya"
    {headers}
    rows={result.data.campaigns_contributors.map(mapContributorRow)}
    sortable
    stickyHeader
    zebra
  />
{/await}
