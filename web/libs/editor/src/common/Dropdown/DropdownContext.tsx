import React, { type MutableRefObject, type RefObject } from "react";
import type { DropdownRef } from "./DropdownComponent";

export interface DropdownContextValue {
  triggerRef: MutableRefObject<HTMLElement | undefined>;
  dropdown: RefObject<DropdownRef>;
  minIndex: number;
  hasTarget(target: HTMLElement): boolean;
  addChild(child: DropdownContextValue): void;
  removeChild(child: DropdownContextValue): void;
  open(): void;
  close(): void;
}

export const DropdownContext = React.createContext<DropdownContextValue | null>(null);
