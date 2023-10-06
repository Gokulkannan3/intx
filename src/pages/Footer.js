import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer className="footer p-10 bg-customBrown  mt-7 text-white ">
        <nav>
          <header className="footer-title">This site</header>
          <a href="www.google.com" className="link link-hover">Tracking</a>
          <a href='www.google.com' className="link link-hover">Shipping</a>
          <a href="www.google.com" className="link link-hover">Help & Support</a>
          <a href='www.google.com' className="link link-hover">Communication Services</a>
        </nav>
        <nav>
          <header className="footer-title -translate-x-80">Other UPC sites</header>
          <a href='www.google.com' className="link link-hover -translate-x-80">About UPS</a>
          <a href='www.google.com' className="link link-hover -translate-x-80">Supply chain solutions</a>
          <a href='www.google.com' className="link link-hover -translate-x-80"> UPS Jobs</a>
        
        </nav>
      </footer>
    </div>
   
  );
}

