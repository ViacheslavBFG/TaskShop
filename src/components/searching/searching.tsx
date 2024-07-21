import { Input } from "antd";
import React from "react";

interface SearchingProps {
  setSearchValue: (value: string) => void;
}

const Searching: React.FC<SearchingProps> = ({ setSearchValue }) => {
  return (
    <div className="flex items-center gap-2 ml-auto w-72 pr-5">
      <Input
        className="border-2"
        placeholder="Find product"
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </div>
  );
};

export default Searching;
