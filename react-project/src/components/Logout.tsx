import { useNavigate } from "react-router-dom";

interface Properties {
  InnerText: string;
}

function Logout({ InnerText }: Properties) {
  const navigateTo = useNavigate();

  const disconnect = () => {
    localStorage.removeItem("userInfo");
    setTimeout(() => {
      navigateTo("/");
    }, 1000);
  };
  return (
    <>
      <button onClick={disconnect} className="btn btn-danger">
        {InnerText}
      </button>
    </>
  );
}

export default Logout;
