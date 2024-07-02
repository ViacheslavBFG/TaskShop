"use client";

import { Button, Input } from "antd";
import React from "react";
import Link from "next/link";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <>
      <div className="flex items-center  p-4 bg-white">
        <div className="flex-1 pl-20">
          {" "}
          <Link href="/" className=" hover:text-blue-500">
            Home
          </Link>
        </div>

        <div className="flex  items-center ">
          <Link href="/products " className=" hover:text-blue-500">
            Products
          </Link>
        </div>

        <div className="flex-1 flex justify-end pr-20">
          <Link href="" className="hover:text-blue-500 flex  items-center ">
            <ShoppingCartOutlined style={{ fontSize: "35px" }} />
            <p>Cart</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
