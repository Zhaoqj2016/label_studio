import { observer } from "mobx-react";
import { types } from "mobx-state-tree";

import BaseTool from "./Base";
import BasicTool from "../components/Tools/Basic";
import ToolMixin from "../mixins/Tool";

const ToolView = observer(({ item }) => {
  return (
    <BasicTool
      selected={item.selected}
      onClick={() => {
        item.manager.unselectAll();
        item.setSelected(true);
      }}
      icon={"scissor"}
    />
  );
});

const _Tool = types
  .model("LiveWireTool", {})
  .views((self) => ({
    get viewClass() {
      return () => <ToolView item={self} />;
    },
  }))
  .actions((self) => ({
    mouseupEv() {
      self.mode = "viewing";
    },

    mousemoveEv() {
      if (self.mode !== "drawing") return;
    },

    mousedownEv() {
      self.mode = "drawing";
    },
  }));

const LiveWire = types.compose(_Tool.name, ToolMixin, _Tool, BaseTool);

export { LiveWire };
