import TextField, { BaseTextFieldProps } from "@mui/material/TextField";
import React, { MutableRefObject, useRef, useEffect } from "react";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";
import { motion, AnimatePresence, MotionConfigProps } from "framer-motion";
import Badge from "@mui/material/Badge";

interface IBaseInput<TNameField extends string> extends BaseTextFieldProps {
  registerOptions: UseFormRegisterReturn<TNameField>;
  isRequired?: boolean;
  label: string;
  formError: FieldError | undefined;
}

const spring = {
  type: "spring",
  damping: 10,
  stiffness: 100,
  duration: 0.5,
};

const variants = {
  initial: {
    y: "-15px",
    opacity: 0,
    backgroundColor: "red",
  },
  active: {
    opacity: 1,
    y: 0,
    backgroundColor: "white",
  },
  inactive: {
    opacity: 0,
    y: "-5px",
  },
};

function BaseInput<TNameField extends string>({
  registerOptions,
  label,
  formError,
  isRequired = false,
  ...inputProps
}: IBaseInput<TNameField>) {
  return (
    <div test-id="base_input_id" className="flex flex-col gap-1">
      <Badge
        color="error"
        invisible={false}
        badgeContent={"Req"}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="standard"
      >
        <TextField
          {...registerOptions}
          {...inputProps}
          label={label}
          variant="standard"
          error={formError?.message ? true : false}
        />
      </Badge>
      <AnimatePresence>
        {formError?.message && (
          <motion.span
            variants={variants}
            initial={"initial"}
            animate={"active"}
            exit={"inactive"}
            className="text-red-600"
            transition={spring}
          >
            {formError.message}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

export { BaseInput };
