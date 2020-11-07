<script lang="ts">
  import Timer20 from "carbon-icons-svelte/lib/Timer20";
  import { _ } from "svelte-i18n";
  import { timeDuration } from "utils/datetime";
  import { GridViewTile, GridViewTileDetail } from "../GridView";

  export let id: number;
  export let title: string = undefined;
  export let composers: string[] = [];
  export let duration: string = undefined;
</script>

<GridViewTile
  aspectRatio="3x4"
  href="shop/{id}"
  lg={3}
  md={2}
  meta={composers.join(', ')}
  sm={2}
  {title}
>
  <div slot="details">
    <GridViewTileDetail
      icon={Timer20}
      label={timeDuration(duration, { defaultText: $_('fields.no duration')})}
    />
  </div>
</GridViewTile>
