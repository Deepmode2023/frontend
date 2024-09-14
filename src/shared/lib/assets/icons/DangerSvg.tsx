import { ISVGIconProps } from "../../../model/assets";
import { animateProps } from "./animate";
import { motion } from "framer-motion";

export const DangerSvg = ({
  strokeColor,
  width = 20,
  height = 20,
  isAnimate,
}: ISVGIconProps) => (
  <svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      {...animateProps({ isAnimate })}
      stroke={strokeColor}
      d="M12 9V14"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <motion.path
      {...animateProps({ isAnimate })}
      d="M12.0001 21.41H5.94005C2.47005 21.41 1.02005 18.93 2.70005 15.9L5.82006 10.28L8.76006 5.00003C10.5401 1.79003 13.4601 1.79003 15.2401 5.00003L18.1801 10.29L21.3001 15.91C22.9801 18.94 21.5201 21.42 18.0601 21.42H12.0001V21.41Z"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <motion.path
      {...animateProps({ isAnimate })}
      d="M11.9945 17H12.0035"
      stroke={strokeColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
