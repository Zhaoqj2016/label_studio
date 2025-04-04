import { cn } from "../../utils/bem";
import "./Hamburger.scss";

export const Hamburger = ({ opened, animated = true }) => {
  const root = cn("hamburger");

  return (
    <span className={root.mod({ animated, opened })}>
      <span />
      <span />
      <span />
    </span>
  );
};
