import { useCallback, useState } from "react";
import { dismissTip, getRandomTip, getTipEvent, getTipMetadata } from "./utils";
import type { Tip, TipsCollection } from "./types";

export const useRandomTip = (collection: keyof TipsCollection) => {
  const [tip, setTip] = useState<Tip | null>(() => getRandomTip(collection));
  const dismiss = useCallback(() => {
    dismissTip(collection);
    setTip(null);
  }, []);

  const onLinkClick = useCallback(() => {
    if (tip) {
      __lsa(getTipEvent(collection, tip, "click"), getTipMetadata(tip));
    }
  }, [tip]);

  return [tip, dismiss, onLinkClick] as const;
};
