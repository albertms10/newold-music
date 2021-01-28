<svelte:options immutable />

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

<Column {lg} {md} {sm}>
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

<style>
  article {
    height: 100%;
  }

  .avatar {
    overflow: hidden;
    flex: 1;
    width: calc(100% + 2rem);
    margin: -0.5rem 1rem -0.5rem -0.5rem;
    background-repeat: no-repeat;
    background-position: center;
    background-position-y: 30%;
    background-size: cover;
  }

  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
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
