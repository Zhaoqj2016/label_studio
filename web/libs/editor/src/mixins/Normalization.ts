import { types } from "mobx-state-tree";

/**
 * @todo rework this into MetaMixin for all the meta data
 * @todo it's used by too much files, so that's for later
 * Meta Information
 * Additional information for regions and their results, like text and lead_time
 * Only text is used here actually, lead_time is stored directly in results
 */
const NormalizationMixin = types
  .model({
    meta: types.frozen<{ text?: string[] }>({}),
  })
  .actions((self) => ({
    /**
     * Set meta text
     * @param {*} text
     */
    setMetaText(text: string) {
      if (text) {
        self.meta = { ...self.meta, text: [text] };
      } else {
        const adjusted = { ...self.meta };

        delete adjusted.text;
        self.meta = adjusted;
      }
    },
  }))
  .actions((self) => ({
    /**
     * Delete meta text
     */
    deleteMetaText() {
      self.setMetaText("");
    },
  }));

export default NormalizationMixin;
