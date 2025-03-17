import clsx from "clsx";
import { cn } from "../../../utils/bem";
import { isDefined } from "../../../utils/utils";
import "./Agreement.scss";

const agreement = (p) => {
  if (!isDefined(p)) return "zero";
  if (p < 33) return "low";
  if (p < 66) return "medium";
  return "high";
};

const formatNumber = (num) => {
  const number = Number(num);

  if (num % 1 === 0) {
    return number;
  }
  return number.toFixed(2);
};

export const Agreement = (column) => {
  const agreementCN = cn("agreement");
  const scoreElem = agreementCN.elem("score");
  return (
    <div className={agreementCN.toString()}>
      <span className={clsx(scoreElem.toString(), scoreElem.mod({ [agreement(column.value)]: true }).toString())}>
        {isDefined(column.value) ? `${formatNumber(column.value)}%` : ""}
      </span>
    </div>
  );
};

Agreement.userSelectable = false;
