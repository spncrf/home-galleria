import type { CmsCollection, CmsField,  CmsCollectionFile } from 'decap-cms-core';

interface CollectionAddition {
  collection: CmsCollection;
}
interface AddPageContentFile extends CollectionAddition {
  contentFields: CmsField[];
}

/**
 * Collections that have been created by the website's webmaster
 * @param collectionConfig 
 * @returns 
 */
export const createWMCollection = (collectionConfig: CmsCollection): CmsCollection => {
  const webmasterCollectionConfig = {
    delete: false,
    files: []
  };
  return {
    ...webmasterCollectionConfig,
    ...collectionConfig,
  };
};

export const addPageContentFile = (collection: CmsCollection, contentFields: CmsField[]): CmsCollection => {
  const { label, name } = collection;
  const pageContentFile: CmsCollectionFile = {
    name: `${name}_page_content`,
    label: `${label} Page Content`,
    file: `src/content/${name}/content.json`,
    description: `Content for the ${label} Page`,
    fields: contentFields,
  };
  if (collection.files) {
    collection.files.push(pageContentFile)
  }
  else {
    collection.files = [];
  }
  return collection;
};