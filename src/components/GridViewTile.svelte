<script lang="ts">
  import { ClickableTile, Column } from "carbon-components-svelte";

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

<style>
  article {
    height: 100%;
  }

  .avatar {
    width: calc(100% + 2rem);
    min-height: 8rem;
    margin: -1rem -1rem 1rem;
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
    flex-direction: column;
    justify-content: space-between;
  }

  .header {
    flex: 0;
  }

  .details {
    color: #777;
    flex: 0;
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

<Column {aspectRatio} {sm} {md} {lg}>
  <article>
    <ClickableTile {href}>
      <div class="content">
        <div class="avatar" style={`background-image: url(${avatarUrl})`} />
        <div class="header">
          {#if $$slots.title}
            <h3>
              <slot name="title" />
            </h3>
          {/if}
          {#if $$slots.meta}
            <p>
              <slot name="meta" />
            </p>
          {/if}
        </div>
        {#if $$slots.details}
          <div class="details">
            <hr />
            <slot name="details" />
          </div>
        {/if}
      </div>
    </ClickableTile>
  </article>
</Column>
