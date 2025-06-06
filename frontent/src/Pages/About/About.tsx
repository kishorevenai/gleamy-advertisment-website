import CommonLayout from "../CommonTheme/CommonLayout";
import "./About.css";

const About = () => {
  return (
    <CommonLayout title="About Us" capital="g">
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <p className="font_one">WE ARE DIGITAL PRODUCTION TEAM.</p>

        <p className="font_two">
          Gleamy is a leading design & software development agency based in
          berlin. We help startups & Fortune 500 companies delight humans on the
          other side of the screen.
        </p>
      </div>
    </CommonLayout>
  );
};

export default About;
