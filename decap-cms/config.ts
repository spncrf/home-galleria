import type { CmsConfig } from 'decap-cms-core';
import { addPageContentFile, createWMCollection } from './utilities';
import { artworkCollectionPageContentFields, homeCollectionPageContentFields, aboutCollectionPageContentFields } from './consts';

/** Collections */
// Collections built using decorator pattern

// Home
let homeCollection = createWMCollection({ label: "Home", name: "home" });
homeCollection = addPageContentFile(homeCollection, homeCollectionPageContentFields)

// About
let aboutCollection = createWMCollection({ label: "About", name: "about" });
aboutCollection = addPageContentFile(aboutCollection, aboutCollectionPageContentFields);

// Mural
let muralCollection = createWMCollection({ label: "Mural", name: "mural" });
muralCollection = addPageContentFile(muralCollection, artworkCollectionPageContentFields);

// Clock
let clockCollection = createWMCollection({ label: "Clock", name: "clock" });
clockCollection = addPageContentFile(clockCollection, artworkCollectionPageContentFields);

/** Config */
const decapConfig: CmsConfig =  {
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
}
export default decapConfig;
