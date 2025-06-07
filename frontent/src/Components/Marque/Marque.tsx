import "./Marque.css";

const Marquee = ({
  className,
  rotation = -16,
  top = "50%",
  left = "-50%",
}: any) => {
  return (
    <div
      className={`marquee-wrapper ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        top,
        left,
        backgroundColor: "grey",
      }}
    >
      <div className="marquee-track">
        {Array(9)
          .fill(-1)
          .map((_, i) => (
            <div className="marquee-item" key={i}>
              MARKETING <span className="dot">•</span> MOTION{" "}
              <span className="dot">•</span> ANIMATION{" "}
              <span className="dot">•</span> BRANDING{" "}
              <span className="dot">•</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Marquee;
