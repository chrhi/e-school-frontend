import React from "react";
import MaxWidthWrapper from "@/components/max-with-wrapper";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#252641] text-white pt-16 pb-8">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Rami logo</h3>
            <p className="text-gray-300 pr-4">
              Rami logo is an interesting platform that will teach you in a more
              interactive way. Join us to learn more.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#F48C06] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#F48C06] transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#F48C06] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#F48C06] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Our Services", "Contact Us"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#F48C06] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#F48C06]" />
                <span className="text-gray-300">+213 5678900</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#F48C06]" />
                <span className="text-gray-300">info@Rami logo.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#F48C06]" />
                <span className="text-gray-300">
                  123 Business Avenue, NY, USA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm border-t border-gray-700 pt-8">
          <p>© 2024 Rami logo. All rights reserved.</p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
