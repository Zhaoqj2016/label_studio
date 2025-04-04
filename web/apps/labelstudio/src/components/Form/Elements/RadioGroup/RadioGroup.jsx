import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { Label } from "..";
import { BemWithSpecifiContext } from "../../../../utils/bem";
import { FormField } from "../../FormField";
import "./RadioGroup.scss";

const RadioContext = createContext();
const { Block, Elem } = BemWithSpecifiContext();

export const RadioGroup = ({
  label,
  className,
  validate,
  required,
  skip,
  simple,
  labelProps,
  size,
  value,
  onChange,
  children,
  ...props
}) => {
  const [currentValue, setCurrentValue] = useState(value);

  const onRadioChange = (value) => {
    setCurrentValue(value);
    onChange?.(value);
  };

  const field = (
    <FormField
      name={props.name}
      label={label}
      validate={validate}
      required={required}
      skip={skip}
      setValue={(value) => setCurrentValue(value)}
      {...props}
    >
      {(ref, dep, form) => (
        <RadioContext.Provider
          value={{
            value: currentValue,
            onChange: (value) => {
              onRadioChange(value);
              form.autosubmit();
            },
            setValue: setCurrentValue,
            isSimple: simple === true,
          }}
        >
          <Block name="radio-group-ls" mod={{ size, simple }} mix={className}>
            <input ref={ref} name={props.name} type="hidden" defaultValue={currentValue} />
            <Elem name="buttons">{children}</Elem>
          </Block>
        </RadioContext.Provider>
      )}
    </FormField>
  );

  return label ? (
    <Label {...(labelProps ?? {})} text={label} simple={simple} required={required}>
      {field}
    </Label>
  ) : (
    field
  );
};

const RadioButton = ({ value, disabled, children, label, description, ...props }) => {
  const { onChange, setValue, value: currentValue, isSimple } = useContext(RadioContext);
  const checked = value === currentValue;

  const clickHandler = useCallback(
    (e) => {
      // TODO: Find a better way to prevent the click event from being triggered by the child element
      // that works beyond just the anchor tag. Otherwise there will be problems with other components/elements.
      if (e.target.tagName === "A") return;
      e.preventDefault();
      e.stopPropagation();
      if (disabled) return;
      onChange(value);
    },
    [value, disabled],
  );

  useEffect(() => {
    if (props.checked) setValue(value);
  }, [props.checked]);

  return (
    <Elem name="button" mod={{ checked, disabled }} onClickCapture={clickHandler}>
      {isSimple ? (
        <Label placement="right" text={label} description={description}>
          <input
            type="radio"
            value={value}
            checked={checked}
            disabled={disabled}
            readOnly
            style={{ pointerEvents: "none" }}
          />
        </Label>
      ) : (
        children
      )}
    </Elem>
  );
};

RadioGroup.Button = RadioButton;
