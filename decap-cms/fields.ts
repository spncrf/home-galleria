import type { CmsField } from "decap-cms-core";

export const homeCollectionPageContentFields: CmsField[] = [
  {
    name: "home_prelude",
    label: "Home Page Prelude",
    widget: "text",
  },
  {
    name: "showcase_images",
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

export const contactCollectionPageContentFields: CmsField[] = [
  {
    name: "page_title",
    label: "Contact Page Title",
    widget: "string",
  },
  {
    name: "contact_prelude",
    label: "Contact Prelude",
    widget: "text",
  },
];

export const aboutCollectionPageContentFields: CmsField[] = [
  {
    name: "page_title",
    label: "About Page Title",
    widget: "string",
  },
  {
    name: "intro_md",
    label: "Intro Text",
    widget: "markdown",
  },
  {
    name: "intro_image",
    label: "Intro Picture",
    widget: "image",
  },
  {
    name: "bio_md",
    label: "Biography",
    widget: "markdown",
  },
];

export const showcaseCollectionPageContentFields = (
  showcaseName: string,
): CmsField[] => {
  return [
    {
      name: "page_title",
      label: `${showcaseName} Page Title`,
      widget: "string",
    },
    {
      name: "gallery_artwork", // might need to be made unique
      label: `Gallery Artwork`,
      widget: "list",
      summary: "{{field.title}}", // this should be something else,
      allow_add: true,
      label_singular: "Entry",
      collapsed: false,
      field: {
        label: "Artwork",
        name: "artwork_reference",
        widget: "relation",
        collection: "artwork",
        value_field: "{{slug}}",
        search_fields: ["title", "image_path"],
        display_fields: ["title"],
      },
    },
  ];
};

export const artworkCollectionFields: CmsField[] = [
  {
    name: "image_path",
    label: "Image",
    widget: "image",
    choose_url: false,
  },
  {
    name: "title",
    label: "Artwork Name",
    widget: "string",
    pattern: ["^.{0,35}$", "No more than 35 characters"],
  },
  {
    name: "description",
    label: "Artwork Description",
    widget: "text",
    required: false,
  },
  {
    name: "date",
    label: "Date",
    widget: "datetime",
    default: "",
    date_format: "MM/DD/YYYY",
    time_format: false,
    format: "LLL",
    picker_utc: false,
    required: false,
  },
];
