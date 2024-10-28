import type { ImageMetadata } from "astro";

const images = import.meta.glob<{ default: ImageMetadata }>(
  "/src/images/*.{jpeg,jpg,png,gif}",
);

export const getImageFromPath = (imagePath: string) => {
  let newPath = `/src/${imagePath}`; // figure out a way to not need to reconstruct this
  if (!images[newPath]) throw new Error(`${newPath} does not exist`);
  return images[newPath]();
};
