import type {
  CmsCollection,
  CmsField,
  CmsCollectionFile,
} from "decap-cms-core";

const webmasterCollectionConfig = {
  delete: false,
  files: [],
};

type WMCollectionConfig = Omit<
  CmsCollection,
  keyof typeof webmasterCollectionConfig
>;

/**
 * Collections that have been created by the website's webmaster
 * @param collectionConfig
 * @returns
 */
export const createDataCollection = (
  collectionConfig: WMCollectionConfig,
): CmsCollection => {
  return {
    ...collectionConfig,
    ...webmasterCollectionConfig,
  };
};

// In a Data collection, all files must have the same
export const setPageContentFile = (
  collection: CmsCollection,
  contentFields: CmsField[],
): CmsCollection => {
  const { label, name } = collection;
  const pageContentFile: CmsCollectionFile = {
    name: `${name}_page_content`,
    label: `${label} Page Content`,
    file: `src/content/${name}/content.json`,
    description: `Content for the ${label} Page`,
    fields: contentFields,
  };
  collection.files = [pageContentFile];
  return collection;
};
