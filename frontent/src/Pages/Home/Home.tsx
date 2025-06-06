import framer from "../../assets/framer.png";
import Marquee from "../../Components/Marque/Marque";
import "./Home.css";

const Home = () => {
  return (
    <div
      className="home_container"
      style={{
        width: "100%",
        height: "calc(100vh - 120px)", // Adjust height based on your header/footer
      }}
    >
      <div
        className="vertical_cont"
        style={{ width: "90%", margin: "0 auto", paddingBottom: "20px" }}
      >
        <img
          src={framer}
          alt="framer"
          style={{
            animation: "spin 10s linear infinite",
            display: "block", // optional for layout
          }}
        />
      </div>

      {/* Add the keyframes globally */}
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>

      <div
        className="home_content"
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          width: "90%",
        }}
      >
        <div
          style={{
            flexDirection: "column",
            height: "300px",
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
        <div>
          <p className="MainText" style={{}}>
            Brand. Design. Product <br />
            In Hour Developement <br />& More
          </p>
        </div>
      </div>
      <Marquee className={"one"} bgColor={"red"} rotation={50} top="-60%" />
      <Marquee className={"two"} bgColor={"green"} rotation={-20} top="90%" />
    </div>
  );
};

export default Home;
