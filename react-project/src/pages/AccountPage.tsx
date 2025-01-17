import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Announcement from "../components/Announcement";
import Navigation from "../components/Header";
import Footer from "../components/Footer";
import AccountDetails from "../components/AccountDetails";

type userType = {
  userKey: {
    login: boolean;
    user_id: number;
    username: string;
  };
};

function AccountPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const userInfo: userType = JSON.parse(localStorage.getItem("userInfo")!) || {
      userKey: { login: false, user_id: -1, username: "" },
    };

    var user = userInfo.userKey.username;

    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/profile/account/${user}`);
      const result = await response.json();
      setItems(result);
      console.log(result);
    };
    fetchData();
  }, []);

  return (
    <>
      <Announcement key={uuidv4()} />
      <Navigation key={uuidv4()} />
      <AccountDetails key={uuidv4()} data={items[0]} />
      <Footer key={uuidv4()} />
    </>
  );
}

export default AccountPage;
