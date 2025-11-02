
import React, { useState } from 'react'; // useState import karein
import './Header.css';
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  ChevronDown,
  Menu, // Hamburger icon
  X // Close icon
} from 'lucide-react';

const bannerIconUrl = "https://c.animaapp.com/mhgm0rquNKVIHr/img/vuesax-linear-element-4.svg";

const Header = () => {
  // Mobile nav ke liye state
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const topBannerItems = [
    { icon: bannerIconUrl, text: "Lorem ipsum dolor" },
    { icon: bannerIconUrl, text: "Lorem ipsum dolor" },
    { icon: bannerIconUrl, text: "Lorem ipsum dolor" },
  ];

  const navigationItems = [
    { label: "SHOP" },
    { label: "SKILLS" },
    { label: "STORIES" },
    { label: "ABOUT" },
    { label: "CONTACT US" },
  ];

  return (
    <div className="header-wrapper">
      <div className="top-banner">
        {topBannerItems.map((item, index) => (
          <div key={index} className="banner-item">
            <img alt="Icon" src={item.icon} />
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      <header className="main-header">
        
        {/* Hamburger icon (Sirf mobile par dikhega) */}
        <button 
          className="mobile-menu-icon"
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        >
          {isMobileNavOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="header-logo">
          LOGO
        </div>

        {/* Desktop Navigation (Mobile par hide hoga) */}
        <nav className="main-nav">
          <ul>
            {navigationItems.map((item) => (
              <li key={item.label}>
                {item.label}
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Icons (Mobile par hide honge) */}
        <div className="header-icons">
          <button className="icon-button">
            <Search size={24} /> 
          </button>
          <button className="icon-button">
            <Heart size={24} />
          </button>
          <button className="icon-button">
            <ShoppingBag size={24} />
          </button>
          <button className="icon-button">
            <User size={24} />
          </button>
          <button className="lang-selector">
            <span>ENG</span>
            <ChevronDown size={16} /> 
          </button>
        </div>
        
        {/* Mobile par cart icon (alag se) */}
        <button className="mobile-cart-icon">
          <ShoppingBag size={24} />
        </button>

      </header>

      {/* --- Mobile Navigation Menu (Dropdown) --- */}
      {/* Agar 'isMobileNavOpen' true hai, toh yeh menu dikhega */}
      <nav className={`mobile-nav-menu ${isMobileNavOpen ? 'open' : ''}`}>
        <ul>
          {navigationItems.map((item) => (
            <li key={item.label}>
              {item.label}
            </li>
          ))}
        </ul>
        {/* Mobile par icons */}
        <div className="mobile-nav-icons">
          <button className="icon-button">
            <Search size={24} /> 
            <span>Search</span>
          </button>
          <button className="icon-button">
            <Heart size={24} />
            <span>Wishlist</span>
          </button>
          <button className="icon-button">
            <User size={24} />
            <span>Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;