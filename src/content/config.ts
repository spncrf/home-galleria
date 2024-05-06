import { defineCollection, z } from "astro:content";

/**
 *  Collections
 *
 * Each collection should match a spec described by a list of fields defined within decap-cms/fields
 *
 * TODO: Create interface to tightly couple the cms and run-time zod definitions
 *
 */
// Shared Collections

const showcaseCollection = defineCollection({
  type: "data",
  schema: z.object({
    page_title: z.string(),
    gallery_artwork: z.array(z.string()), // This string is a file name under artwork/*
  }),
});

// Content Collection
const artwork = defineCollection({
  type: "content",
  schema: z.object({
    image_path: z.string(),
    title: z.string(),
    description: z.string(),
    date: z.string(),
  }),
});

// Data Collection
const home = defineCollection({
  type: "data",
  schema: z.object({
    home_prelude: z.string(),
    showcase_images: z.object({
      mural: z.string(),  // file name in src/images
      clock: z.string(),
    }),
  }),
});

const about = defineCollection({
  type: "data",
  schema: z.object({
    page_title: z.string(),
    about_text: z.string(),
    about_picture: z.string()
  }),
});

const contact = defineCollection({
  type: "data",
  schema: z.object({
    page_title: z.string(),
    contact_prelude: z.string(),
  }),
});

// Each entry here should be a sibling folder name
export const collections = {
  about,
  home,
  contact,
  artwork,
  showcase_mural: showcaseCollection,
  showcase_clock: showcaseCollection,
  showcase_theme_room: showcaseCollection,
};
