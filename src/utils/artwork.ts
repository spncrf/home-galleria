import { getEntries, type ValidContentEntrySlug } from "astro:content";
export const getArtworkEntries = async <T extends string>(references: T[]) => {
  const artworkCollection = "artwork" as const;

  const artworkEntries = (references as ValidContentEntrySlug<"artwork">[]).map(
    reference => ({ collection: artworkCollection, slug: reference }),
  );
  const entries = await getEntries(artworkEntries);
  return entries.map(entry => ({ ...entry.data, slug: entry.slug }));
};

export const getArtworkEntry = async <T extends string>(reference: T) => {
  return (await getArtworkEntries([reference]))[0];
};
