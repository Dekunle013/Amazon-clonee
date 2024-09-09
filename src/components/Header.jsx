import { Link } from 'react-router-dom';
import React from 'react';
import './Header.css';

function LeftSection() {
  return (
    <div className="leftSection flex items-center justify-around w-auto h-[100%] py-[1px] px-[20px] text-white bg-yellow">

      <Link to="/home" href="#" className=" flex items-center justify-center w-[120px] h-[100px] px-[10px] py-[5px] hover:border hover:border-gray-300 hover:rounded-sm hover:h-[90%] hover:flex">
        <img
          className="amazonLogo static shrink-0"
          src="/Amazon-logo.png"
          alt="Amazon Logo"
        />
      </Link>

      <a href="#" className="delivery flex items-center justify-center w-[150px] h-[100px] px-[10px] py-[5px] hover:border hover:border-gray-300 hover:rounded-sm hover:h-[90%] hover:flex">
        <img src="/Ei-location.svg.png" alt="" className="pinDrop w-[30px] invert-[100%]" />
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
        className="flex justify-center items-center h-[50px] w-[55px] rounded-r-lg bg-[#FEBD69]"
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
        <a className="nationality flex items-center justify-between w-auto h-inherit" href="#">
          <img className="usaFlag w-[25px] mr-[5px]" src="/usa-flag.png" alt="USA" />
          <span className="text-sm">EN</span>
        </a>
        <DropdownContent onLanguageChange={handleLanguageChange} />
      </div>
      <AccountHolder id="akkantHold" />

      <Link to="/orders" className="orders flex flex-col justify-center items-center w-[20%] h-full" href="">
        <p className="smallParagraph">Return</p>
        <p className="mediumParagraph">& Orders</p>
      </Link>
      <Link to="/cart" className="cartQuantity flex justify-center flex-col items-center w-[20%] h-full" href="">
        <p className="mediumParagraph">Cart</p>
        
      </Link>
    </div>
  );
}

function DropdownContent({ onLanguageChange }) {
  return (
    <div className="dropdownContent hidden w-[300px] h-auto rounded-md absolute top-[58px] left-[-5px] bg-white z-10 p-2">
      <div className="contentFloat flex flex-col w-auto h-auto">
        <span className="flex font-medium">
          <span className="border border-green-500 w-auto h-auto flex items-center text-[13px] font-normal text-[#444444] font-normal cursor-pointer" onClick={() => onLanguageChange('EN')}>
            Change language
          </span>
          <span>
            <a href="#" className="w-auto h-auto pl-2 flex items-center text-[13px] font-normal text-[#007185] decoration-[#007185]">Learn more</a>
          </span>
        </span>

        <a className="flex items-center text-[#444444] font-normal text-lg py-[8px] cursor-pointer hover:text-orange-500 hover:underline hover:decoration-orange-500">
            <input type="radio" className="mr-[10px] w-[20px] h-[20px]" name="language" onChange={() => onLanguageChange('EN')} />
            English - EN
        </a>

        <hr  className="w-[89%] ml-[11%]"/>

        <a className="flex items-center text-[#444444] font-normal text-lg py-[8px] cursor-pointer hover:text-orange-500 hover:underline hover:decoration-orange-500">
            <input type="radio" className="mr-[10px] w-[20px] h-[20px]" name="language" onChange={() => onLanguageChange('ES')} />
            español - ES
        </a>
        <a className="flex items-center text-[#444444] font-normal text-lg py-[8px] cursor-pointer hover:text-orange-500 hover:underline hover:decoration-orange-500">
            <input type="radio" className="mr-[10px] w-[20px] h-[20px]" name="language" onChange={() => onLanguageChange('AR')} />
            العربية - AR
        </a>
        <a className="flex items-center text-[#444444] font-normal text-lg py-[8px] cursor-pointer hover:text-orange-500 hover:underline hover:decoration-orange-500">
            <input type="radio" className="mr-[10px] w-[20px] h-[20px]" name="language" onChange={() => onLanguageChange('DE')} />
            Deutsch - DE
        </a>
        <a className="flex items-center text-[#444444] font-normal text-lg py-[8px] cursor-pointer hover:text-orange-500 hover:underline hover:decoration-orange-500">
            <input type="radio" className="mr-[10px] w-[20px] h-[20px]" name="language" onChange={() => onLanguageChange('HE')} />
            עברית - HE
        </a>
        <a className="flex items-center text-[#444444] font-normal text-lg py-[8px] cursor-pointer hover:text-orange-500 hover:underline hover:decoration-orange-500">
            <input type="radio" className="mr-[10px] w-[20px] h-[20px]" name="language" onChange={() => onLanguageChange('KO')} />
            한국어 - KO
        </a>
        <a className="flex items-center text-[#444444] font-normal text-lg py-[8px] cursor-pointer hover:text-orange-500 hover:underline hover:decoration-orange-500">
            <input type="radio" className="mr-[10px] w-[20px] h-[20px]" name="language" onChange={() => onLanguageChange('PT')} />
            português - PT
        </a>
        <a className="flex items-center text-[#444444] font-normal text-lg py-[8px] cursor-pointer hover:text-orange-500 hover:underline hover:decoration-orange-500">
            <input type="radio" className="mr-[10px] w-[20px] h-[20px]" name="language" onChange={() => onLanguageChange('ZH')} />
            中文 (简体) - ZH
        </a>
        <a className="flex items-center text-[#444444] font-normal text-lg py-[8px] cursor-pointer hover:text-orange-500 hover:underline hover:decoration-orange-500">
            <input type="radio" className="mr-[10px] w-[20px] h-[20px]" name="language" onChange={() => onLanguageChange('ZH')} />
            中文 (繁體) - ZH
        </a>

        <hr  className="w-[90%] m-auto"/>

        <span className="flex font-medium">
          <span className="border border-green-500 w-auto h-auto flex items-center text-[13px] font-normal text-[#444444] font-normal cursor-pointer" onClick={() => onLanguageChange('EN')}>
            Change currency
          </span>
          <span>
            <a href="#" className="w-auto h-auto pl-2 flex items-center text-[13px] font-normal text-[#007185] hover:decoration-blue-500">Learn more</a>
          </span>
        </span>

        <div className="w-full h-auto flex justify-center">
        <a href="#" className="w-[80%] flex font-normal text-[#444444]">$ - USD - US Dollar</a>
        <a href="#" className="w-[20%] flex font-normal text-[#007185] text-sm">change</a>
        </div>

        <hr  className="w-[90%] m-auto py-[5px]" />

        <span className="directive text-sm text-gray-600 pt-[15px] cursor-pointer">You are shopping on Amazon.com</span>
        <span className="changeCounty flex justify-center mt-[10px] w-auto h-auto">
          <a href="#" className="text-[#0066C0] text-sm hover:underline hover:decoration-[#FFA500]">Change country/region.</a>
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
      <div className="absolute top-[47px] right-[-130px] w-[590px] h-auto bg-white hidden z-[1] rounded-[4px] p-[14px_14px_7px]">
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
