import { useState, useEffect } from "react";

interface Properties {
  innerText: string;
  foodId: number;
}

type userType = {
  userKey: {
    login: boolean;
    user_id: number;
    username: string;
  };
};

function AddToCart({ innerText, foodId }: Properties) {
  const [clickStatus, setClickStatus] = useState(false);

  const handleEvent = async () => {
    setClickStatus(true);

    console.log("Add to Cart clicked");
  };

  useEffect(() => {
    if (clickStatus) {
      const userInfo: userType = JSON.parse(
        localStorage.getItem("userInfo")!
      ) || {
        userKey: { login: false, user_id: -1, username: "" },
      };

      var userId = userInfo.userKey.user_id;

      const fetchData = async () => {
        const response = await fetch(
          `http://localhost:3000/cart/add-to-cart?user=${userId}&food=${foodId}`
        );
        const result = await response.json();
        console.log(result);
      };
      fetchData();
      console.log(`userId: ${userId}, foodId: ${foodId}`);
    }
  }, [clickStatus]);

  return (
    <button onClick={handleEvent} className="btn btn-danger">
      {innerText}
    </button>
  );
}
export default AddToCart;
