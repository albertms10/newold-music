<script lang="ts">
  import { Grid, Row } from "carbon-components-svelte";
  import { _ } from "svelte-i18n";
  import { Empty } from "../Layout";

  export let numerableName: string = "items";
</script>

<section>
  <Grid>
    <Row>
      <slot>
        <Empty text={$_(`numerable.${numerableName}`, { values: { n: 0 } })} />
      </slot>
    </Row>
  </Grid>
</section>
