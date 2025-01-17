import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ProductCard from "./ProductCard";

interface Properties {
  category: string;
  categoryUrl: string;
}

function FeaturedCategory({ category, categoryUrl }: Properties) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/menu/${categoryUrl}`);
      const result = await response.json();
      setItems(result);
      console.log(result);
    };
    fetchData();
  }, []);

  return (
    <section className="p-3 mb-5">
      <h3 className="p-2 text-center">{category}</h3>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {items.map((item) => (
          <ProductCard key={uuidv4()} data={item} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedCategory;
