import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const MainLayout = () => {
  return (
    <div
      style={{
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
