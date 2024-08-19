import React from 'react';
import './Header.css';

function LeftSection() {
  return (
    <div className="leftSection">
      <a href="#">
        <img className='amazonLogo' src="/Amazon-logo.png" alt="Amazon Logo" />
      </a>
      
      <a href="#" className="delivery">
        <img src="/Ei-location.svg.png" alt="" className="pinDrop" />

        <span className="delNigeria">
          Deliver to <span className="bold">Nigeria</span>
        </span>
      </a>
    </div>
  );
}

function MiddleSection() {
  return (
    <div id="middleSection">
      <button id="dropdownAll">All</button>
      <input id="inputBar" type="text" placeholder="Search Amazon" />
      <button id="searchButton">
        <img id="searchIcon" src="/search.svg" alt="Search Icon" />
      </button>
    </div>
  );
}

function RightSection() {
  const handleLanguageChange = (lang) => {
    console.log(`Language changed to: ${lang}`);
  };

  return (
    <div id="rightSection">
      <div className="nationalityHive">
        <a className="nationality" href="#">
          <img className="usaFlag" src="/usa-flag.png" alt="USA" />
          <span>EN</span>
        </a>
        <DropdownContent onLanguageChange={handleLanguageChange} />
      </div>
      <AccountHolder id="akkantHold" />
      <a className="orders" href="">
        <p className="smallParagraph">Return</p>
        <p className="mediumParagraph">& Orders</p>
      </a>
      <a className="cartQuantity" href="">
        <p className="mediumParagraph">Cart</p>
      </a>
    </div>
  );
}

function DropdownContent({ onLanguageChange }) {
  return (
    <div className="dropdownContent">
      <div className="contentFloat">
        <span>
          <span className="changeLang">Change language</span>
          <span className="learnLang">
            <a href="#">Learn more</a>
          </span>
        </span>
        <a className="eng" href="#">
          <span>
            <input type="radio" className="radioInput" />
            English - EN
          </span>
        </a>
        <a href="#">
          <span>
            <input type="radio" className="radioInput" />
            espanol -ES
          </span>
        </a>
        <a href="#">
          <span>
            <input type="radio" className="radioInput" />
            عربي - AR
          </span>
        </a>
        <a href="#">
          <span>
            <input type="radio" className="radioInput" />
            Deutsch - DE
          </span>
        </a>
        <a href="#">
          <span>
            <input type="radio" className="radioInput" />
            עברית - HE
          </span>
        </a>
        <a href="#">
          <span>
            <input type="radio" className="radioInput" />
            한국인 - KO
          </span>
        </a>
        <a href="#">
          <span>
            <input type="radio" className="radioInput" />
            Português - PT
          </span>
        </a>
        <a href="#">
          <span>
            <input type="radio" className="radioInput" />
            中文 (简体) - ZH
          </span>
        </a>
        <a href="#">
          <span>
            <input type="radio" className="radioInput" />
            中文 (繁體) - ZH
          </span>
        </a>
        <span className="changeMore">
          <span className="changeLang">Change currency</span>
          <span className="learnLang">
            <a href="#">Learn more</a>
          </span>
        </span>
      </div>
      <div className="currentCurrency">
        <span className="changeLang">$ - USD - US Dollar</span>
        <span className="learnLang">
          <a href="#">Change</a>
        </span>
      </div>
      <span className="directive">
        You are shopping on Amazon.com
      </span>
      <span className="changeCounty">
        <a href="#">Change country/region.</a>
      </span>
    </div>
  );
}

function AccountHolder() {
  return (
    <div className="accountHolder">
      <a href="#">
        <p className="smallParagraph">Hello, sign in</p>
        <p className="mediumParagraph">Account & Lists</p>
      </a>
      <div className="accountDropdown">
        <div className="accountNav">
          <a className="accountNavSign" href="#">Sign in</a>
          <div>
            <span>New customer?</span>
            <a href="#">Start here.</a>
          </div>
        </div>
        <div className="accountSplit">
          <div className="splitDivA">
            <div>Your Lists</div>
            <a href="#"><span>Create a list</span></a>
            <a href="#"><span>Find a List or Registry</span></a>
          </div>
          <div className="splitDivB">
            <div>Your Account</div>
            <a href="#"><span>Account</span></a>
            <a href="#"><span>Orders</span></a>
            <a href="#"><span>Recommendations</span></a>
            <a href="#"><span>Browsing History</span></a>
            <a href="#"><span>Watchlist</span></a>
            <a href="#"><span>Video Purchases & Rentals</span></a>
            <a href="#"><span>Kindle Unlimited</span></a>
            <a href="#"><span>Content & Devices</span></a>
            <a href="#"><span>Subscribe & Save Items</span></a>
            <a href="#"><span>Memberships & Subscriptions</span></a>
            <a href="#"><span>Music Library</span></a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header>
      <LeftSection />
      <MiddleSection />
      <RightSection />
    </header>
  );
}

export default Header;
