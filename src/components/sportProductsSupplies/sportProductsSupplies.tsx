"use client";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "antd";
import productsBase from "@/components/productsBase.json";
import productsBaseModal from "@/components/productsBaseModal.json";

const { Meta } = Card;
interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

const SportProductsSupplies = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    setProducts(productsBase);
  }, []);

  return (
    <>
      <div className="">
        <Row gutter={[16, 16]}>
          {products.map((product) => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={<img alt={product.title} src={product.image} />}
              >
                <Meta title={product.title} description={product.description} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default SportProductsSupplies;
