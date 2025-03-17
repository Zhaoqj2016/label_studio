import { useMemo } from "react";
import { Menu } from "../Menu/Menu";

export const TabsMenu = ({ onClick, editable = true, closable = true, clonable = true, virtual = false }) => {
  const items = useMemo(
    () => [
      {
        key: "edit",
        title: "Rename",
        enabled: editable && !virtual,
        action: () => onClick("edit"),
      },
      {
        key: "duplicate",
        title: "Duplicate",
        enabled: !virtual && clonable,
        action: () => onClick("duplicate"),
        willLeave: true,
      },
      {
        key: "save",
        title: "Save",
        enabled: virtual,
        action: () => onClick("save"),
        willLeave: true,
      },
    ],
    [editable, closable, clonable, virtual],
  );

  const showDivider = useMemo(() => closable && items.some(({ enabled }) => enabled), [items]);

  return (
    <Menu size="medium" onClick={(e) => e.domEvent.stopPropagation()}>
      {items.map((item) =>
        item.enabled ? (
          <Menu.Item key={item.key} onClick={item.action} data-leave={item.willLeave}>
            {item.title}
          </Menu.Item>
        ) : null,
      )}

      {closable ? (
        <>
          {showDivider && <Menu.Divider />}
          <Menu.Item onClick={() => onClick("close")} data-leave>
            Close
          </Menu.Item>
        </>
      ) : null}
    </Menu>
  );
};
