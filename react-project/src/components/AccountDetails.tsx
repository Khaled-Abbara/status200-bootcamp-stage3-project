import Logout from "./Logout";
import ResetPassword from "./ResetPassword";
interface Properties {
  data: { user_id: number; username: string; user_created_at: string };
}

function AccountDetails({ data }: Properties) {
  if (!data || !data.username) {
    return (
      <div className="container text-center mt-5 mb-5 pt-5 pb-5">
        <p>Loading user data...</p>
      </div>
    );
  }
  return (
    <>
      <div className="container text-center mt-5 mb-5 pt-5 pb-5">
        <img
          style={{ borderRadius: "50%" }}
          src="https://placehold.co/200x200"
          alt="Profile Image"
        />
        <h3>{data.username}</h3>
        <p>{data.user_created_at}</p>
        <div className="d-flex justify-content-center gap-1">
          <Logout InnerText="Log out" />
          <ResetPassword InnerText="Change Password" />
        </div>
      </div>
    </>
  );
}

export default AccountDetails;
