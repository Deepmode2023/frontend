import TextField, { StandardTextFieldProps } from "@mui/material/TextField";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { type MotionWrapperPropsType, MotionWrapper } from "../motion-wrapper";

export interface IBaseInput<TNameField extends string>
  extends StandardTextFieldProps {
  registerOptions: UseFormRegisterReturn<TNameField>;
  label: string;
  formError: FieldError | undefined;
}

const variants = {
  initial: {
    y: "-15px",
    opacity: 0,
  },
  active: {
    opacity: 1,
    y: 0,
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
  ...inputProps
}: IBaseInput<TNameField>) {
  return (
    <div data-testid="base_input" className="flex flex-col gap-1">
      <TextField
        label={label}
        variant="standard"
        {...registerOptions}
        {...inputProps}
      />
      <AnimatePresence>
        {formError?.message && (
          <motion.span
            variants={variants}
            initial={"initial"}
            animate={"active"}
            exit={"inactive"}
            className="text-red-600"
            data-testid="base_input_message"
            transition={{
              type: "spring",
              damping: 10,
              stiffness: 100,
              duration: 0.5,
            }}
          >
            {formError.message}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

function BaseInputWithMotion<TNameField extends string>({
  variants,
  ...props
}: MotionWrapperPropsType & IBaseInput<TNameField>) {
  return (
    <MotionWrapper variants={variants}>
      <BaseInput {...props} />
    </MotionWrapper>
  );
}

export { BaseInput, BaseInputWithMotion };
