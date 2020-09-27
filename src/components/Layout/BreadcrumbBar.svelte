<script lang="ts">
  import { Breadcrumb, BreadcrumbItem } from "carbon-components-svelte";
  import { _ } from "svelte-i18n";

  export let route: string = undefined;
  export let page: string = undefined;
</script>

<style>
  .bar {
    margin-bottom: 2rem;
  }
</style>

<div class="bar">
  <Breadcrumb noTrailingSlash>
    <BreadcrumbItem let:props>
      <a {...props} href={route}>{$_(`routes.${route}`)}</a>
    </BreadcrumbItem>
    <BreadcrumbItem aria-current="page">{page}</BreadcrumbItem>
  </Breadcrumb>
</div>
