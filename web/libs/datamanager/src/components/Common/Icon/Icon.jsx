import React from "react";
import { cn } from "../../../utils/bem";
import "./Icon.scss";

export const Icon = React.forwardRef(({ icon, ...props }, ref) => {
  return (
    <span className={cn("icon").toString()} ref={ref}>
      {React.createElement(icon, props)}
    </span>
  );
});
