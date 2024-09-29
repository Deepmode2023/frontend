import React, { memo, useEffect, useState } from "react";
import { Progress } from "shared";

const PageLoader = ({}) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Progress size={"10rem"} />
    </div>
  );
};

export default PageLoader;
