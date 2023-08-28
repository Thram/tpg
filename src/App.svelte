<script lang="ts">
  import { onMount } from "svelte";
  import { SvelteToast } from "@zerodevx/svelte-toast";

  import { load, entries } from "./helpers/keywords";
  import Filter from "./components/Filter.svelte";
  import Prompt from "./components/Prompt.svelte";

  onMount(async () => {
    await load();
  });
  console.log($entries);
</script>

<main class="container is-flex has-direction-column">
  <div>
    <h1 class="has-text-muted">Thram's Prompt Generator</h1>
  </div>
  <div>
    <Prompt />
  </div>
  <div class="filter">
    <Filter />
  </div>
</main>
<SvelteToast />

<style>
  main {
    width: 100%;
    height: 100%;
  }
  .filter {
    flex: 1;
    overflow: hidden;
    display: flex;
  }
  /* .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  } */
</style>
