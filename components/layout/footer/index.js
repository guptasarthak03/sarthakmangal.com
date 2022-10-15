import SocialAccount from '../../common/SocialAccount';
import SocialHandle from '../../container/SocialHandle';

const Footer = () => {
  return (
    <div class="container footer-container">
      <div class="footerbrand">
        <p class="footerbrand-heading">Portfolio</p>
        <p>Sarthak Mangal</p>
      </div>
      <div class="page-links">
        <p class="footer-heading">Helpful Links</p>
        <p class="footer-page-links">Home</p>
        <p class="footer-page-links">About</p>
        <p class="footer-page-links">Projects</p>
        <p class="footer-page-links">Blogs</p>
      </div>
      <div class="contact">
        <p class="footer-heading">Contact</p>
        <p>guptasarthak03@gmail.com</p>
        <p>Gurugram, India</p>
      </div>
      <SocialHandle />
    </div>
  );
};

export default Footer;
