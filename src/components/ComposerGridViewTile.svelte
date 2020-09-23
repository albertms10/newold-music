<script lang="ts">
  import Product20 from "carbon-icons-svelte/lib/Product20";
  import { _ } from "svelte-i18n";
  import GridViewTile from "./GridView/GridViewTile.svelte";
  import GridViewTileDetail from "./GridView/GridViewTileDetail.svelte";

  export let id: number;
  export let composer: string = undefined;
  export let worksCount: number = undefined;
</script>

<GridViewTile href="composers/{id}">
  <span slot="title">{composer}</span>
  <div slot="details">
    <GridViewTileDetail
      icon={Product20}
      label={$_('numerable.works', { values: { n: worksCount } })} />
  </div>
</GridViewTile>
