<script lang="ts">
  import Timer20 from "carbon-icons-svelte/lib/Timer20";
  import { timeDuration } from "utils/datetime";
  import GridViewTile from "./GridView/GridViewTile.svelte";
  import GridViewTileDetail from "./GridView/GridViewTileDetail.svelte";

  export let id: number;
  export let title: string = undefined;
  export let composers: string[] = [];
  export let duration: string = undefined;
</script>

<GridViewTile {title} meta={composers.join(', ')} href="shop/{id}">
  <div slot="details">
    <GridViewTileDetail icon={Timer20} label={timeDuration(duration)} />
  </div>
</GridViewTile>
