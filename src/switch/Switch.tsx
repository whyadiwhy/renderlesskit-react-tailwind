import * as React from "react";
import { CheckboxOptions as ReakitCheckboxOptions } from "reakit";
import { CheckboxStateReturn } from "reakit";
import { useControllableState } from "@renderlesskit/react";

import { BoxProps } from "../box";
import { SwitchIcon } from "./SwitchIcon";
import { SwitchLabel } from "./SwitchLabel";
import { SwitchInput } from "./SwitchInput";
import { CheckboxStatus } from "../checkbox";
import { createContext, runIfFn } from "../utils";
import { forwardRefWithAs, RenderProp } from "../utils/types";

export type SwitchContext = {
  state: ReakitCheckboxOptions;
  size: SwitchProps["size"];
};

const [SwitchProvider, useSwitchContext] = createContext<SwitchContext>({
  name: "SwitchContext",
  strict: false,
});

export { useSwitchContext };

type SwitchRenderProps = RenderProp<CheckboxStateReturn>;

export type SwitchProps = BoxProps &
  Omit<ReakitCheckboxOptions, "size" | "setState"> & {
    defaultState?: ReakitCheckboxOptions["state"];
    onStateChange?: (value: CheckboxStatus) => void;
    size?: keyof Renderlesskit.GetThemeValue<
      "switch",
      "icon",
      "wrapper"
    >["size"];
  };

export const Switch = forwardRefWithAs<
  SwitchProps & SwitchRenderProps,
  HTMLLabelElement,
  "label"
>((props, ref) => {
  const {
    defaultState,
    state: initialState,
    onStateChange,
    value,
    checked,
    disabled,
    focusable,
    size = "md",
    children,
    ...rest
  } = props;
  const [switchState, setSwitchStateChange] = useControllableState({
    value: initialState,
    defaultValue: defaultState,
    onChange: onStateChange,
  });
  const state = React.useMemo(
    () => ({
      state: switchState,
      setState: setSwitchStateChange,
      value,
      checked,
      disabled,
      focusable,
    }),
    [switchState, setSwitchStateChange, value, checked, disabled, focusable],
  );
  const context = React.useMemo(() => ({ state, size }), [state, size]);

  return (
    <SwitchProvider value={context}>
      {children ? (
        runIfFn(children, state)
      ) : (
        <SwitchLabel ref={ref} {...rest}>
          <SwitchInput />
          <SwitchIcon />
        </SwitchLabel>
      )}
    </SwitchProvider>
  );
});

Switch.displayName = "Switch";
