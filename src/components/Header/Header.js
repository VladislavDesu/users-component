import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
   return (
      <header className="header">
         <nav className="nav">
            <Link to="/" className="brand-logo">
               Logo
            </Link>
            <ul className="nav__list">
               <li className="nav__item">
                  <Link to="/users" className="nav__link">
                     Users
                  </Link>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default Header;
