import Link from 'next/link';
import { navList } from '../../constants/layout';

const Navbar = ({ active = 'home' }) => {
  return (
    <nav className="navbar">
      <div className="navbar-elements">
        <div className="nav-brand">
          <img src="/images/nav_logo.png" alt="Sarthak Mangal" />
        </div>
        <ul className="list-non-bullet nav-items">
          {navList.map(item => {
            return (
              <li key={item.name} className="list-item-inline">
                <Link href={item.path}>
                  <a className={`link ${item.name == active ? 'active' : ''} `}>
                    {item.title}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
