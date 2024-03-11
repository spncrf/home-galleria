import { defineCollection, z } from "astro:content";

const home = defineCollection({
    type: 'content',
    schema: z.object({
        tile_preview_images: z.object({
            mural: z.string(),
            clock: z.string()
        }),
        about: z.string()
    })
})

export const collection = { home };