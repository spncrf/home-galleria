import type {
  CmsCollection,
  CmsField,
  CmsCollectionFile,
} from "decap-cms-core";

const webmasterDataCollectionConfig = {
  delete: false,
  files: [],
};

type WMDataCollectionConfig = Omit<
  CmsCollection,
  keyof typeof webmasterDataCollectionConfig
>;

interface WMFolderCollectionConfig extends CmsCollection {
  folder: string;
  fields: CmsField[];
}

/**
 * Collections that have been created by the website's webmaster
 * @param collectionConfig
 * @returns
 */
export const createFileCollection = (
  collectionConfig: WMDataCollectionConfig,
): CmsCollection => {
  return {
    ...collectionConfig,
    ...webmasterDataCollectionConfig,
  };
};

// In a Data collection, all files must have the same
export const setPageContentFile = (
  collection: CmsCollection,
  contentFields: CmsField[],
): CmsCollection => {
  const { label, name } = collection;
  const pageContentDataFile: CmsCollectionFile = {
    name: `${name}_page_content_data`,
    label: `${label} Page Content Data`,
    file: `src/content/${name}/data.json`,
    description: `Content for the ${label} Page`,
    fields: contentFields,
  };
  collection.files = [pageContentDataFile];
  return collection;
};

export const createFolderCollection = (
  collectionConfig: WMFolderCollectionConfig,
): CmsCollection => {
  const defaults: Partial<CmsCollection> = {
    create: true,
    delete: true,
    extension: "md",
  };
  return {
    ...defaults,
    ...collectionConfig,
  };
};
