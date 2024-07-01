import { Button, Input } from "antd";
import React from "react";

const Searching = () => {
  return (
    <div className="flex items-center gap-2 ml-auto w-72 pr-5">
      <Input className=" border-2" placeholder="Find product" />
      <Button className=" border-2">search</Button>
    </div>
  );
};

export default Searching;
