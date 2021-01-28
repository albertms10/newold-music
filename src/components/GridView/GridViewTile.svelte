<svelte:options immutable />

<script lang="ts">
  import { ClickableTile, Column } from "carbon-components-svelte";

  export let title: string = undefined;
  export let meta: string = undefined;
  export let hideDetailLine = false;

  export let href: string = undefined;
  export let avatarUrl =
    "https://cdn.pixabay.com/photo/2016/10/02/00/36/clarinet-1708715_1280.jpg";

  export let aspectRatio:
    | "2x1"
    | "16x9"
    | "9x16"
    | "1x2"
    | "4x3"
    | "3x4"
    | "1x1" = "4x3";
  export let sm = 4;
  export let md = 4;
  export let lg = 4;
</script>

<Column {aspectRatio} {lg} {md} {sm}>
  <article class="grid-view-tile">
    <ClickableTile {href}>
      <div class="content">
        <div class="avatar" style="background-image: url({avatarUrl})" />
        <div class="header">
          {#if title || $$slots.title}
            <h3>
              <slot name="title">{title}</slot>
            </h3>
          {/if}
          {#if meta || $$slots.meta}
            <p>
              <slot name="meta">{meta}</slot>
            </p>
          {/if}
        </div>
        {#if $$slots.details}
          <div class="details">
            {#if !hideDetailLine}
              <hr />
            {/if}
            <slot name="details" />
          </div>
        {/if}
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
    min-height: 8rem;
    margin: -1rem -1rem 1rem;
    background-repeat: no-repeat;
    background-position: center;
    background-position-y: 30%;
    background-size: cover;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .header {
    flex: 0;
  }

  .details {
    flex: 0;
    color: #777;
  }

  :global(.grid-view-tile .bx--tile--clickable) {
    height: 100%;
  }

  :global(div[class^="bx--col"]) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
</style>
