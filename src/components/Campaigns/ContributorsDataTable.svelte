<script lang="ts">
  import { DataTable, DataTableSkeleton } from "carbon-components-svelte";
  import type { CampaignContributorsListQuery } from "database/generated/operations";
  import { CampaignContributorsList } from "database/operations/Campaigns.graphql";
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
  import { query } from "svelte-apollo";
  import { number, _ } from "svelte-i18n";
  import { title } from "utils/strings";

  dayjs.extend(relativeTime);

  export let campaignId: number;

  const contributors = query<CampaignContributorsListQuery>(
    CampaignContributorsList,
    {
      variables: { id: campaignId },
      pollInterval: 10000,
    }
  );

  const headersList = ["name", "contribution", "date"] as const;

  const headersMethods = [
    {},
    {
      display: (quantity) => $number(quantity, { format: "EUR" }),
    },
    {
      display: (date) => dayjs(date).fromNow(),
      sort: (a, b) => (dayjs(a.date).isBefore(dayjs(b.date)) ? -1 : 1),
    },
  ];

  const headers = headersList.map((header: string, index) => ({
    key: header,
    value: $_(`fields.${header}`),
    ...headersMethods[index],
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
    contribution: quantity,
    date: created_at,
  });
</script>

{#await $contributors}
  <DataTableSkeleton headers={[...headersList]} zebra />
{:then result}
  <DataTable
    title={title($_('terms.contributors', { values: { n: 0 } }))}
    description={$_('descriptions.users list')}
    {headers}
    rows={result.data ? result.data.campaigns_contributors.map(mapContributorRow) : []}
    sortable
    stickyHeader
    zebra
  />
{/await}
