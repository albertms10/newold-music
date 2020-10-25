<script lang="ts">
  import { DataTable, DataTableSkeleton } from "carbon-components-svelte";
  import type { CampaignContributorsListQuery } from "database/generated/operations";
  import { CampaignContributors } from "database/operations/Campaigns.graphql";
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
  import { subscribe } from "svelte-apollo";
  import { number, _ } from "svelte-i18n";
  import { title } from "utils/strings";

  dayjs.extend(relativeTime);

  export let campaignId: number;

  const contributors = subscribe<CampaignContributorsListQuery>(
    CampaignContributors,
    { variables: { id: campaignId } }
  );

  const headersList = ["name", "contribution", "date"] as const;

  interface Header<T = unknown> {
    key: string;
    value: string;
    display?: (value: T) => string;
    sort?: (a: T, b: T) => number;
  }

  type Row = {
    [P in typeof headersList[number] | "id"]: string;
  };

  const headersMethods: [Partial<Header<string>>, Partial<Header<number>>, Partial<Header<string>>] = [
    {},
    {
      display: (quantity) => $number(quantity, { format: "EUR" }),
    },
    {
      display: (date) => dayjs(date).fromNow(),
      sort: (a, b) => (dayjs(a).isBefore(dayjs(b)) ? -1 : 1),
    },
  ];

  const headers = headersList.map((header: string, index): Header<string | number> => ({
    key: header,
    value: $_(`fields.${header}`),
    ...headersMethods[index],
  }));

  $: mapContributorRow = ({
    id,
    user,
    quantity,
    created_at,
  }): Row => ({
    id,
    name: `${user.name} ${user.surname}`,
    contribution: quantity,
    date: created_at,
  });

  $: console.log($contributors);
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
