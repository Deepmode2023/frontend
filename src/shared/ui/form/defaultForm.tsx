import { BaseButtonWithMotion } from "../button/base-button";
import { useFormHook, UseFormHookPropsType } from "../../lib/hooks/use-form";
import { FieldValues } from "react-hook-form";
import { motion } from "framer-motion";
import { FormPaper, type FormPaperPropsType } from "./form-paper";

const variants = {
  open: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const childrenVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      opacity: { duration: 1 },
    },
  },
  closed: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 0,
      y: { delay: 0.2 },
      opacity: { duration: 0.6 },
    },
  },
};

type DefaultFormPropsType<TFormState extends FieldValues> = Omit<
  UseFormHookPropsType<TFormState>,
  "childrenVariants"
> &
  Omit<FormPaperPropsType, "children"> & {
    childAnimate?: boolean;
  };

function DefaultFormInner<TFormState extends FieldValues>({
  childAnimate,
  directionAnimate,
  ...formProps
}: DefaultFormPropsType<TFormState>) {
  const { inputs, onSubmit, submitError } = useFormHook({
    childrenVariants,
    ...formProps,
  });

  return (
    <motion.form
      variants={variants}
      animate={childAnimate ? "open" : "closed"}
      className="px-3 flex flex-col gap-3 min-h-full w-full overflow-x-hidden overflow-y-auto"
      onSubmit={onSubmit}
    >
      {inputs}
      <BaseButtonWithMotion variants={childrenVariants} fullWidth type="submit">
        Submit
      </BaseButtonWithMotion>
      {submitError}
    </motion.form>
  );
}

DefaultFormInner.displayName = "DefaultFormInner";

function DefaultForm<TFormState extends FieldValues>({
  directionAnimate,
  ...props
}: DefaultFormPropsType<TFormState>) {
  return (
    <FormPaper directionAnimate={directionAnimate}>
      <DefaultFormInner {...props} />
    </FormPaper>
  );
}

export { DefaultFormInner };
export default DefaultForm;
