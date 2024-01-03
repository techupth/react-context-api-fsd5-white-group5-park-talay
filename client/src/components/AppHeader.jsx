import { useContext } from "react";
import { UserDataContext } from "../contexts/UserDataContext";

function AppHeader() {
  const userData = useContext(UserDataContext);

  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {userData.userData.username}</h2>
    </div>
  );
}

export default AppHeader;
