import React from "react";
import { BookOpen, Settings, Heart, Bell, User } from "lucide-react";
import Footer from "@/components/layout/footer";
import NavBar from "@/components/layout/nav-bar";
import MaxWidthWrapper from "@/components/max-with-wrapper";

const Sidebar = () => {
  const menuItems = [
    { icon: <User className="w-5 h-5" />, label: "Profile", href: "/profile" },
    {
      icon: <BookOpen className="w-5 h-5" />,
      label: "My Courses",
      href: "/courses",
    },
    {
      icon: <Settings className="w-5 h-5" />,
      label: "Settings",
      href: "/settings",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      label: "Wishlist",
      href: "/wishlist",
    },
    {
      icon: <Bell className="w-5 h-5" />,
      label: "Notifications",
      href: "/notifications",
    },
  ];

  return (
    <aside className="lg:col-span-3">
      <div className="sticky top-24 space-y-6">
        <nav className="bg-white rounded-lg border p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center gap-3 p-3 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-[#f46506] transition-all duration-300"
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

const UserLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <MaxWidthWrapper className="my-[70px]">
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <Sidebar />
            <main className="lg:col-span-9">{children}</main>
          </div>
        </div>
      </MaxWidthWrapper>
      <Footer />
    </div>
  );
};

export default UserLayout;
