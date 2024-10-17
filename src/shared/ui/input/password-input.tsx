import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import { BaseInput, type IBaseInput } from "./base-input";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { type MotionWrapperPropsType, MotionWrapper } from "../motion-wrapper";

const PasswordInput = (props: IBaseInput<"password">) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <BaseInput
      type={isVisible ? "text" : "password"}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment
              position="start"
              data-testid="password_input_icon"
              onClick={() => {
                setIsVisible((prev) => !prev);
              }}
            >
              {isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </InputAdornment>
          ),
        },
      }}
      {...props}
    />
  );
};

function PasswordInputWithMotion({
  variants,
  ...props
}: MotionWrapperPropsType & IBaseInput<"password">) {
  return (
    <MotionWrapper variants={variants}>
      <PasswordInput {...props} />
    </MotionWrapper>
  );
}

export { PasswordInput, PasswordInputWithMotion };
