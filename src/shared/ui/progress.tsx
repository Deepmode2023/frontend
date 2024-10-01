import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import React from "react";

export const Progress = (props: CircularProgressProps) => (
  <React.Fragment>
    <svg width={0} height={0}>
      <defs>
        <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e01cd5" />
          <stop offset="100%" stopColor="#1CB5E0" />
        </linearGradient>
      </defs>
    </svg>
    <CircularProgress
      {...props}
      sx={{ "svg circle": { stroke: "url(#my_gradient)" } }}
      size={props.size ?? 20}
      thickness={4}
    />
  </React.Fragment>
);
