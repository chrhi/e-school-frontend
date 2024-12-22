import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  LifeBuoy,
  GraduationCap,
  MessageCircle,
  DollarSign,
} from "lucide-react";
import MaxWidthWrapper from "./max-with-wrapper";

type Category = {
  title: string;
  icon: React.ReactNode;
  description: string;
};

const categories: Category[] = [
  {
    title: "Support lessons",
    icon: <LifeBuoy className="w-10 h-10 text-[#f46506]" />,
    description: "Get help with specific topics and challenges",
  },
  {
    title: "Training courses",
    icon: <GraduationCap className="w-10 h-10 text-[#f46506]" />,
    description: "Structured learning paths for comprehensive education",
  },
  {
    title: "Consultations",
    icon: <MessageCircle className="w-10 h-10 text-[#f46506]" />,
    description: "One-on-one expert guidance and advice",
  },
  {
    title: "Sales",
    icon: <DollarSign className="w-10 h-10 text-[#f46506]" />,
    description: "Products and services to support your growth",
  },
];

const Categories = () => {
  return (
    <div className="bg-[#252641] min-h-[400px] h-fit w-full px-4 py-8">
      <MaxWidthWrapper>
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card
              key={category.title}
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/10 border-[#f46506]/20"
            >
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="mb-4 bg-white/10 p-4 rounded-full">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-xl mb-2 text-white">
                  {category.title}
                </h3>
                <p className="text-gray-300 text-sm">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Categories;
