/* global Sentry */

import { createBrowserHistory } from "history";
import { render } from "react-dom";
import { Router } from "react-router-dom";
import { LEAVE_BLOCKER_KEY, leaveBlockerCallback } from "../components/LeaveBlocker/LeaveBlocker";
import { initSentry } from "../config/Sentry";
import { ApiProvider, useAPI } from "../providers/ApiProvider";
import { AppStoreProvider } from "../providers/AppStoreProvider";
import { ConfigProvider } from "../providers/ConfigProvider";
import { MultiProvider } from "../providers/MultiProvider";
import { ProjectProvider } from "../providers/ProjectProvider";
import { RoutesProvider } from "../providers/RoutesProvider";
import { DRAFT_GUARD_KEY, DraftGuard, draftGuardCallback } from "../components/DraftGuard/DraftGuard";
import "./App.scss";
import { AsyncPage } from "./AsyncPage/AsyncPage";
import ErrorBoundary from "./ErrorBoundary";
import { RootPage } from "./RootPage";
import { FF_OPTIC_2, FF_UNSAVED_CHANGES, FF_PRODUCT_TOUR, isFF } from "../utils/feature-flags";
import { TourProvider } from "@humansignal/core";
import { ToastProvider, ToastViewport } from "@humansignal/ui";
import { initI18n } from "../utils/i18n";

const baseURL = new URL(APP_SETTINGS.hostname || location.origin);
export const UNBLOCK_HISTORY_MESSAGE = "UNBLOCK_HISTORY";

// 确保 APP_SETTINGS 中有语言设置
if (window.APP_SETTINGS) {
  // 优先使用 window.LANGUAGE_CODE
  if (window.LANGUAGE_CODE) {
    window.APP_SETTINGS.language = window.LANGUAGE_CODE;
  } 
  // 如果没有设置语言，默认使用中文
  else if (!window.APP_SETTINGS.language) {
    window.APP_SETTINGS.language = 'zh-hans';
  }
  
  // 设置 HTML 的 lang 属性
  document.documentElement.lang = window.APP_SETTINGS.language;
}

initI18n();

const browserHistory = createBrowserHistory({
  basename: baseURL.pathname || "/",
  // callback is an async way to confirm or decline going to another page in the context of routing. It accepts `true` or `false`
  getUserConfirmation: (message, callback) => {
    // `history.block` doesn't block events, so in the case of listeners,
    // we need to have some flag that can be checked for preventing related actions
    // `isBlocking` flag is used for this purpose
    browserHistory.isBlocking = true;
    const callbackWrapper = (result) => {
      browserHistory.isBlocking = false;
      callback(result);
      isFF(FF_UNSAVED_CHANGES) && window.postMessage({ source: "label-studio", payload: UNBLOCK_HISTORY_MESSAGE });
    };
    if (isFF(FF_OPTIC_2) && message === DRAFT_GUARD_KEY) {
      draftGuardCallback.current = callbackWrapper;
    } else if (isFF(FF_UNSAVED_CHANGES) && message === LEAVE_BLOCKER_KEY) {
      leaveBlockerCallback.current = callbackWrapper;
    } else {
      callbackWrapper(window.confirm(message));
    }
  },
});

window.LSH = browserHistory;

initSentry(browserHistory);

const App = ({ content }) => {
  return (
    <ErrorBoundary>
      <Router history={browserHistory}>
        <MultiProvider
          providers={[
            <AppStoreProvider key="app-store" />,
            <ApiProvider key="api" />,
            <ConfigProvider key="config" />,
            <RoutesProvider key="rotes" />,
            <ProjectProvider key="project" />,
            <ToastProvider key="toast" />,
            isFF(FF_PRODUCT_TOUR) && <TourProvider useAPI={useAPI} />,
          ].filter(Boolean)}
        >
          <AsyncPage>
            <DraftGuard />
            <RootPage content={content} />
            <ToastViewport />
          </AsyncPage>
        </MultiProvider>
      </Router>
    </ErrorBoundary>
  );
};

const root = document.querySelector(".app-wrapper");
const content = document.querySelector("#main-content");

render(<App content={content.innerHTML} />, root);

if (module?.hot) {
  module.hot.accept(); // Enable HMR for React components
}
