import React from 'react';

function Nav() {
  const navItems = [
    { href: '#', label: "Today's Deal" },
    { href: '#', label: 'Customer Service' },
    { href: '#', label: 'Registry' },
    { href: '#', label: 'Gift Cards' },
    { href: '#', label: 'Sell' }
  ];

  return (
    <nav className="flex items-center w-full h-[7vh] bg-[#232F3E]">
      <div className="flex items-center justify-start max-w-[1200px] h-full w-full pl-[1.2rem]">
        <div className="flex justify-center items-center h-full text-[14px] font-semibold py-2 px-2.5 hover:border hover:border-gray-300 hover:rounded hover:bg-[#37475A]">
          <a href="#" className="flex items-center align-center">
            <img
              className="w-[20px] invert-[100%] mr-[8px]"
              src="/hamburger-menu.svg"
              alt="hamburger-menu"
            />
            <span className="text-white">All</span>
          </a>
        </div>

        {navItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-full text-sm font-semibold font-['Amazon_Ember'] px-3 py-2 transition duration-200 hover:bg-[#37475A] hover:border hover:border-[#E6E6E6] hover:rounded"
          >
            <a href={item.href} className="text-white">
              {item.label}
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
