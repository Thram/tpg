import type { Entry } from "./keywords";
import { sample } from "./utils";

export const PRESETS: { [k: string]: string } = {
  photo:
    "[photo-style] photo of a [subject], [setting-detail], [pose], [camera-framing], [setting-landscape], [setting-lighting], [camera-angle], [camera-property],in style of [photo-photographer]",
};

export const generate = (mask: string, entries: Entry[]) => {
  if (!entries) return [];
  const masks = mask.split(",").map((k) => k.trim());
  const promptList = masks.map((m) => {
    const filter = m.match(/\[(.*?)\]/g)!.map((f) => f.replace(/(\[|\])/g, ""));
    if (!filter) return m;
    for (const f of filter) {
      const tags = f.split("-");
      const keyword = sample(
        entries.filter((e) => tags.every((t) => e.tags.includes(t)))
      );
      m = m.replace(`${f}`, keyword[0].value);
    }
    return m;
  });
  return promptList;
};
