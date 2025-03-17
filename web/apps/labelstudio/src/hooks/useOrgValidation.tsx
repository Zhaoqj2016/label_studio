import { useEffect } from "react";
import { ToastType, useToast } from "@humansignal/ui";

/**
 * Creates a shared AbortController, which can be used to abort requests.
 * Automatically cancels the current controller when the component unmounts.
 */
export const useOrgValidation = (): void => {
  const toast = useToast();

  useEffect(() => {
    if (window.APP_SETTINGS?.flags?.storage_persistence) return;
    toast.show({
      message: (
        <>
          Data will be persisted on the node running this container, but all data will be lost if this node goes away.
        </>
      ),
      type: ToastType.alertError,
      duration: -1,
    });
  }, []);
};
