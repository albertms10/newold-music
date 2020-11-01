<script lang="ts">
  import Timer20 from "carbon-icons-svelte/lib/Timer20";
  import { _ } from 'svelte-i18n';
  import { timeDuration } from "utils/datetime";
  import { GridViewTile, GridViewTileDetail } from "../GridView";

  export let id: number;
  export let title: string = undefined;
  export let composers: string[] = [];
  export let duration: string = undefined;
</script>

<GridViewTile
  {title}
  meta={composers.join(', ')}
  href="shop/{id}"
  aspectRatio="3x4"
  sm={2}
  md={2}
  lg={3}
>
  <div slot="details">
    <GridViewTileDetail
      icon={Timer20}
      label={timeDuration(duration, { defaultText: $_('fields.no duration')})}
    />
  </div>
</GridViewTile>
