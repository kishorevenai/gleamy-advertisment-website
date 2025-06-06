import CommonLayout from "../CommonTheme/CommonLayout";
import picOne from "../../assets/pic1.jpg";
import picTwo from "../../assets/pic2.jpg";
import picThree from "../../assets/pic3.jpg";
import "./Portfolio.css";
const Portfolio = () => {
  const photos = [
    {
      title: "Gleamy Portfolio",
      type: "UI/UX",
      img: picOne,
    },
    {
      title: "NFTs Dashboard",
      type: "UI/UX",
      img: picTwo,
    },
    {
      title: "Gleamy Portfolio",
      type: "UI/UX",
      img: picThree,
    },
  ];

  return (
    <CommonLayout title="Portfolio" capital="p">
      <div
        style={{
          display: "flex",
          gap: "5px",
          flexWrap: "wrap",
        }}
      >
        {photos.map((photo, index) => {
          return (
            <CommoonCard
              key={index}
              title={photo.title}
              type={photo.type}
              img={photo.img}
            />
          );
        })}
      </div>
    </CommonLayout>
  );
};

const CommoonCard = ({
  title,
  type,
  img,
}: {
  title: string;
  type: string;
  img: string;
}) => {
  return (
    <div className="portfolio_card">
      <img
        src={img}
        style={{
          width: "100%",
          height: "70%",
        }}
      ></img>
      <p
        style={{
          fontSize: "25px",
          textAlign: "center",
        }}
      >
        {" "}
        {title}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "5px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "orange",
          }}
        ></div>
        <p>{type}</p>
      </div>
    </div>
  );
};

export default Portfolio;
