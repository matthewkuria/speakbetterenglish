"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Tourist Guide Services", href: "/tourist-guide-services" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Speak Better English Logo"
            width={140}
            height={50}
            className="object-contain h-20 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 font-medium">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`px-3 py-2 transition rounded-md hover:text-blue-600 hover:bg-blue-50 ${
                  pathname === item.href
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}

          {/* CTA Button */}
          <li>
            <Link
              href="/#get-started"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition hidden lg:inline-block"
            >
              Start Learning
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="bg-white border-t border-gray-200 p-4 lg:hidden animate-slideDown">
          <ul className="flex flex-col gap-4 font-medium">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  onClick={() => setIsOpen(false)}
                  href={item.href}
                  className={`block py-2 rounded-md transition hover:text-blue-600 ${
                    pathname === item.href
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* CTA in mobile */}
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                href="/#get-started"
                className="block px-4 py-2 bg-blue-600 text-white text-center rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Start Learning
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
