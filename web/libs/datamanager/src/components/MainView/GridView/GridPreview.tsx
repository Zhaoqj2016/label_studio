import { CloseOutlined, LeftCircleOutlined, QuestionCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Checkbox } from "@humansignal/ui";
import { observer } from "mobx-react";
import type { PropsWithChildren } from "react";
import { createContext, useCallback, useEffect, useRef, useState } from "react";
import { modal } from "../../Common/Modal/Modal";
import { Icon } from "../../Common/Icon/Icon";
import { Tooltip } from "../../Common/Tooltip/Tooltip";
import { ImagePreview } from "./ImagePreview";

import styles from "./GridPreview.module.scss";

type Task = {
  id: number;
  data: Record<string, string>;
};

type GridViewContextType = {
  tasks: Task[];
  imageField: string | undefined;
  currentTaskId: number | null;
  setCurrentTaskId: (id: number | null) => void;
};

type TaskModalProps = GridViewContextType & { view: any; imageField: string };

export const GridViewContext = createContext<GridViewContextType>({
  tasks: [],
  imageField: undefined,
  currentTaskId: null,
  setCurrentTaskId: () => {},
});

const TaskModal = observer(({ view, tasks, imageField, currentTaskId, setCurrentTaskId }: TaskModalProps) => {
  const index = tasks.findIndex((task) => task.id === currentTaskId);
  const task = tasks[index];

  const goToNext = useCallback(() => {
    if (index < tasks.length - 1) {
      setCurrentTaskId(tasks[index + 1].id);
    }
  }, [index, tasks]);

  const goToPrev = useCallback(() => {
    if (index > 0) {
      setCurrentTaskId(tasks[index - 1].id);
    }
  }, [index, tasks]);

  const onSelect = useCallback(() => {
    if (task) {
      view.toggleSelected(task.id);
    }
  }, [task, view]);

  const onClose = useCallback(() => {
    setCurrentTaskId(null);
  }, []);

  // assign hotkeys
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        goToPrev();
      } else if (event.key === "ArrowRight") {
        goToNext();
      } else if (event.key === " ") {
        onSelect();
        event.preventDefault();
      } else if (event.key === "Escape") {
        onClose();
      } else {
        // pass this event through for other keys
        return;
      }

      event.stopPropagation();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [goToNext, goToPrev, onSelect, onClose]);

  if (!task) {
    return null;
  }

  const tooltip = (
    <div className={styles.tooltip}>
      <p>Preview of the task image to quickly navigate through the tasks and select the ones you want to work on.</p>
      <p>Use [arrow keys] to navigate.</p>
      <p>[Escape] to close the modal.</p>
      <p>[Space] to select/unselect the task.</p>
      <p>Use [scroll] to zoom in/out and [drag] to pan around while image is zoomed in.</p>
    </div>
  );

  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <Checkbox checked={view.selected.isSelected(task.id)} onChange={onSelect}>
          Task {task.id}
        </Checkbox>
        <div className={styles.actions}>
          <Tooltip title={tooltip}>
            <Icon icon={QuestionCircleOutlined} />
          </Tooltip>
          <Icon icon={CloseOutlined} onClick={onClose} />
        </div>
      </div>
      <div className={styles.container}>
        <button type="button" onClick={goToPrev} disabled={index === 0}>
          <Icon icon={LeftCircleOutlined} />
        </button>
        <ImagePreview task={task} field={imageField} />
        <button type="button" onClick={goToNext} disabled={index === tasks.length - 1}>
          <Icon icon={RightCircleOutlined} />
        </button>
      </div>
    </div>
  );
});

type GridViewProviderProps = PropsWithChildren<{
  data: Task[];
  view: any;
  fields: { alias: string; currentType: string }[];
}>;

export const GridViewProvider: React.FC<GridViewProviderProps> = ({ children, data, view, fields }) => {
  const [currentTaskId, setCurrentTaskId] = useState<number | null>(null);
  const modalRef = useRef<{ update: (props: object) => void; close: () => void } | null>(null);
  const imageField = fields.find((f) => f.currentType === "Image")?.alias;

  const onClose = useCallback(() => {
    modalRef.current = null;
    setCurrentTaskId(null);
  }, []);

  useEffect(() => {
    if (currentTaskId === null) {
      modalRef.current?.close();
      return;
    }

    if (!imageField) return;

    const children = (
      <TaskModal
        view={view}
        tasks={data}
        imageField={imageField}
        currentTaskId={currentTaskId}
        setCurrentTaskId={setCurrentTaskId}
      />
    );

    if (!modalRef.current) {
      modalRef.current = modal({
        bare: true,
        title: "Task Preview",
        style: { width: 800 },
        children,
        onHidden: onClose,
      });
    } else {
      modalRef.current.update({ children });
    }
  }, [currentTaskId, data, onClose]);

  // close the modal when we leave the view (by browser controls or by hotkeys)
  useEffect(() => () => modalRef.current?.close(), []);

  return (
    <GridViewContext.Provider value={{ tasks: data, imageField, currentTaskId, setCurrentTaskId }}>
      {children}
    </GridViewContext.Provider>
  );
};
