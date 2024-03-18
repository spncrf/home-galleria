import type { CmsField } from "decap-cms-core";

export const artworkCollectionPageContentFields: CmsField[] = [
  {
    name: `gallery`, // might need to be made unique
    label: `Gallery`,
    widget: "list",
    summary: "{{ fields.image }}",
    allow_add: true,
    label_singular: "Entry",
    fields: [
      {
        name: "image",
        label: "Image",
        widget: "image",
        choose_url: false,
      },
      {
        name: "alt_text",
        label: "Alt text",
        widget: "string",
      },
      {
        name: "description",
        label: "Description",
        widget: "text",
        required: false,
      },
    ],
  },
];

export const homeCollectionPageContentFields: CmsField[] = [
  {
    name: "intro",
    label: "Intro",
    widget: "text",
  },
  {
    name: "gallery_links",
    label: "Gallery Links",
    widget: "object",
    fields: [
      {
        name: "mural",
        label: "Mural Image",
        widget: "image",
        choose_url: false,
      },
      {
        name: "clock",
        label: "Clock Image",
        widget: "image",
        choose_url: false,
      },
    ],
  },
];

export const aboutCollectionPageContentFields: CmsField[] = [
  {
    name: "page_title",
    label: "Page Title",
    widget: "text",
  },
  {
    name: "intro",
    label: "About Title",
    widget: "text",
  },
];
