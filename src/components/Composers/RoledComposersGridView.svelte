<script lang="ts">
  import type { WorkInfoQuery } from "database/generated/operations";
  import { _ } from "svelte-i18n";
  import { GridView } from "../GridView";
  import ComposerGridViewTile from "./ComposerGridViewTile.svelte";

  export let numerableName = "composers";
  export let items: WorkInfoQuery["works_by_pk"]["work_roled_composers"] = [];
</script>

<GridView {numerableName} count={items.length}>
  {#each items as { roled_composer } (roled_composer.composer.id)}
    <ComposerGridViewTile
      id={roled_composer.composer.id}
      composer="{roled_composer.composer.name} {roled_composer.composer.surname}"
      role={$_(`terms.${roled_composer.composer_role.role}s`, {
        values: { n: 1 },
      })}
    />
  {/each}
</GridView>
