import { observer, Provider } from "mobx-react";
import React from "react";
import clsx from "clsx";
import { SDKProvider } from "../../providers/SDKProvider";
import { cn } from "../../utils/bem";
import { Spinner } from "../Common/Spinner";
import { DataManager } from "../DataManager/DataManager";
import { Labeling } from "../Label/Label";
import "./App.scss";

class ErrorBoundary extends React.Component {
  state = {
    error: null,
  };

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    return this.state.error ? <div className="error">{this.state.error}</div> : this.props.children;
  }
}

/**
 * Main Component
 * @param {{app: import("../../stores/AppStore").AppStore} param0
 */
const AppComponent = ({ app }) => {
  const rootCN = cn("root");
  const rootClassName = rootCN.mod({ mode: app.SDK.mode }).toString();
  const crashCN = cn("crash");
  return (
    <ErrorBoundary>
      <Provider store={app}>
        <SDKProvider sdk={app.SDK}>
          <div className={rootClassName}>
            {app.crashed ? (
              <div className={clsx(rootCN.toString(), rootClassName)}>
                <span className={rootCN.elem("header").toString()}>Oops...</span>
                <span className={rootCN.elem("description").toString()}>
                  Project has been deleted or not yet created.
                </span>
              </div>
            ) : app.loading ? (
              <div className={cn("app-loader").toString()}>
                <Spinner size="large" />
              </div>
            ) : app.isLabeling ? (
              <Labeling />
            ) : (
              <DataManager />
            )}
            <div className={cn("offscreen").toString()} />
          </div>
        </SDKProvider>
      </Provider>
    </ErrorBoundary>
  );
};

export const App = observer(AppComponent);
