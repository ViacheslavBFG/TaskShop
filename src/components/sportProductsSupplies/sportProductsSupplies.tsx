"use client";
import React, { useEffect, useState } from "react";
import { Card, Col, Row, Modal } from "antd";
import productsBase from "@/components/productsBase.json";
import productsBaseModal from "@/components/productsBaseModal.json";

const { Meta } = Card;

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ModalProduct {
  id: number;
  title: string;
  description: string;
  image: string;
  details: string;
}

const SportProductsSupplies = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [modalData, setModalData] = useState<ModalProduct | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setProducts(productsBase);
  }, []);

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

  return (
    <>
      <div className="container mx-auto p-4">
        <Row gutter={[16, 16]}>
          {products.map((product) => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={
                  <img
                    alt={product.title}
                    src={product.image}
                    className="w-full  object-cover"
                    onClick={() => showModal(product.id)}
                  />
                }
              >
                <Meta title={product.title} description={product.description} />
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
            footer={null}
          >
            <img
              src={modalData.image}
              alt={modalData.title}
              className="w-24 h-54 object-cover float-left mb-4 "
            />
            <p>{modalData.details}</p>
          </Modal>
        )}
      </div>
    </>
  );
};

export default SportProductsSupplies;
