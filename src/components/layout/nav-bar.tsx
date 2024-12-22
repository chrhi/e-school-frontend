"use client";

import React, { useState, useEffect } from "react";
import MaxWidthWrapper from "@/components/max-with-wrapper";
import { Menu, X, Bell, ChevronRight, Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { TUser } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import { logout } from "@/lib/api-calls/login";
import { getCurrentUser } from "@/lib/api-calls/auth";
import UserDropdown from "../user-nav";
import { Button } from "../ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/en/courses" },
  { name: "About", href: "/en/about" },
  { name: "Contact", href: "/" },
];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [user, setUser] = useState<TUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        console.log(user);
        setUser(user);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const AuthButtons = () => (
    <>
      <Button variant={"ghost"} size={"sm"}>
        <img
          src="/Flag_of_Algeria.svg.png"
          alt="Algeria Flag"
          style={{ width: "10px", height: "10px", marginRight: "8px" }}
        />
        العربية
      </Button>
      <Link
        href="/en/sign-in"
        className="px-4 py-2 text-primary font-semibold hover:bg-orange-50 rounded-full transition-colors"
      >
        Login
      </Link>
      <Link
        href="/en/sign-up"
        className="px-4 py-2 bg-primary text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
      >
        Register Now
      </Link>
    </>
  );

  const ShoppingIcons = () => (
    <div className="flex items-center gap-4 mr-4">
      <button className="text-gray-600 hover:text-primary transition-colors">
        <Heart size={24} />
      </button>
      <button className="text-gray-600 hover:text-primary transition-colors relative">
        <ShoppingCart size={24} />
        <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          0
        </span>
      </button>
      <button className="text-gray-600 hover:text-primary transition-colors relative">
        <Bell size={24} />
        <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          0
        </span>
      </button>
    </div>
  );

  const LoadingSkeleton = () => (
    <div className="flex items-center justify-center">
      <Skeleton className="h-8 w-8 rounded-full" />
    </div>
  );

  return (
    <>
      {showBanner && (
        <div className="bg-gradient-to-r fixed top-0 z-[999] left-0 right-0 from-primary to-red-500 text-white">
          <MaxWidthWrapper>
            <div className="flex items-center justify-between py-2 text-[6px] md:text-sm">
              <div className="flex items-center gap-2">
                <Bell size={16} className="animate-bounce" />
                <span>
                  Special offer! Get 30% off on all BAC preparation courses
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="/"
                  className="hidden sm:flex items-center hover:underline"
                >
                  Learn more
                  <ChevronRight size={16} />
                </Link>
                <button
                  onClick={() => setShowBanner(false)}
                  className="text-white hover:text-gray-200"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      )}

      <div
        className={`w-full z-50 border-b fixed ${
          showBanner ? "top-8" : "top-0"
        } transition-all duration-300 ${
          isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-white"
        }`}
      >
        <MaxWidthWrapper>
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-12">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">
                  Rami school
                </span>
              </Link>

              <nav className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-primary font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="hidden md:flex items-center gap-4">
              {isLoading ? (
                <LoadingSkeleton />
              ) : user ? (
                <>
                  <Button variant={"ghost"} size={"sm"}>
                    <img
                      src="/Flag_of_Algeria.svg.png"
                      alt="Algeria Flag"
                      style={{
                        width: "10px",
                        height: "10px",
                        marginRight: "8px",
                      }}
                    />
                    العربية
                  </Button>
                  <ShoppingIcons />
                  <UserDropdown
                    onLogout={handleLogout}
                    user={{ email: user.email, name: user.name }}
                  />
                </>
              ) : (
                <AuthButtons />
              )}
            </div>

            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </MaxWidthWrapper>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <MaxWidthWrapper>
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-gray-600 hover:bg-orange-50 hover:text-primary rounded-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="grid gap-2 px-4 pt-4 border-t">
                  {isLoading ? (
                    <div className="px-4 py-2">
                      <LoadingSkeleton />
                    </div>
                  ) : user ? (
                    <>
                      <div className="flex justify-between px-4 py-2">
                        <ShoppingIcons />
                        <UserDropdown
                          onLogout={handleLogout}
                          user={{ email: user.email, name: user.name }}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/en/sign-in"
                        className="w-full px-4 py-2 text-center text-primary border border-primary font-semibold rounded-full hover:bg-orange-50 transition-colors"
                      >
                        Login
                      </Link>
                      <Link
                        href="/en/sign-up"
                        className="w-full px-4 py-2 text-center bg-gradient-to-r from-primary to-pink-500 text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
                      >
                        Register Now
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </MaxWidthWrapper>
          </div>
        )}
      </div>
    </>
  );
}
