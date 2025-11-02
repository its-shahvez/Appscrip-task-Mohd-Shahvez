import React from 'react';
import './Footer.css'; // Nayi CSS file

// Link data (aapke code se)
const mettaMuseLinks = [
  { label: "About Us", href: "#" },
  { label: "Stories", href: "#" },
  { label: "Artisans", href: "#" },
  { label: "Boutiques", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "EU Compliances Docs", href: "#" },
];

const quickLinks = [
  { label: "Orders & Shipping", href: "#" },
  { label: "Join/Login as a Seller", href: "#" },
  { label: "Payment & Pricing", href: "#" },
  { label: "Return & Refunds", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

// Image URLs (aapke code se)
const usFlagUrl = "https://c.animaapp.com/mhgm0rquNKVIHr/img/united-states-of-america--us-.svg";
const paymentMethodsUrl = "https://c.animaapp.com/mhgm0rquNKVIHr/img/frame-136278.svg";
// Social media icons ka URL aapke code mein tha, lekin hum abhi text use kar sakte hain ya baad mein add kar sakte hain.


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        
        {/* Section 1: Newsletter & Links */}
        <section className="footer-section footer-links">
          <div className="newsletter-section">
            <h2>BE THE FIRST TO KNOW</h2>
            <p>Sign up for updates from mettā muse.</p>
            <div className="newsletter-form">
              <input placeholder="Enter your e-mail..." />
              <button>SUBSCRIBE</button>
            </div>
          </div>
          
          <div style={{marginTop: '2rem'}}>
            <h2>mettā muse</h2>
            <nav>
              {mettaMuseLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Section 2: Quick Links */}
        <section className="footer-section footer-links">
          <h2>QUICK LINKS</h2>
          <nav>
            {quickLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </section>

        {/* Section 3: Contact, Currency, Social */}
        <section className="footer-section">
          <h2>CONTACT US</h2>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h2 style={{marginTop: '2rem'}}>CURRENCY</h2>
          <div className="currency-selector">
            <img alt="United states of america" src={usFlagUrl} />
            <span>USD</span>
          </div>
          
          <h2 style={{marginTop: '2rem'}}>FOLLOW US</h2>
          {/* Yahaan social media icons (e.g., lucide-react se) aa sakte hain */}
          <p>Instagram | LinkedIn</p>

          <h2 style={{marginTop: '2rem'}}>mettā muse ACCEPTS</h2>
          <div className="payment-methods">
            <img alt="Payment methods" src={paymentMethodsUrl} />
          </div>
        </section>

      </div>

      <div className="footer-copyright">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;