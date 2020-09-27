<script lang="ts">
  import DataTable32 from "carbon-icons-svelte/lib/DataTable32";

  export let text: string = undefined;
</script>

<style>
  .empty {
    text-align: center;
    width: 100%;
    color: #777;
  }
</style>

<div class="empty">
  <DataTable32 />
  <h5>{text}</h5>
</div>
