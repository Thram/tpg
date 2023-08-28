<script lang="ts">
  import { toast } from "@zerodevx/svelte-toast";
  import { PRESETS, generate } from "../helpers/prompt";
  import { entries } from "../helpers/keywords";
  import { writable } from "svelte/store";

  const prompt = writable<string[]>([]);
  const gen = () => prompt.set(generate(PRESETS.photo, $entries));
  const copy = () => {
    navigator.clipboard.writeText($prompt.join(", ").replace(/\[|\]/g, ""));
    toast.push("Copied!");
  };
</script>

<div
  class="is-flex has-direction-row has-w-full has-items-center has-h-32 has-text-center"
>
  <div class="prompt" on:click={copy}>
    {#each $prompt as p}
      <span class="badge has-m-1">{p}</span>
    {/each}
  </div>
  <button class="has-h-16" on:click={gen}> generate </button>
</div>
<div class="mask is-flex">
  <div>
    <span>Mask:</span>
    <select class="select has-bg-secondary">
      {#each Object.keys(PRESETS) as p}
        <option>{p}</option>
      {/each}
    </select>
  </div>
  <div class="selected-mask">
    {#each PRESETS.photo.split(",") as p}
      <span class={`badge tag has-m-1 has-bg-secondary`}>{p}</span>{/each}
  </div>
</div>

<style lang="scss">
  .prompt {
    flex: 1;
  }
  select {
    max-width: 200px;
  }
  .selected-mask {
    flex: 1;
    font-size: 0.8em;
    padding: 0.5em;
    text-wrap: balance;
    text-align: center;
  }

  button {
    will-change: filter;
    transition: filter 300ms;
  }

  button:hover {
    filter: drop-shadow(0 0 1em #646cffaa);
  }
  // .logo.svelte:hover {
  //   filter: drop-shadow(0 0 2em #ff3e00aa);
  // }
</style>
