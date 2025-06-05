import { Icon } from "@iconify/react";
import { useState } from "react";
import Hamburger from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

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
    </div>
  );
};

export default Header;
