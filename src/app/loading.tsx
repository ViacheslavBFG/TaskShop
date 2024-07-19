import { Spin } from "antd";
import React from "react";

const Loading = () => {
  return (
    <div>
      <Spin
        size="large"
        className="flex justify-center items-center  h-screen"
      />
    </div>
  );
};

export default Loading;
