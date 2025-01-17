import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductDetails from "../components/ProductDetails";

function ProductPage() {
  const { food } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/product/${food}`);
      const result = await response.json();
      setItems(result);
    };
    fetchData();
  }, [food]);

  return (
    <>
      <Announcement />
      <Header />
      {items.map((item) => (
        <ProductDetails key={uuidv4()} data={item} />
      ))}
      <Footer />
    </>
  );
}

export default ProductPage;
