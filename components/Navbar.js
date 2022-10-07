import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-elements">
        <div className="nav-brand">
          <img src="/images/nav_logo.png" alt="Sarthak Mangal" />
        </div>
        <ul className="list-non-bullet nav-items">
          <li className="list-item-inline">
            <Link href="/">
              <a className="link active">Home</a>
            </Link>
          </li>
          <li className="list-item-inline">
            <Link href="/">
              <a className="link">About</a>
            </Link>
          </li>
          <li className="list-item-inline">
            <Link href="/">
              <a className="link">Projects</a>
            </Link>
          </li>
          <li className="list-item-inline">
            <Link href="/">
              <a className="link">Blogs</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
