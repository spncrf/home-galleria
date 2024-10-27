import { defineCollection, z } from "astro:content";

/**
 *  Collections
 *
 * Each collection should match a spec described by a list of fields defined within decap-cms/fields
 *
 * TODO: Create interface to tightly couple the cms and run-time zod definitions
 *
 */


const artwork_image = z.string();  // This string is a file path to artwork/*
const website_image = z.string(); // This string is a file path to src/images

// Shared Collections

const showcaseCollection = defineCollection({
  type: "data",
  schema: z.object({
    page_title: z.string(),
    gallery_artwork: z.array(artwork_image)
  }),
});

// Content Collection
const artwork = defineCollection({
  type: "content",
  schema: z.object({
    image_path: artwork_image,
    title: z.string().max(35),
    description: z.string().transform((v) => v ?? ''),
    date: z.string(),
  }),
});

// Data Collection
const home = defineCollection({
  type: "data",
  schema: z.object({
    home_prelude: z.string(),
    showcase_images: z.object({
      mural: website_image,
      clock: website_image,
    }),
  }),
});

const about = defineCollection({
  type: "data",
  schema: z.object({
    page_title: z.string(),
    intro_md: z.string(),
    intro_image: website_image,
    bio_md: z.string()
  }),
});

const contact = defineCollection({
  type: "data",
  schema: z.object({
    page_title: z.string(),
    contact_md: z.string(),
    success_md: z.string()
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
