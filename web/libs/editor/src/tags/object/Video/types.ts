import type { Shape, ShapeConfig } from "konva/lib/Shape";
import type { Stage } from "konva/lib/Stage";

export type WorkingArea = {
  width: number;
  height: number;
  x: number;
  y: number;
  scale: number;
  realWidth: number;
  realHeight: number;
};

export type KonvaNode = Shape<ShapeConfig> | Stage;
