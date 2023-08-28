<script lang="ts">
  import { entries } from "../helpers/keywords";
  import { getTags, getTagColor } from "../helpers/data";
  let tags = getTags();
  console.log($entries);
</script>

<div class="tags">
  <h2>Tags</h2>
  <div class="scrollable">
    <ul>
      {#each tags as t}
        <li>
          <span class={`badge tag has-m-1 has-bg-${getTagColor(t)}`}>{t}</span>
        </li>
      {/each}
    </ul>
  </div>
</div>
<div class="entries">
  <h2>Entries</h2>
  <div class="scrollable">
    {#each $entries as e}
      <span class="entry has-bg-heading has-m-1"
        >{e.value}
        {#each e.tags as t}
          <span class={`badge tag has-m-1 has-bg-${getTagColor(t)}`}>{t}</span>
        {/each}
      </span>
    {/each}
  </div>
</div>

<style lang="scss">
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .tag {
    filter: saturate(50%);
  }
  .entry {
    display: inline-flex;
    align-items: center;
    border: 1px solid #eee;
    padding: 4px 16px;
    border-radius: 10px;
  }
  .tags,
  .entries {
    display: flex;
    flex-direction: column;
  }

  .scrollable {
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
