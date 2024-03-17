import type { CmsCollection, CmsConfig } from "decap-cms-core";

const artCollection: CmsCollection = {
  name: "artwork",
  label: "Artwork",
  folder: "src/content/artwork",
  create: true,
  fields: [
    {
      name: "title",
      label: "Title",
      widget: "string",
    },
    {
      name: "intro",
      label: "Intro",
      widget: "text",
    },
    {
      name: "gallery",
      label: "Gallery",
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
  ],
};

const homeCollection: CmsCollection = {
  name: "home",
  label: "Home",
  delete: false,
  files: [
    {
      name: "data",
      label: "Home Page Data",
      file: "src/content/home/data.json",
      description: "Content for the Home Page",
      fields: [
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
      ],
    },
  ],
};

const aboutCollection: CmsCollection = {
  name: "about",
  label: "About",
  delete: false,
  files: [
    {
      name: "data",
      label: "About Page Data",
      file: "src/content/home/data.json",
      description: "Content for the About Page",
      fields: [
        {
          name: "page_title",
          label: "About",
          widget: "string",
        },
        {
          name: "intro",
          label: "Intro",
          widget: "markdown",
        },
      ],
    },
  ],
};

const collections: CmsCollection[] = [
  aboutCollection,
  artCollection,
  homeCollection,
];

const decapConfig: CmsConfig = {
  backend: {
    commit_messages: {
      create: '{{ author-name }}: Create {{ collection }} {{ slug }}',
      update: '{{ author-name }}: Update {{ collection }} {{ slug }}',
      delete: '{{ author-name }}: Delete {{ collection }} {{ slug }}',
      uploadMedia: '{{ author-name }}: Upload {{ path }}',
      deleteMedia: '{{ author-name }}: Delete {{ path }}',
    },
    name: "git-gateway",
    repo: "spncrf/home-galleria",
    branch: "main",
    squash_merges: true,
  },
  editor: {
    preview: false,
  },
  publish_mode: "simple",
  media_folder: "src/images",
  public_folder: "images",
  collections,
};

export default decapConfig;
