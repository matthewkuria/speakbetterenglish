"use client";

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="w-full hidden md:block  bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white text-sm py-2 border-b border-white/20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        
        {/* Left Section */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
          <div className="flex items-center gap-2">
            <Phone size={16} aria-hidden="true" />
            <span>+91 94402 05772</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} aria-hidden="true" />
            <span>naikeffort@gmail.com</span>
          </div>          
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-2 md:mt-0">
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com" aria-label="Facebook" className="hover:text-[#A8DADC] transition">
              <Facebook size={16} />
            </a>
            <a href="https://www.youtube.com" aria-label="YouTube" className="hover:text-[#A8DADC] transition">
              <Youtube size={16} />
            </a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn" className="hover:text-[#A8DADC] transition">
              <Linkedin size={16} />
            </a>
            <a href="https://www.instagram.com/" aria-label="Instagram" className="hover:text-[#A8DADC] transition">
              <Instagram size={16} />
            </a>
          </div>

          {/* CTA Button */}
          <Link
            href="/appointment"
            className="mt-2 md:mt-0 px-4 py-1 bg-white text-[#1D3557] font-semibold rounded-full hover:bg-[#F1FAEE] transition"
          >
            Book our services
          </Link>
        </div>
      </div>
    </div>
  );
}
