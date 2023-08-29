import HomeIcon from "../icons/HomeIcon";
import "./FooterCom.scss";
import SocialMedia1 from "../assets/images/SocialMedia1.png";
import SocialMedia2 from "../assets/images/SocialMedia2.png";
import SocialMedia3 from "../assets/images/SocialMedia3.png";
import SocialMedia4 from "../assets/images/SocialMedia4.png";
const Footer = () => {
  const socialMediaIcons = [
    SocialMedia1,
    SocialMedia2,
    SocialMedia3,
    SocialMedia4,
  ];
  return (
    <>
      <div className="footer">
        <div className="item1">
          <HomeIcon />
          <h4>Contact Us</h4>
          <p>Call : +123 400 123</p>
          <p className="short">
            Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
            auctor felis
          </p>
          <p>Email: example@mail.com</p>
          {socialMediaIcons.map((el) => (
            <img src={el} alt="socialMediaIcons" />
          ))}
        </div>
        <div>
          <h4>Features</h4>
          <p>Home</p>
          <p>Pricing</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div>
          <h4>Company</h4>
          <p>About Us</p>
          <p>Press</p>
          <p>Contact</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>
        <div>
          <h4>Team and policies</h4>
          <p>Terms of servies</p>
          <p>Privacy Policy</p>
          <p>Security</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
