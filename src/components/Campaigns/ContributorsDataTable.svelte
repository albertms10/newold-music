<script lang="ts">
  import { DataTable, DataTableSkeleton } from "carbon-components-svelte";
  import client from "database/apollo";
  import type { CampaignContributorsListQuery } from "database/generated/operations";
  import { CampaignContributorsList } from "database/operations/Campaigns.graphql";
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
  import { query } from "svelte-apollo";
  import { number, _ } from "svelte-i18n";
  import { title } from "utils/strings";

  dayjs.extend(relativeTime);

  export let campaignId: number;

  const contributors = query<CampaignContributorsListQuery>(client, {
    query: CampaignContributorsList,
    variables: { id: campaignId },
    pollInterval: 10000,
  });

  const headersList = ["name", "contribution", "date"] as const;

  const headers = headersList.map((header: string) => ({
    key: header,
    value: $_(`fields.${header}`),
  }));

  type DataTableRows = {
    [P in typeof headersList[number] | "id"]: string;
  };

  $: mapContributorRow = ({
    id,
    user,
    quantity,
    created_at,
  }): DataTableRows => ({
    id,
    name: `${user.name} ${user.surname}`,
    contribution: $number(quantity, { format: "EUR" }),
    date: dayjs(created_at).fromNow(),
  });
</script>

{#await $contributors}
  <DataTableSkeleton zebra />
{:then result}
  <DataTable
    title={title($_('terms.contributors', { values: { n: 0 } }))}
    description={$_('descriptions.users list')}
    {headers}
    rows={result.data.campaigns_contributors.map(mapContributorRow)}
    sortable
    stickyHeader
    zebra
  />
{/await}
