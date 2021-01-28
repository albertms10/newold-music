<script lang="ts">
  import type { WorkInfoQuery } from "database/generated/operations";
  import { _ } from "svelte-i18n";
  import { titleCase } from "utils/strings";
  import { TagView, TagViewTile } from "../TagView";

  export let numerableName = "composers";
  export let items: WorkInfoQuery["works_by_pk"]["work_roled_composers"] = [];
</script>

<TagView {numerableName}>
  {#each items as { roled_composer } (roled_composer.composer.id)}
    <TagViewTile
      title="{roled_composer.composer.name} {roled_composer.composer.surname}"
      meta={titleCase(
        $_(`terms.${roled_composer.composer_role.role}s`, {
          values: { n: 1 },
        })
      )}
      href="composers/{roled_composer.composer.id}"
    />
  {/each}
</TagView>
