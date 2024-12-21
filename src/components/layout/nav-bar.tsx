"use client";

import React, { useState, useEffect } from "react";
import MaxWidthWrapper from "@/components/max-with-wrapper";
import {
  Menu,
  X,
  Bell,
  ChevronRight,
  User,
  LogOut,
  Settings,
  Book,
} from "lucide-react";
import Link from "next/link";
import { TUser } from "@/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { logout } from "@/lib/api-calls/login";
import { getCurrentUser } from "@/lib/api-calls/auth";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/" },
  { name: "About", href: "/en/about" },
  { name: "Contact", href: "/" },
];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [user, setUser] = useState<TUser | null>(null);

  const handleLogout = async () => {
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
    getCurrentUser().then((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  const UserMenu = () => (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 transition-colors">
        <Avatar className="h-8 w-8">
          <AvatarImage src={"/"} />
          <AvatarFallback className="bg-primary/10 text-primary">
            {user?.name?.charAt(0) || "U"}
          </AvatarFallback>
        </Avatar>
        <span className="hidden md:inline font-medium">{user?.name}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Book className="mr-2 h-4 w-4" />
          My Courses
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} className="text-red-600">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const AuthButtons = () => (
    <>
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
              {user ? <UserMenu /> : <AuthButtons />}
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
                  {user ? (
                    <div className="px-4 py-2">
                      <UserMenu />
                    </div>
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
