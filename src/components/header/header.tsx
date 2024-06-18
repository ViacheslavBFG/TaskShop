"use client";

import { Button, Input } from "antd";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      {" "}
      <div className="flex items-center justify-between p-4 bg-white">
        <div className="flex-1 flex items-center justify-center">
          <div className="flex gap-40 ">
            <Link href="/" className=" hover:text-blue-500">
              Home
            </Link>
            <Link href="/products " className=" hover:text-blue-500">
              Products
            </Link>

            <Link href="" className="hover:text-blue-500">
              Favourite
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Input placeholder="Basic usage" />
          <Button>search</Button>
        </div>
      </div>
    </>
  );
};

export default Header;
