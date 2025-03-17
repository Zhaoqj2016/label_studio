import { forwardRef, useEffect, useMemo } from "react";
import { Toggle as UiToggle } from "@humansignal/ui";
import { FormField } from "../../FormField";
import { useValueTracker } from "../../Utils";
import { default as Label } from "../Label/Label";

const Toggle = forwardRef(
  (
    {
      className,
      label,
      labelProps,
      description,
      checked,
      defaultChecked,
      onChange,
      validate,
      required,
      skip,
      ...props
    },
    ref,
  ) => {
    const initialChecked = useMemo(() => defaultChecked ?? checked ?? false, [defaultChecked, checked]);
    const [isChecked, setIsChecked] = useValueTracker(checked, defaultChecked ?? false);

    useEffect(() => {
      setIsChecked(initialChecked);
    }, [initialChecked]);

    const formField = (
      <FormField
        ref={label ? null : ref}
        label={label}
        name={props.name}
        validate={validate}
        required={required}
        skip={skip}
        setValue={(value) => setIsChecked(value)}
        {...props}
      >
        {(ref) => (
          <UiToggle
            ref={ref}
            {...props}
            checked={isChecked}
            onChange={(e) => {
              setIsChecked(e.target.checked);
              onChange?.(e);
            }}
          />
        )}
      </FormField>
    );
    return label ? (
      <Label
        ref={ref}
        placement="right"
        required={required}
        text={label}
        children={formField}
        description={description}
        {...(labelProps ?? {})}
      />
    ) : (
      formField
    );
  },
);

export default Toggle;
