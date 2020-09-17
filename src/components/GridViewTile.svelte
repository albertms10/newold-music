<script lang="ts">
  import { ClickableTile, Column } from "carbon-components-svelte";

  export let title: string;
  export let meta: string = undefined;
  export let detail: string = undefined;
  export let href: string = undefined;
</script>

<style>
  article {
    height: 100%;
  }

  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .detail {
    color: #777;
  }

  :global(.bx--tile--clickable) {
    height: 100%;
  }

  :global(div[class^="bx--col"]) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
</style>

<svelte:options immutable />

<Column sm={1} md={2} lg={4} xlg={5}>
  <article>
    <ClickableTile {href}>
      <div class="content">
        <div class="header">
          <h3>{title}</h3>
          {#if meta}
            <p>{meta}</p>
          {/if}
        </div>
        {#if detail}
          <div class="detail">
            <hr />
            <p>{detail}</p>
          </div>
        {/if}
      </div>
    </ClickableTile>
  </article>
</Column>
