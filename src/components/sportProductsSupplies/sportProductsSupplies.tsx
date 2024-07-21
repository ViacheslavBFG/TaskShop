"use client";
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Modal, Button } from "antd";
import productsBase from "@/components/productsBase.json";
import productsBaseModal from "@/components/productsBaseModal.json";
import Searching from "../searching/searching";
import Link from "next/link";

const { Meta } = Card;

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

interface ModalProduct {
  price: number;
  id: number;
  title: string;
  description: string;
  image: string;
  details: string;
}

const SportProductsSupplies = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [modalData, setModalData] = useState<ModalProduct | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setProducts(productsBase);
    setFilteredProducts(productsBase);
  }, []);

  useEffect(() => {
    if (searchValue) {
      setFilteredProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [searchValue, products]);

  const showModal = (productId: number) => {
    const product = productsBaseModal.find((p) => p.id === productId);
    if (product) {
      setModalData(product);
      setIsModalVisible(true);
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleAddToCart = (productId: number) => {
    const selectedProduct = products.find(
      (product) => product.id === productId
    );
    let cartItems: Product[] = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );

    if (selectedProduct) {
      cartItems.push(selectedProduct);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  };

  return (
    <>
      <Searching setSearchValue={setSearchValue} />
      <div className="container mx-auto p-4">
        <Row gutter={[16, 16]}>
          {filteredProducts.map((product) => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={
                  <img
                    alt={product.title}
                    src={product.image}
                    className="w-full object-cover"
                    onClick={() => showModal(product.id)}
                  />
                }
              >
                <Meta
                  title={product.title}
                  description={
                    <>
                      <p>{product.description}</p>
                      <div className="flex items-center text-center justify-between">
                        <p className="mt-2 border-2 w-fit p-2 rounded-md border-blue-500 font-semibold text-lg text-black">
                          Price: {product.price}$
                        </p>
                        <Button
                          className="p-5 mr-2"
                          onClick={() => handleAddToCart(product.id)}
                        >
                          <img
                            className="w-7 h-7"
                            src="/images/cart.png"
                            alt=""
                          />
                        </Button>
                      </div>
                    </>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>

        {modalData && (
          <Modal
            title={modalData.title}
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button key="cancel" onClick={handleCancel}>
                Cancel
              </Button>,
              <Button
                className="w-48"
                key="buy"
                type="primary"
                onClick={() => {
                  handleAddToCart(modalData.id);
                  handleCancel();
                }}
              >
                Add to cart
              </Button>,
            ]}
          >
            <img
              src={modalData.image}
              alt={modalData.title}
              className="w-24 h-54 object-cover float-left mb-4"
            />
            <p className="font-semibold">{modalData.description}</p>
            <p>
              <span className="font-semibold">Description: </span>
              {modalData.details}
            </p>
            <p className="mt-2 border-2 w-fit p-2 rounded-md border-blue-500 font-semibold text-lg">
              Price: {modalData.price}$
            </p>
          </Modal>
        )}
      </div>
    </>
  );
};

export default SportProductsSupplies;
