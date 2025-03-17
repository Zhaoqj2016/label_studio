import { isFF, FF_SELF_SERVE } from "./feature-flags";

export const isSelfServe = () => isFF(FF_SELF_SERVE) && window.APP_SETTINGS.billing?.enterprise === false;
