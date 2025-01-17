import { useNavigate } from "react-router-dom";

interface Properties {
  InnerText: string;
}

function ResetPassword({ InnerText }: Properties) {
  const navigateTo = useNavigate();

  const submit = () => {
    setTimeout(() => {
      navigateTo("/reset-password");
    }, 500);
  };
  return (
    <>
      <button onClick={submit} className="btn btn-danger">
        {InnerText}
      </button>
    </>
  );
}

export default ResetPassword;
