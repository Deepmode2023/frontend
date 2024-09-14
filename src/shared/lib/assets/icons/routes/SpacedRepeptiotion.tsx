import React from "react";
import { ISVGIconProps } from "../../../../model/assets";
import { animateProps } from "../animate";
import { motion } from "framer-motion";

export const SpacedRepetitionSvg = ({
  width = 24,
  height = 24,
  strokeColor,
  isAnimate = true,
}: ISVGIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <motion.path
        {...animateProps({ isAnimate })}
        d="M18.63 7.1499C18.67 7.7599 18.62 8.4499 18.5 9.2199L17.77 13.9099C17.15 17.8199 15.34 19.1399 11.43 18.5299L6.73999 17.7899C5.38999 17.5799 4.34999 17.2199 3.58999 16.6799C2.13999 15.6699 1.71999 14.0099 2.11999 11.4499L2.85999 6.7599C3.47999 2.8499 5.28999 1.5299 9.19999 2.1399L13.89 2.8799C17.03 3.3699 18.5 4.6499 18.63 7.1499Z"
        className={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        {...animateProps({ isAnimate })}
        d="M20.5 13.4699L19 17.9799C17.75 21.7399 15.75 22.7399 11.99 21.4899L7.48003 19.9899C5.21003 19.2399 3.95003 18.1999 3.59003 16.6799C4.35003 17.2199 5.39003 17.5799 6.74003 17.7899L11.43 18.5299C15.34 19.1399 17.15 17.8199 17.77 13.9099L18.5 9.2199C18.62 8.4499 18.67 7.7599 18.63 7.1499C21.02 8.4199 21.54 10.3399 20.5 13.4699Z"
        className={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        {...animateProps({ isAnimate })}
        d="M8.24 8.98C9.20098 8.98 9.98 8.20098 9.98 7.24C9.98 6.27902 9.20098 5.5 8.24 5.5C7.27902 5.5 6.5 6.27902 6.5 7.24C6.5 8.20098 7.27902 8.98 8.24 8.98Z"
        className={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
