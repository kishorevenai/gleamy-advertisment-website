import { Icon } from "@iconify/react";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/service" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact", link: "/contact" },
  ];

  const SideMenuContent = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        position: "absolute",
        top: "120px",
        right: 0,
        width: "500px",
        backgroundColor: "black",
        height: "calc(100vh - 120px)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        zIndex: 1100,
        transform: isOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.3s ease-in-out",
        color: "white",
      }}
    >
      {menuItems.map((item) => (
        <Link to={item.link} style={{ textDecoration: "none", color: "white" }}>
          <div
            key={item.name}
            style={{
              width: "100%",
              cursor: "pointer",
              padding: "10px 20px",
              borderBottom: "1px solid #ccc",
              fontSize: "80px",
            }}
          >
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <div
      style={{
        position: "sticky",
        height: "120px",
        top: 0,
        zIndex: 1000,
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <div
        style={{
          marginLeft: "3%",
          marginRight: "3%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "10%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            FB
          </p>
          <div
            style={{
              height: "10px",
              width: "10px",
              backgroundColor: "#FF7E21",
              borderRadius: "50%",
            }}
          ></div>

          <p
            style={{
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            IN
          </p>
          <div
            style={{
              height: "10px",
              width: "10px",
              backgroundColor: "#FF7E21",
              borderRadius: "50%",
            }}
          ></div>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            DR
          </p>
          <div
            style={{
              height: "10px",
              width: "10px",
              backgroundColor: "#FF7E21",
              borderRadius: "50%",
            }}
          ></div>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "semibold",
            }}
          >
            BE
          </p>
        </div>

        <p
          style={{
            fontSize: "40px",
          }}
        >
          gleamy
        </p>

        <div
          style={{
            width: "20%",
            minWidth: "100px",
            maxWidth: "150px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Icon color="#fbfbfb" icon={"material-symbols-light:search"}></Icon>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <p>MENU</p>
            <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </div>
      {SideMenuContent}
    </div>
  );
};

export default Header;
