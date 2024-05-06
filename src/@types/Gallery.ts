import type { InferEntrySchema } from "astro:content";

export interface Gallery {
  id: string;
  entries: InferEntrySchema<"artwork">[];
}
