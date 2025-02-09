import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  LifeBuoy,
  GraduationCap,
  MessageCircle,
  DollarSign,
} from "lucide-react";
import MaxWidthWrapper from "./max-with-wrapper";
import { useTranslations } from "next-intl";

const Categories = () => {
  const t = useTranslations();

  return (
    <div className="bg-[#252641] min-h-[400px] h-fit w-full px-4 py-8">
      <MaxWidthWrapper>
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          {t("categories.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a href="#courses-grid">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/10 border-[#f46506]/20">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="mb-4 bg-white/10 p-4 rounded-full">
                  <LifeBuoy className="w-10 h-10 text-[#f46506]" />
                </div>
                <h3 className="font-semibold text-xl mb-2 text-white">
                  {t("categories.card1.title")}
                </h3>
                <p className="text-gray-300 text-sm">
                  {t("categories.card1.desc")}
                </p>
              </CardContent>
            </Card>
          </a>
          <a href="#courses-grid">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/10 border-[#f46506]/20">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="mb-4 bg-white/10 p-4 rounded-full">
                  <GraduationCap className="w-10 h-10 text-[#f46506]" />
                </div>
                <h3 className="font-semibold text-xl mb-2 text-white">
                  {t("categories.card2.title")}
                </h3>
                <p className="text-gray-300 text-sm">
                  {t("categories.card2.desc")}
                </p>
              </CardContent>
            </Card>
          </a>
          <a href="#courses-grid">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/10 border-[#f46506]/20">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="mb-4 bg-white/10 p-4 rounded-full">
                  <MessageCircle className="w-10 h-10 text-[#f46506]" />
                </div>
                <h3 className="font-semibold text-xl mb-2 text-white">
                  {t("categories.card3.title")}
                </h3>
                <p className="text-gray-300 text-sm">
                  {t("categories.card3.desc")}
                </p>
              </CardContent>
            </Card>
          </a>
          <a href="#courses-grid">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/10 border-[#f46506]/20">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="mb-4 bg-white/10 p-4 rounded-full">
                  <DollarSign className="w-10 h-10 text-[#f46506]" />,
                </div>
                <h3 className="font-semibold text-xl mb-2 text-white">
                  {t("categories.card4.title")}
                </h3>
                <p className="text-gray-300 text-sm">
                  {t("categories.card4.desc")}
                </p>
              </CardContent>
            </Card>
          </a>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Categories;
