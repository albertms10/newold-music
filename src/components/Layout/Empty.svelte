<script lang="ts">
  import DataTable32 from "carbon-icons-svelte/lib/DataTable32";

  export let text: string = undefined;
</script>

<div class="empty">
  <DataTable32 />
  <h5>{text}</h5>
</div>

<style>
  .empty {
    width: 100%;
    text-align: center;
    color: #777;
  }
</style>
