import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
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
