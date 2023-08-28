import { sample } from "./utils";

const BASE_COLORS = [
  "gray",
  "neutral",
  "warm",
  "red",
  "orange",
  "beige",
  "yellow",
  "green",
  "mint",
  "aqua",
  "blue",
  "royal",
  "purple",
  "pink",
];

const SHADES = ["400", "500", "600", "700", "800", "900"];

export const COLORS = BASE_COLORS.flatMap((c) =>
  SHADES.map((s) => `${c}-${s}`)
);

export const getRandomColors = (size: number) => sample(COLORS, size);
export const getRandomBackground = () => `has-bg-${sample(COLORS)}`;
export const getRandomText = () => `has-text-${sample(COLORS)}`;

export const THEME = [
  "primary",
  "secondary",
  "background",
  "text",
  "heading",
  "muted",
  "danger",
  "warning",
  "success",
  "polar.0",
  "polar.1",
  "polar.2",
  "polar.3",
  "snow.0",
  "snow.1",
  "snow.2",
  "frost.0",
  "frost.1",
  "frost.2",
  "frost.3",
  "aurora.0",
  "aurora.1",
  "aurora.2",
  "aurora.3",
  "aurora.4",
];
