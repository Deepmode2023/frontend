import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import { BaseInput, type IBaseInput } from "./base-input";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

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

export { PasswordInput };
