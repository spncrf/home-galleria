import { defineCollection, z } from "astro:content";

const artworkCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    intro: z.string(),
    gallery: z.array(
      z.object({
        image: z.string(),
        alt_text: z.string(),
        description: z.string(),
      }),
    ),
  }),
});

const homeCollection = defineCollection({
  type: "data",
  schema: z.object({
    intro: z.string(),
    gallery_links: z.object({
      mural: z.string(),
      clock: z.string(),
    }),
  }),
});

const aboutCollection = defineCollection({
  type: "data",
  schema: z.object({
    intro: z.string(),
    page_title: z.string(),
  }),
});

export const collections = {
  home: homeCollection,
  artwork: artworkCollection,
  about: aboutCollection,
};
