import { PropsWithChildren } from "react";
import { motion, Variants } from "framer-motion";

type MotionWrapperPropsType = PropsWithChildren & { variants: Variants };

const MotionWrapper = ({ children, variants }: MotionWrapperPropsType) => {
  return <motion.div variants={variants}>{children}</motion.div>;
};

export { MotionWrapper };
export type { MotionWrapperPropsType };
