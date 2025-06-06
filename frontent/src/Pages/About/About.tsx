import CommonLayout from "../CommonTheme/CommonLayout";
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
        <p
          style={{
            fontSize: "40px",
          }}
        >
          WE ARE DIGITAL PRODUCTION TEAM.
        </p>

        <p
          style={{
            fontSize: "30px",
            lineHeight: "50px",
          }}
        >
          Gleamy is a leading design & software development agency based in
          berlin. We help startups & Fortune 500 companies delight humans on the
          other side of the screen.
        </p>
      </div>
    </CommonLayout>
  );
};

export default About;
