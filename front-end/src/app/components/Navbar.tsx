
import Link from 'next/link';

export default function AppNavbar () {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" href="/">
            My Blog App
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/my-blogs">
                  My Blogs
                </Link>
              </li>
              <li className="nav-item">
                <a href="/logout" className="nav-link">Sign Out</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };