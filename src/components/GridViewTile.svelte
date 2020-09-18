<script lang="ts">
  import { ClickableTile, Column } from "carbon-components-svelte";

  export let title: string;
  export let meta: string = undefined;
  export let detail: string = undefined;
  export let href: string = undefined;
  export let avatarUrl =
    "https://pixabay.com/get/52e1d44b4f5aa414f1dc8460da29317e153bdce75b5076_640.jpg";

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
    margin: -1rem -1rem 1rem;
    overflow: hidden;
    background-position: center;
    background-position-y: 30%;
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

  .detail {
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
