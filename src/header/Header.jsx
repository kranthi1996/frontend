import "./Header.scss";
import HomeIcon from "../icons/HomeIcon";
import homeImage from "../assets/images/1126754.png";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="homeIcon">
          <HomeIcon />
        </div>
        <div className="container">
          <p className="home">HOME</p>
          <p>ABOUT US</p>
          <p>OUR AGENTS</p>
          <p>PROPERTIES</p>
          <p>GALLERY</p>
          <p>BLOG</p>
          <p>CONTACT US</p>
          <p>SEARCH</p>
          <button>Add Listing</button>
        </div>
      </div>
      <div className="homeImage">
          <img src={homeImage} alt="homeImage" />
          <div>
            <h1>Find your Dream Home</h1>
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </p>
          </div>
      </div> 
    </>
  );
};
export default Header;
