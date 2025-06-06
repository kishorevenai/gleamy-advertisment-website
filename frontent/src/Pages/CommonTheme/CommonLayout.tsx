import framer from "../../assets/framer.png";
import { useEffect, useState } from "react";

const CommonLayout = ({
  title,
  capital,
  children,
}: {
  title: string;
  capital: string;
  children?: React.ReactNode;
}) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 50); // slight delay for smoother transition
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        border: "1px solid white",
        height: "calc(100vh - 130px)", // Adjust height based on your header/footer
        position: "relative",
        opacity: fadeIn ? 1 : 0,
        transition: "opacity 0.8s ease-in-out",
      }}
    >
      <p
        style={{
          position: "absolute",
          bottom: 0,
          fontSize: "80px",
          color: "transparent",
          WebkitTextStroke: "1px white",
          opacity: 0.2,
        }}
      >
        THE CREA8TER
      </p>
      <div style={{ width: "90%", margin: "0 auto", paddingBottom: "20px" }}>
        <img
          src={framer}
          alt="framer"
          style={{
            width: "100px", // optional: control size
            animation: "spin 10s linear infinite",
            display: "block", // optional for layout
          }}
        />
      </div>

      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>

      <div
        style={{
          width: "70%",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontSize: "40px",
          }}
        >
          {title}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          width: "90%",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            flexDirection: "column",
            height: "300px",
            width: "100px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              rotate: "-90deg",
              fontSize: "10px",
            }}
          >
            DEVELOPERMENT
          </p>
          <p
            style={{
              rotate: "-90deg",
              fontSize: "10px",
            }}
          >
            DESIGN
          </p>
          <p
            style={{
              rotate: "-90deg",
              fontSize: "10px",
            }}
          >
            {" "}
            DIGITAL MARKET
          </p>
        </div>
        <div
          style={{
            aspectRatio: "1 / 1",
            height: "350px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "300px",
              color: "transparent",
              WebkitTextStroke: "3px white",
            }}
          >
            {capital}
          </p>
        </div>
        <div
          style={{
            width: "calsc(100% - 100px  - 350px)",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default CommonLayout;
