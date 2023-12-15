import './DropdownMenu.scss';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FaUser } from 'react-icons/fa';
import { CgMenuHotdog } from 'react-icons/cg';
import { FiShoppingCart, FiLogIn } from 'react-icons/fi';

export const DropdownMenu = ({ setOnMenuOpen, onMenuOpen }) => {
  const [navLinks, setNavLinks] = useState([]);
  // const [onMenuOpen, setOnMenuOpen] = useState(false);

  useEffect(() => {
    const navs = [
      { name: 'Login', path: '/login' },
      { name: 'Orders', path: '/myorders' },
      { name: 'Logout', path: '/login' },
    ];
    setNavLinks(navs);
  }, []);

  const handleClick = () => {
    setOnMenuOpen(!onMenuOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#"></a>
          <div className="btn-group">
            <button
              onClick={handleClick}
              type="button"
              className="btn dropdown-toggle"
              // data-bs-toggle="dropdown"
              // data-bs-display="static"
              // aria-expanded="false"
            >
              Menu
            </button>
            {onMenuOpen && (
              <ul className="dropdown-menu--mine dropdown-menu-end">
                {navLinks.map((d, i) => (
                  <li key={i}>
                    <Link to={d.path}>
                      <button className="dropdown-item" type="button">
                        {d.name}
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
