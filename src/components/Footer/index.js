import './index.css'

import {
  FaInstagram,
  FaPinterestSquare,
  FaTwitterSquare,
  FaFacebookSquare,
} from 'react-icons/fa'

const Footer = () => (
  <div className="footer-box">
    <div className="footer-app-logo-box">
      <img
        src="https://res.cloudinary.com/diinjqsug/image/upload/v1688639688/Frame_275_tbwnjp.svg"
        alt="website-footer-logo"
      />
      <h1 className="footer-app-title">Tasty Kitchens</h1>
    </div>
    <p className="footer-caption-text">
      The only thing we are serious about is food. Contact us on
    </p>
    <p className="footer-caption-text">Contact Us</p>
    <div className="container">
      <FaPinterestSquare className="logos" testid="pintrest-social-icon" />
      <FaInstagram className="logos" testid="instagram-social-icon" />
      <FaTwitterSquare className="logos" testid="twitter-social-icon" />
      <FaFacebookSquare className="logos" testid="facebook-social-icon" />
    </div>
  </div>
)

export default Footer
