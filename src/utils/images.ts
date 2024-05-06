import type { ImageMetadata } from "astro";

export const getImageFromPath = (imagePath: string) => {
  const images = import.meta.glob<{ default: ImageMetadata }>(
    "/src/images/*.{jpeg,jpg,png,gif}",
  );
  let newPath = `/src/${imagePath}`; // figure out a way to not need to reconstruct this
  if (!images[newPath]) throw new Error(`${newPath} does not exist`);
  return images[newPath]();
};
