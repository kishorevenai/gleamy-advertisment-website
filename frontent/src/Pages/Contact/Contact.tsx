import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import axios from "axios";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handle_submit_message = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.warn("Please fill in all fields");
      return;
    }

    try {
      const result = await axios.post("http://localhost:3600/api/contact", {
        name,
        email,
        message,
      });
      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div
      className="contact_form"
      style={{
        height: "calc(100vh - 120px)",
        justifyContent: "start",
        margin: "2px",
        alignItems: "center",
        opacity: fadeIn ? 1 : 0,
        transition: "opacity 0.8s ease-in-out",
      }}
    >
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      <div className="content">
        <p className="contact_text_one" style={{ textWrap: "wrap" }}>
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

      <form
        onSubmit={handle_submit_message}
        className="forms"
        style={{ height: "500px" }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="NAME"
            style={{
              backgroundColor: "transparent",
              borderRadius: "50px",
              paddingLeft: "20px",
              fontSize: "30px",
              border: "white solid 1px",
              color: "white",
              height: "50px",
            }}
          />
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="EMAIL"
            style={{
              backgroundColor: "transparent",
              borderRadius: "50px",
              color: "white",
              paddingLeft: "20px",
              fontSize: "30px",
              border: "white solid 1px",
              height: "50px",
            }}
          />
        </div>

        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
          type="submit"
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
