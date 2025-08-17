"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/pricing", label: "Pricing" },
  ];

  return (
    <>
      {/* Backdrop for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Desktop Navbar - Floating */}
      <nav
        className={`hidden lg:block fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all rounded-2xl duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md border border-gray-200/50 shadow-lg shadow-blue-500/10"
            : "bg-white/40 backdrop-blur-sm border border-white/30"
        }`}
      >
        <div className="px-6 py-3 rounded-2xl max-w-5xl mx-auto">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-gray-900 hover:text-blue-600 transition-colors"
            >
              TaskNest
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm tracking-tight"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/get-started"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors duration-200 shadow-lg shadow-blue-500/20"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar - Fixed Top */}
      <nav
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[linear-gradient(183deg,#006DBC_2.49%,#F9F9F9_88.88%)] backdrop-blur-md border-b border-gray-200/50 shadow-lg shadow-blue-500/10"
            : "bg-[linear-gradient(183deg,#006DBC_2.49%,#F9F9F9_88.88%)]/80 backdrop-blur-sm "
        }`}
      >
        <div className="px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo - Left Side */}
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-gray-900"
            >
              TaskNest
            </Link>

            {/* Hamburger Menu - Right Side */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center gap-1">
                <span
                  className={`w-4 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`w-4 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-4 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-xl transition-all duration-300 ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="px-4 sm:px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/get-started"
                className="block w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-medium text-center hover:bg-blue-700 transition-colors duration-200 shadow-lg shadow-blue-500/20"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;



       