import React from 'react';
import './Nav.css';

function Nav() {
  const navItems = [
    { href: '#', label: "Today's Deal" },
    { href: '#', label: 'Customer Service' },
    { href: '#', label: 'Registry' },
    { href: '#', label: 'Gift Cards' },
    { href: '#', label: 'Sell' }
  ];

  return (
    <nav>
      <div className="navChildA">
        <div className="hamburgerAllDiv">
          <a href="#">
            <img
              className="hamburgerIcon"
              src="/hamburger-menu.svg"
              alt="hamburger-menu"
            />
            <span>All</span>
          </a>
        </div>

        {navItems.map((item, index) => (
          <div key={index}>
            <a href={item.href}>{item.label}</a>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
