import type { CmsConfig } from "decap-cms-core";
import {
  artworkCollectionPageContentFields,
  homeCollectionPageContentFields,
  aboutCollectionPageContentFields,
} from "./consts";
import { createDataCollection, setPageContentFile } from "./utilities";

/** Collections */
// Collections built using decorator pattern

// Home
let homeCollection = createDataCollection({ label: "Home", name: "home" });
homeCollection = setPageContentFile(
  homeCollection,
  homeCollectionPageContentFields,
);

// About
let aboutCollection = createDataCollection({ label: "About", name: "about" });
aboutCollection = setPageContentFile(
  aboutCollection,
  aboutCollectionPageContentFields,
);

// Mural
let muralCollection = createDataCollection({ label: "Mural", name: "mural" });
muralCollection = setPageContentFile(
  muralCollection,
  artworkCollectionPageContentFields,
);

// Clock
let clockCollection = createDataCollection({ label: "Clock", name: "clock" });
clockCollection = setPageContentFile(
  clockCollection,
  artworkCollectionPageContentFields,
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
    aboutCollection,
    muralCollection,
    clockCollection,
    homeCollection,
  ],
};

export default decapConfig;
