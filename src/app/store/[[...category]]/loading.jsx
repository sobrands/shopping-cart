"use client";

import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="absolute left-1/2 top-1/4">
      <ThreeDots
        visible={true}
        height="50"
        width="50"
        radius="5"
        color="black"
      />
    </div>
  );
};

export default Loading;
