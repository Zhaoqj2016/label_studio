export type TipLinkParams = Record<string, string> & {
  experiment?: string;
  treatment?: string;
};

export type Tip = {
  title: string;
  content: string;
  description?: string;
  closable?: boolean;
  link: {
    url: string;
    label: string;
    params?: TipLinkParams;
  };
};

export type TipCollectionKey = "projectCreation" | "organizationPage" | "projectSettings";

export type TipsCollection = Record<TipCollectionKey, Tip[]>;

export type HeidiTipsProps = {
  collection: keyof TipsCollection;
};

export type HeidiTipProps = {
  tip: Tip;
  onDismiss: () => void;
  onLinkClick: () => void;
};
