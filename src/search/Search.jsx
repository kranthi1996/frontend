import "./Search.scss";
import homeImagea from "../assets/images/1126756.png";
import homeImageb from "../assets/images/1126757.png";
import homeImagec from "../assets/images/1126758.png";
import homeImagee from "../assets/images/1126759.png";
import mapPin from "../assets/images/MapPin.png";
const Search = () => {
  const images = [
    { img: homeImagea, place: "Harrow", listings: "25 listings" },
    { img: homeImageb, place: "London", listings: "100 listings" },
    { img: homeImagec, place: "Birmingham", listings: "35 listings" },
    { img: homeImagee, place: "Hounslow", listings: "76 listings" },
    { img: homeImagea, place: "Stratford", listings: "5 listings" },
    { img: homeImageb, place: "Watford", listings: "25 listings" },
  ];
  return (
    <>
      <div className="search_container">
        <div className="search">
          <div className="item1">
            <h6>Locations</h6>
            <select name="locations" class="selectBox">
              <option>Select your city</option>
            </select>
          </div>
          <div className="vl">
            <p></p>
          </div>
          <div>
            <h6>Property Type</h6>
            <select name="locations" class="selectBox">
              <option>Select property type</option>
            </select>
          </div>
          <div className="vl">
            <p></p>
          </div>
          <div>
            <h6>Rent Range</h6>
            <select name="locations" class="selectBox">
              <option>Select rent range</option>
            </select>
          </div>
          <div className="vl">
            <p></p>
          </div>
          <div className="search_button">
            <button>Search</button>
          </div>
        </div>
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
        <div className="images">
          {images.map((el, index) => {
            return (
              <div className="list_imgs">
                <img src={el.img} alt="homeImage" />
                <h4>{el.place}</h4>
                <p>{el.listings}</p>
                <img src={mapPin} alt="MapPin" className="mapPin" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Search;
