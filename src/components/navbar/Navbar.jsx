import "./Navbar.css";
import { FaRegUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

function Navbar() {
  return (
    <header>
      <div className="container">
        <div className="site-header">
          <div className="header-logo">
            <img src="./navbarlogo.svg" alt="" />
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li>
                <a className="nav-link" href="">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link" href="">
                  Shop
                </a>
              </li>
              <li>
                <a className="nav-link" href="">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link" href="">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="navbar-icons">
            <a href="">
              <FaRegUser />
            </a>
            <a href="">
              <CiSearch />
            </a>
            <a href="">
              <IoIosHeartEmpty />
            </a>
            <a href="">
              <IoCartOutline />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
