import { useEffect, useState } from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navigation from "../components/Header";
import ProductCart from "../components/ProductCart";

type userType = {
  userKey: {
    login: boolean;
    user_id: number;
    username: string;
  };
};

function Cart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userInfo: userType | null = localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo")!)
        : null;

      console.log(userInfo);

      if (userInfo) {
        const response = await fetch(
          `http://localhost:3000/cart?id=${userInfo.userKey.user_id}`
        );

        const result = await response.json();
        setItems(result);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Announcement />
      <Navigation />
      <div className="container d-flex flex-column gap-3 p-3">
        {items.map((item) => (
          <ProductCart data={item} />
        ))}
      </div>
      <hr className="border border-3 border-danger" />

      <Footer />
    </>
  );
}

export default Cart;

// {
//   userKey: {
//     username: result[0].username,
//     user_id: result[0].user_id,
//     login: true,
//   },
// };
