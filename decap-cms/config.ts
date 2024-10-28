import type { CmsConfig } from "decap-cms-core";
import {
  showcaseCollectionPageContentFields,
  homeCollectionPageContentFields,
  aboutCollectionPageContentFields,
  contactCollectionPageContentFields,
  artworkCollectionFields,
} from "./fields";
import {
  createFolderCollection,
  createFileCollection,
  setPageContentFile,
} from "./utilities";

/** Collections */
// Collections built using decorator pattern

// Artwork
let artworkCollection = createFolderCollection({
  label: "Artwork",
  name: "artwork",
  folder: "src/content/artwork",
  fields: artworkCollectionFields,
  slug: "{{title}}",
});

// Home
let homeCollection = createFileCollection({ label: "Home", name: "home" });
homeCollection = setPageContentFile(
  homeCollection,
  homeCollectionPageContentFields,
);

// About
let aboutCollection = createFileCollection({ label: "About", name: "about" });
aboutCollection = setPageContentFile(
  aboutCollection,
  aboutCollectionPageContentFields,
);

// Contact
let contactCollection = createFileCollection({
  label: "Contact",
  name: "contact",
});
contactCollection = setPageContentFile(
  contactCollection,
  contactCollectionPageContentFields,
);

// Mural Showcase
let muralShowcaseCollection = createFileCollection({
  label: "Mural Showcase",
  name: "showcase_mural",
});
muralShowcaseCollection = setPageContentFile(
  muralShowcaseCollection,
  showcaseCollectionPageContentFields("Mural"),
);

// Clock Showcase
let clockShowcaseCollection = createFileCollection({
  label: "Clock Showcase",
  name: "showcase_clock",
});
clockShowcaseCollection = setPageContentFile(
  clockShowcaseCollection,
  showcaseCollectionPageContentFields("Clock"),
);

// Theme Room Showcase
let themeRoomShowcaseCollection = createFileCollection({
  label: "Theme Room Showcase",
  name: "showcase_theme_room",
});
themeRoomShowcaseCollection = setPageContentFile(
  themeRoomShowcaseCollection,
  showcaseCollectionPageContentFields("Theme Room"),
);

/** Config */
const decapConfig: CmsConfig = {
  backend: {
    commit_messages: {
      create: "{{ author-name }}: Create {{ collection }} {{ slug }}",
      update: "{{ author-name }}: Update {{ collection }} {{ slug }}",
      delete: "{{ author-name }}: Delete {{ collection }} {{ slug }}",
      uploadMedia: "{{ author-name }}: Upload {{ path }}",
      deleteMedia: "{{ author-name }}: Delete {{ path }}",
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
  collections: [
    artworkCollection,
    homeCollection,
    aboutCollection,
    contactCollection,
    muralShowcaseCollection,
    clockShowcaseCollection,
    themeRoomShowcaseCollection,
  ],
};

export default decapConfig;
