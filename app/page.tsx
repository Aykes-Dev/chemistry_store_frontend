import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/header";
import ShopCard from "./components/shop/card";
import Brands from "./components/brands";

export default function Home() {
  const lst = [
    {
      id: 1,
      imageUrl: "images/means/cement.jpg",
      title: "Cement Cleaner",
      description: "Очиститель после ремонта (канистра 1 л)"
    
    },
    {
      id: 2,
      imageUrl: "images/means/gloss.jpg",
      title: "Gloss Concentrate",
      description: "Концентрированное чистящее средство ( канистра 5,5 кг )"
    },
    {
      id: 3,
      imageUrl: "images/means/wc-gel.jpg",
      title: "WC-gel",
      description: "Средство для чистки сантехники (канистра 5,3 кг)"
    },
  ];
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-between py-20">
        <span className="h2 pb-14">Топ-3 товаров:</span>
        <Row>
          {lst.map((card) => (
            <Col key={card.id} className="m-12">
              <ShopCard>{card}</ShopCard>
            </Col>
          ))}
        </Row>
      </main>
      <Brands />
    </>
  );
}
