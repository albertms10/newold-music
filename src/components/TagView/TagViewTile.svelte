<script lang="ts">
  import { ClickableTile, Column } from "carbon-components-svelte";

  export let title: string = undefined;
  export let meta: string = undefined;

  export let href: string = undefined;
  export let avatarUrl =
    "https://cdn.pixabay.com/photo/2016/10/02/00/36/clarinet-1708715_1280.jpg";

  export let sm = 4;
  export let md = 4;
  export let lg = 4;
</script>

<style>
  article {
    height: 100%;
  }

  .avatar {
    width: calc(100% + 2rem);
    margin: -0.5rem 1rem -0.5rem -0.5rem;
    overflow: hidden;
    background-position: center;
    background-position-y: 30%;
    background-repeat: no-repeat;
    background-size: cover;
    flex: 1;
  }

  .content {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .header {
    flex: 3;
  }

  :global(.tag-view-tile .bx--tile) {
    padding: 0.5rem;
  }

  :global(.tag-view-tile .bx--tile--clickable) {
    height: 100%;
  }

  :global(div[class^="bx--col"]) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
</style>

<svelte:options immutable />

<Column {sm} {md} {lg}>
  <article class="tag-view-tile">
    <ClickableTile {href}>
      <div class="content">
        <div class="avatar" style="background-image: url({avatarUrl})" />
        <div class="header">
          {#if title || $$slots.title}
            <h4>
              <slot name="title">{title}</slot>
            </h4>
          {/if}
          {#if meta || $$slots.meta}
            <p>
              <slot name="meta">{meta}</slot>
            </p>
          {/if}
        </div>
      </div>
    </ClickableTile>
  </article>
</Column>
