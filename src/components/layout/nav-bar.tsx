"use client";

import React, { useState, useEffect } from "react";
import MaxWidthWrapper from "@/components/max-with-wrapper";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navs = ["Home", "About", "Courses", "Pricing"];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full h-[80px] z-[100] fixed top-0 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <MaxWidthWrapper className="flex items-center justify-between w-full h-[80px]">
        <span className="text-2xl text-[#113C49] font-bold">logo</span>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex w-full flex-grow items-center justify-end gap-x-8">
          <div className="w-fit h-[70px] flex items-center justify-end gap-x-4">
            {navs.map((item) => (
              <button
                key={item}
                className="hover:text-[#f46506] text-lg font-bold text-gray-900 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="w-fit flex items-center justify-end gap-x-2">
            <Link
              href={"/en/sign-up"}
              className="px-4 py-2 text-lg  font-extrabold rounded-full bg-white border border-[#f46506] text-[#f46506] hover:bg-gray-100 transition-colors"
            >
              login
            </Link>

            <Link
              href={"/en/sign-up"}
              className="px-4 py-2 text-lg bg-[#f46506]  font-extrabold rounded-full text-white hover:bg-[#e07e05] transition-colors"
            >
              register
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-[70px] left-0 w-full bg-white shadow-md py-4">
            <div className="flex flex-col gap-y-4 px-4">
              {navs.map((item) => (
                <button
                  key={item}
                  className="text-left hover:text-[#f46506] transition-colors"
                >
                  {item}
                </button>
              ))}
              <div className="flex flex-col gap-y-2">
                <Link
                  href={"/en/sign-up"}
                  className="px-4 py-3 font-bold rounded-full border-[#f46506] text-[#f46506] hover:bg-gray-100 transition-colors"
                >
                  login
                </Link>

                <Link
                  href={"/en/sign-up"}
                  className="px-4 py-3 bg-[#f46506] font-bold rounded-full text-white hover:bg-[#e07e05] transition-colors"
                >
                  sign up
                </Link>
              </div>
            </div>
          </div>
        )}
      </MaxWidthWrapper>
    </div>
  );
}
