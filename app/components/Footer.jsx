import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn,  FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
  <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <Link href="/" className="link link-hover">Home</Link>
        <Link href="/about" className="link link-hover">About</Link>
        <Link href="/contact" className="link link-hover">Contact</Link>
      </nav>
  <aside>
    {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-6  text-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} Speak Better English - Paul Srinivasa. All rights reserved.
        </p>
        
      </div>
  </aside>
</footer>

      
  );
};

export default Footer;
