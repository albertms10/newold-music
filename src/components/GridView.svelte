<script lang="ts">
  interface GridViewItem {
    id: number | string;
    title: string;
    meta?: string;
  }

  export let items: GridViewItem[];
</script>

<style>
  section {
    display: flex;
  }

  article {
    background-color: #fff;
  }
</style>

<section>
  {#each items as { id, title, meta } (id)}
    <article>
      <h3>{title}</h3>
      {#if meta}
        <p>{meta}</p>
      {/if}
    </article>
  {/each}
</section>
