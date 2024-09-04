import React from 'react';
import './Header.css';

function LeftSection() {
  return (
    <div className="leftSection flex items-center justify-around w-[275px] h-[85%] pr-[5px] pl-[10px] text-white">
      <a href="#">
        <img
          className="amazonLogo w-[120px] h-[40px] mx-[11px] py-[4px]"
          src="/Amazon-logo.png"
          alt="Amazon Logo"
        />
      </a>

      <a href="#" className="delivery flex items-center justify-center mx-[2px] my-[5px] px-[9px]">
        <img src="/Ei-location.svg.png" alt="" className="pinDrop w-[30px] h-[30px] filter invert" />
        <span className="delNigeria flex-1 text-sm text-gray-300">
          Deliver to <span className="bold text-white font-bold">Nigeria</span>
        </span>
      </a>
    </div>
  );
}

function MiddleSection() {
  return (
    <div id="middleSection" className="flex flex-1">
      <button
        id="dropdownAll"
        className="text-black h-[50px] w-[70px] rounded-l-lg bg-gray-300 hover:bg-gray-400 border-none"
      >
        All
      </button>
      <input
        id="inputBar"
        type="text"
        placeholder="Search Amazon"
        className="flex-grow h-[50px] border-none px-3 placeholder-opacity-50"
      />
      <button
        id="searchButton"
        className="flex justify-center items-center h-[50px] w-[50px] rounded-r-lg bg-yellow-500"
      >
        <img id="searchIcon" src="/search.svg" alt="Search Icon" className="w-[30px] h-[30px]" />
      </button>
    </div>
  );
}

function RightSection() {
  const handleLanguageChange = (lang) => {
    console.log(`Language changed to: ${lang}`);
  };

  return (
    <div id="rightSection" className="flex w-[500px] items-center justify-evenly h-[85%] px-[20px] text-white">
      <div className="nationalityHive flex justify-center items-center w-[15%] h-full relative">
        <a className="nationality flex items-center justify-between" href="#">
          <img className="usaFlag w-[25px] mr-[5px]" src="/usa-flag.png" alt="USA" />
          <span>EN</span>
        </a>
        <DropdownContent onLanguageChange={handleLanguageChange} />
      </div>
      <AccountHolder id="akkantHold" />
      <a className="orders flex flex-col justify-center items-center w-[20%] h-full" href="">
        <p className="smallParagraph">Return</p>
        <p className="mediumParagraph">& Orders</p>
      </a>
      <a className="cartQuantity flex justify-center flex-col items-center w-[20%] h-full" href="">
        <p className="mediumParagraph">Cart</p>
      </a>
    </div>
  );
}

function DropdownContent({ onLanguageChange }) {
  return (
    <div className="dropdownContent hidden flex-col w-[230px] rounded-lg absolute top-[50px] bg-white z-10 p-[10px]">
      <div className="contentFloat flex flex-col">
        <span className="flex font-medium">
          <span className="changeLang text-sm cursor-pointer" onClick={() => onLanguageChange('EN')}>
            Change language
          </span>
          <span className="learnLang text-sm text-blue-600 pl-2">
            <a href="#">Learn more</a>
          </span>
        </span>
        <a className="eng border-b border-gray-200 text-gray-600 text-sm py-3">
          <span>
            <input type="radio" className="radioInput mr-2" name="language" onChange={() => onLanguageChange('EN')} />
            English - EN
          </span>
        </a>
        <a className="fr border-b border-gray-200 text-gray-600 text-sm py-3">
          <span>
            <input type="radio" className="radioInput mr-2" name="language" onChange={() => onLanguageChange('FR')} />
            French - FR
          </span>
        </a>
        <a className="es border-b border-gray-200 text-gray-600 text-sm py-3">
          <span>
            <input type="radio" className="radioInput mr-2" name="language" onChange={() => onLanguageChange('ES')} />
            Spanish - ES
          </span>
        </a>
        <span className="directive text-sm text-gray-600 pt-4 cursor-pointer">You are shopping on Amazon.com</span>
        <span className="changeCounty flex justify-center mt-2">
          <a href="#" className="text-blue-600 text-sm hover:underline">Change country/region.</a>
        </span>
      </div>
    </div>
  );
}

function AccountHolder() {
  return (
    <div className="accountHolder flex flex-col justify-center items-center h-full w-[40%] relative text-white">
      <a href="#">
        <p className="smallParagraph">Hello, sign in</p>
        <p className="mediumParagraph">Account & Lists</p>
      </a>
      <div className="accountDropdown hidden flex-col rounded-lg absolute top-[47px] right-[-130px] w-[590px] bg-white z-10 p-[14px]">
        <div className="flex flex-row">
          <div className="dropdownLeft w-[200px] p-2">
            <h3 className="text-lg font-bold">Your Lists</h3>
            <ul>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Create a List</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Find a List</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Wish List</a></li>
            </ul>
          </div>
          <div className="dropdownRight w-[390px] p-2">
            <h3 className="text-lg font-bold">Your Account</h3>
            <ul>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Orders</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Recommendations</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:underline">Your Subscribe & Save Items</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-center w-full h-[11vh] bg-[#131921]">
      <LeftSection />
      <MiddleSection />
      <RightSection />
    </header>
  );
}

export default Header;
