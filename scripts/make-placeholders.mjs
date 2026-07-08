/**
 * Generates solid earthy-toned SVG placeholder images for every project
 * (cover + a standard set of figure slots) and the about-page scrapbook.
 *
 * Run:  node scripts/make-placeholders.mjs
 *
 * Safe to re-run; it overwrites existing placeholders but never touches
 * .jpg/.png files, so your real images are never at risk.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const projects = {
  mise: { title: "Mise", color: "#c9a68a" },
  "lefties-kitchen": { title: "Lefties Kitchen", color: "#a3b18a" },
  memomir: { title: "MemoMir", color: "#a89f91" },
  dash: { title: "Dash", color: "#8a9b84" },
  "solea-margot": { title: "Soléa Margot", color: "#b98b73" },
  forage: { title: "Forage", color: "#9caf88" },
  ripple: { title: "Ripple", color: "#c4a484" },
};

const figureSlots = [
  "research-1",
  "research-2",
  "sketches-1",
  "sketches-2",
  "iterations-1",
  "iterations-2",
  "prototype-1",
  "prototype-2",
  "final-1",
  "final-2",
];

const aboutImages = {
  fourteeners: { title: "14ers", color: "#8a9b84" },
  sourdough: { title: "Sourdough", color: "#c9a68a" },
  alaska: { title: "Alaska", color: "#7f8f7a" },
  guitar: { title: "Guitar", color: "#b98b73" },
  ubicomp: { title: "UbiComp / ISWC", color: "#a89f91" },
};

function svg({ w, h, color, title, label }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="${color}"/>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" font-family="Georgia, 'Times New Roman', serif" font-size="${Math.round(w / 16)}" fill="#faf7f1">${title}</text>
  <text x="48" y="${h - 44}" font-family="Georgia, serif" font-size="${Math.round(w / 50)}" fill="#faf7f1" opacity="0.75">${label} — placeholder, swap me</text>
</svg>\n`;
}

let count = 0;

for (const [slug, { title, color }] of Object.entries(projects)) {
  const dir = join(root, "public", "images", "projects", slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(
    join(dir, "cover.svg"),
    svg({ w: 1600, h: 1200, color, title, label: "cover" })
  );
  count++;
  for (const slot of figureSlots) {
    writeFileSync(
      join(dir, `${slot}.svg`),
      svg({ w: 1500, h: 1000, color, title, label: slot })
    );
    count++;
  }
}

const aboutDir = join(root, "public", "images", "about");
mkdirSync(aboutDir, { recursive: true });
for (const [name, { title, color }] of Object.entries(aboutImages)) {
  writeFileSync(
    join(aboutDir, `${name}.svg`),
    svg({ w: 1200, h: 1500, color, title, label: name })
  );
  count++;
}

console.log(`Generated ${count} placeholder images.`);
