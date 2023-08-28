import { get, writable } from "svelte/store";
import { getEntries } from "./data";

export type Entry = { value: string; tags: string[] };

export const entries = writable<Entry[]>([]);

export const load = async (force = false) => {
  const $entries = get(entries);
  if ($entries.length === 0 || force) entries.set(await getEntries());
};
