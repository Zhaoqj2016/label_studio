import { type FC, memo } from "react";
import type { HeidiTipsProps } from "./types";
import { HeidiTip } from "./HeidiTip";
import { useRandomTip } from "./hooks";

export const HeidiTips: FC<HeidiTipsProps> = memo(({ collection }) => {
  const [tip, dismiss, onLinkClick] = useRandomTip(collection);

  return tip && <HeidiTip tip={tip} onDismiss={dismiss} onLinkClick={onLinkClick} />;
});
