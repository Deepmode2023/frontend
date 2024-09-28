import TextField, { StandardTextFieldProps } from "@mui/material/TextField";
import { UseFormRegisterReturn, FieldError } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

export interface IBaseInput<TNameField extends string>
  extends StandardTextFieldProps {
  registerOptions: UseFormRegisterReturn<TNameField>;
  isRequired?: boolean;
  label: string;
  formError: FieldError | undefined;
}

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
    <div data-testid="base_input" className="flex flex-col gap-1">
      <TextField
        id="input-with-sx"
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

export { BaseInput };
