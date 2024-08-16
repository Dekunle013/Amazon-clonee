import React from 'react';
import './Footer.css';

function Footer() {
  const sections = [
    {
      title: "Get to Know Us",
      links: [
        "Careers",
        "Blogs",
        "About Amazon",
        "Investor Relations",
        "Amazon Devices",
        "Amazon Science",
      ],
    },
    {
      title: "Make Money with Us",
      links: [
        "Sell products on Amazon",
        "Sell on Amazon Business",
        "Sell apps on Amazon",
        "Become an Affiliate",
        "Advertise Your Products",
        "Self-Publish with Us",
        "Host an Amazon Hub",
        ">See More Make Money with Us",
      ],
    },
    {
      title: "Amazon Payment Products",
      links: [
        "Amazon Business Card",
        "Shop with Points",
        "Reload Your Balance",
        "Amazon Currency Converter",
      ],
    },
    {
      title: "Let Us Help You",
      links: [
        "Amazon and COVID-19",
        "Your Account",
        "Your Orders",
        "Shipping Rates & Policies",
        "Returns & Replacements",
        "Manage Your Content and Devices",
        "Amazon Assistant",
        "Help",
      ],
    },
  ];

  const services = [
    {
      name: "Amazon Music",
      description: "Stream millions of songs",
    },
    {
      name: "Amazon Ads",
      description: "Reach customers wherever they spend their time",
    },
    {
      name: "6pm",
      description: "Score deals on fashion brands",
    },
    {
      name: "AbeBooks",
      description: "Books, art & collectibles",
    },
    {
      name: "ACX",
      description: "Audiobook Publishing Made Easy",
    },
    {
      name: "Sell on Amazon",
      description: "Start a Selling Account",
    },
    {
      name: "Amazon Business",
      description: "Everything For Your Business",
    },
    {
      name: "AmazonGlobal",
      description: "Ship Orders Internationally",
    },
    {
      name: "Home Services",
      description: "Experienced Pros Happiness Guarantee",
    },
    {
      name: "Amazon Web Services",
      description: "Scalable Cloud Computing Services",
    },
    {
      name: "Audible",
      description: "Listen to Books & Original Audio Performances",
    },
    {
      name: "Box Office Mojo",
      description: "Find Movie Box Office Data",
    },
    {
      name: "Good Reads",
      description: "Book reviews & recommendations",
    },
    {
      name: "IMDb",
      description: "Movies, TV & Celebrities",
    },
    {
      name: "IMDbPro",
      description: "Get Info Entertainment Professionals Need",
    },
    {
      name: "Kindle Direct Publishing",
      description: "Indie Digital & Print Publishing Made Easy",
    },
    {
      name: "Prime Video Direct",
      description: "Video Distribution Made Easy",
    },
    {
      name: "Shopbop",
      description: "Designer Fashion Brands",
    },
    {
      name: "Woot!",
      description: "Deals and Shenanigans",
    },
    {
      name: "Zapos",
      description: "Shoes & Clothing",
    },
    {
      name: "Ring",
      description: "Smart Home Security Systems",
    },
    {
      name: "eero WiFi",
      description: "Stream 4K Video in Every Room",
    },
    {
      name: "Blink",
      description: "Smart Security for Every Home",
    },
    {
      name: "Neigbhors App",
      description: "Real-Time Crime & Safety Alerts",
    },
    {
      name: "Amazon Subscription Boxes",
      description: "Top subscription boxes ‐ right to your door",
    },
    {
      name: "PillPack",
      description: "Pharmacy Simplified",
    },
  ];

  return (
    <div className="footer">
      <div className="firstLine">
        <span>Back to top</span>
      </div>
      
      <div className="navigator">
        {sections.map((section, index) => (
          <FooterSection key={index} section={section} />
        ))}
      </div>

      <div className="payment">
        <div className="payAmazonDiv">
          <img className="payAmazon" src="Thumbnails/Amazon-logo.png" alt="Amazon Logo" />
        </div>
        <div className="paymentButton">
          <button className="englishButton">English</button>
          <button className="usButton">$USD - U.S. Dollar</button>
          <button className="unitedButton">United States</button>
        </div>
      </div>

      <div className="navigatorB">
        {services.map((service, index) => (
          <ServiceLink key={index} service={service} />
        ))}
      </div>

      <FooterBottom />
    </div>
  );
}

function FooterSection({ section }) {
  return (
    <div className="navGridB">
      <div className="footHeadline">
        <h3>{section.title}</h3>
      </div>
      {section.links.map((link, index) => (
        <div className="getKnow" key={index}>
          <a href="#">{link}</a>
        </div>
      ))}
    </div>
  );
}

function ServiceLink({ service }) {
  return (
    <div className="navigateLastA">
      <a href="#">
        <h4>{service.name}</h4>
        <span className="lastLast">{service.description}</span>
      </a>
    </div>
  );
}

function FooterBottom() {
  return (
    <div className="farewell">
      <div className="farewellA">
        <div>
          <a href="#">Conditions of Use</a>
        </div>
        <div>
          <a href="#">Privacy Notice</a>
        </div>
        <div>
          <a href="#">Consumer Health Data Privacy Disclosure</a>
        </div>
        <div>
          <a href="#">Your Ads Privacy Choices</a>
        </div>
      </div>
      <div className="farewellB">
        <span>© 1996-2024, Amazon.com, Inc. or its affiliates</span>
      </div>
    </div>
  );
}

export default Footer;
