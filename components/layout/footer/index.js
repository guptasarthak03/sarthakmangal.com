import Link from 'next/link';
import SocialHandle from '../../container/SocialHandle';
import { navList } from '../../constants/layout';

const Footer = () => {
  return (
    <div className="container footer-container">
      <div className="footerbrand">
        <p className="footerbrand-heading">Portfolio</p>
        <p>Sarthak Mangal</p>
      </div>
      <div className="page-links">
        <p className="footer-heading">Helpful Links</p>
        {navList.map(item => {
          return (
            <Link key={item.title} href={item.path}>
              <a className="footer-page-links">{item.title}</a>
            </Link>
          );
        })}
      </div>
      <div className="contact">
        <p className="footer-heading">Contact</p>
        <p>guptasarthak03@gmail.com</p>
        <p>Gurugram, India</p>
      </div>
      <SocialHandle isWhite={true} onHoverPrimary={true} />
    </div>
  );
};

export default Footer;
