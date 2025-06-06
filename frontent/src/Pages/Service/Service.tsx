import CommonLayout from "../CommonTheme/CommonLayout";
import "./Service.css";

const Service = () => {
  const servicesProvided = [
    {
      title: "Brand Identity",
      desc: "Bringing the history of your brand to the forefront gives an emotional dimension to your visual identity, which is essential today more than ever in today's digital landscape.",
    },
    {
      title: "Technology",
      desc: "Bringing the history of your brand to the forefront gives an emotional dimension to your visual identity, which is essential today more than ever in today's digital landscape.",
    },
    {
      title: "UX/UI Design.",
      desc: "Bringing the history of your brand to the forefront gives an emotional dimension to your visual identity, which is essential today more than ever in today's digital landscape.",
    },
  ];

  return (
    <CommonLayout title="Service" capital="s">
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {servicesProvided.map((service, index) => {
          return (
            <CardItems key={index} title={service.title} desc={service.desc} />
          );
        })}
      </div>
    </CommonLayout>
  );
};

export const CardItems = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div
      className="service_box"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        height: "261px",
      }}
    >
      <p
        style={{
          fontSize: "30px",
          fontWeight: "semibold",
        }}
      >
        {title}
      </p>
      <p
        style={{
          fontSize: "14px",
          width: "90%",
        }}
      >
        {desc}
      </p>
      <p
        style={{
          fontSize: "25px",
          fontWeight: "semibold",
        }}
      >
        {" "}
        Know More
      </p>
    </div>
  );
};

export default Service;
