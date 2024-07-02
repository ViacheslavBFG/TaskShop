"use client";
import React, { useState, useEffect } from "react";
import { Button } from "antd";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );
    setCartItems(storedCartItems);
  }, []);

  const clearCart = () => {
    localStorage.removeItem("cartItems");
    setCartItems([]);
  };

  return (
    <div className="container mx-auto p-4">
      <Button className="ml-auto" onClick={clearCart} type="primary">
        Clear cart
      </Button>
      <div className="">
        {cartItems.map((item) => (
          <div key={item.id} className="border p-4 my-4">
            <h2 className=" font-bold">{item.title}</h2>
            <p>{item.description}</p>
            <p className=" font-semibold">Price: {item.price}$</p>
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
