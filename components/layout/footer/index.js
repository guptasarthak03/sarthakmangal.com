import Link from 'next/link';
import SocialHandle from '../../container/SocialHandle';
import { navList } from '../../constants/layout';

const Footer = () => {
  return (
    <div class="container footer-container">
      <div class="footerbrand">
        <p class="footerbrand-heading">Portfolio</p>
        <p>Sarthak Mangal</p>
      </div>
      <div class="page-links">
        <p class="footer-heading">Helpful Links</p>
        {navList.map(item => {
          return (
            <Link href={item.path}>
              <a class="footer-page-links">{item.title}</a>
            </Link>
          );
        })}
      </div>
      <div class="contact">
        <p class="footer-heading">Contact</p>
        <p>guptasarthak03@gmail.com</p>
        <p>Gurugram, India</p>
      </div>
      <SocialHandle isWhite={true} onHoverPrimary={true} />
    </div>
  );
};

export default Footer;
