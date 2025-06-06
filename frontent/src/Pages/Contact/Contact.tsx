import { useState, useEffect } from "react";
const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 50); // slight delay for smoother transition
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        opacity: fadeIn ? 1 : 0,
        transition: "opacity 0.8s ease-in-out",
      }}
    >
      <div>
        <p
          style={{
            fontSize: "150px",
          }}
        >
          LET'S WORK
          <br /> TOGETHER
        </p>

        <p
          style={{
            fontSize: "30px",
            WebkitTextStroke: "1px white",
            paddingLeft: "20px",
          }}
        >
          We’re open to talk to good people. Just say hello and we’ll start a
          productive cooperation. Email: talktous@theprid.com
        </p>
      </div>
      <form style={{ width: "50%", height: "500px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <input
            style={{
              backgroundColor: "transparent",
              borderRadius: "50px",

              paddingLeft: "20px",
              fontSize: "30px",
              border: "white solid 1px",
              color: "white",
              height: "50px",
            }}
            placeholder="NAME"
          ></input>
          <input
            style={{
              backgroundColor: "transparent",
              borderRadius: "50px",
              color: "white",
              paddingLeft: "20px",
              fontSize: "30px",
              border: "white solid 1px",
              height: "50px",
            }}
            placeholder="EMAIL"
          ></input>
        </div>
        <textarea
          placeholder="MESSAGE"
          style={{
            color: "white",
            backgroundColor: "transparent",
            width: "95%",
            height: "300px",
            borderRadius: "50px",
            marginTop: "20px",
            paddingLeft: "20px",
            paddingTop: "20px",
            fontSize: "30px",
            border: "white solid 1px",
          }}
        />

        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            height: isHovered ? "200px" : "150px",
            width: isHovered ? "200px" : "150px",
            border: "none",
            borderRadius: "50%",
            fontSize: "15px",
            cursor: "pointer",
            transition: "all 0.1s ease-in-out",
          }}
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default Contact;
