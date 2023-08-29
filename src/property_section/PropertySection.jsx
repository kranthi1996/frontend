import "./PropertySection.scss";
import home4 from "../assets/images/home4.png";
import bestplace from "./../assets/images/Calltoaction.png";
const PropertySection = () => {
  const properties = [
    {
      type: "Sell your home",
      des: "We do a free evaluation to be sure you want to start selling.",
    },
    {
      type: "Rent your home",
      des: "We do a free evaluation to be sure you want to start selling.",
    },
    {
      type: "Buy a home",
      des: "We do a free evaluation to be sure you want to start selling.",
    },
    {
      type: "Free marketing",
      des: "We do a free evaluation to be sure you want to start selling.",
    },
  ];
  return (
    <>
      <div className="property_section">
        <div className="pa-sec">
          <div className="ta-center">
            <h1>Properties by Area</h1>
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </p>
          </div>
        </div>
        <div className="property_type">
          {properties.map((el, index) => {
            return (
              <div className="list_imgs">
                <img src={home4} alt="home4" className="home4" />
                <h4>{el.type}</h4>
                <p>{el.des}</p>
                <p className="read_more">Read more</p>
              </div>
            );
          })}
        </div>
        <div className="bestplace">
          <img src={bestplace} alt="bestplace" />
        </div>
      </div>
    </>
  );
};
export default PropertySection;
