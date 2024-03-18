import { defineCollection, z } from "astro:content";

// Shared Collections

const artworkCollection = defineCollection({
  type: "data",
  schema: z.object({
    gallery: z.array(
      z.object({
        image: z.string(),
        alt_text: z.string(),
        description: z.string(),
      }),
    ),
  }),
});


// Content Collections

const about = defineCollection({
  type: "data",
  schema: z.object({
    intro: z.string(),
    page_title: z.string(),
  }),
});

const clock = artworkCollection;

const home = defineCollection({
  type: "data",
  schema: z.object({
    intro: z.string(),
    gallery_links: z.object({
      mural: z.string(),
      clock: z.string(),
    }),
  }),
});


const mural = artworkCollection;


export const collections = {
    about,
    clock,
    home,
    mural
};
