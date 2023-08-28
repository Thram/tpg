import { getRandomColors } from "./colors";

const KEYWORD_LISTS = [
  "camera-angle",
  "camera-framing",
  "camera-property",
  "photo-photographer",
  "photo-style",
  "pose-base",
  "setting-detail",
  "setting-landscape",
  "setting-lighting",
  "subject-base",
];

const getUrl = (list: string) =>
  `https://raw.githubusercontent.com/Thram/prompt-generator-data/main/${list}.txt`;

const getList = async (list: string) => {
  const data = await fetch(getUrl(list)).then((res) => res.text());
  if (!data) return [];
  return data
    .split(/\n/)
    .map((e) => ({ value: e.trim(), tags: list.split("-") }));
};

let entries: any;
let tags = Array.from(new Set(KEYWORD_LISTS.flatMap((t) => t.split("-"))));
let colors = getRandomColors(tags.length);

const load = async () =>
  (await Promise.all(KEYWORD_LISTS.map(getList))).flatMap((e) => [...e]);

export const getEntries = async () => {
  if (!entries) entries = await load();
  return entries;
};

export const getTagColor = (tag: string) => colors[tags.indexOf(tag)];
export const getTags = () => tags;
