<script lang="ts">
  import { Breadcrumb, BreadcrumbItem } from "carbon-components-svelte";
  import { _ } from "svelte-i18n";

  export let route: string = undefined;
  export let page: string = undefined;
</script>

<div class="bar">
  <Breadcrumb noTrailingSlash>
    <BreadcrumbItem href={route}>{$_(`routes.${route}`)}</BreadcrumbItem>
    <BreadcrumbItem aria-current="page">{page}</BreadcrumbItem>
  </Breadcrumb>
</div>

<style>
  .bar {
    margin-bottom: 2rem;
  }
</style>
