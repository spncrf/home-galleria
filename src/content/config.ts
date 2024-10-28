import { defineCollection, z } from "astro:content";

/**
 *  Collections
 *
 * Each collection should match a spec described by a list of fields defined within decap-cms/fields
 *
 * TODO: Create interface to tightly couple the cms and run-time zod definitions
 *
 */

/**
 * File path to `artwork/*`
 */
const artwork_image = z.string();

/**
 * File path to `src/images`
 */
const website_image = z.string();
/**
 * Content rendered via `<Markdown of={} />`
 */
const markdown = z.string();

// Shared Collections

const showcaseCollection = defineCollection({
  type: "data",
  schema: z.object({
    page_title: z.string(),
    gallery_artwork: z.array(artwork_image),
  }),
});

// Content Collection
const artwork = defineCollection({
  type: "content",
  schema: z.object({
    image_path: artwork_image,
    title: z.string().max(35),
    description: z.string().transform(v => v ?? ""),
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
      theme_room: website_image,
    }),
  }),
});

const about = defineCollection({
  type: "data",
  schema: z.object({
    page_title: z.string(),
    intro_md: markdown,
    intro_image: website_image,
    bio_md: markdown,
  }),
});

const contact = defineCollection({
  type: "data",
  schema: z.object({
    page_title: z.string(),
    contact_md: markdown,
    success_md: markdown,
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
