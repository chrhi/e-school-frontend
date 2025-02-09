/* eslint-disable @typescript-eslint/no-explicit-any */
import MaxWidthWrapper from "../max-with-wrapper";
import { Users, Award, BookOpen } from "lucide-react";
import { useTranslations } from "next-intl";

const StatCard = ({
  number,
  label,
  icon: Icon,
}: {
  number: string;
  label: string;
  icon: any;
}) => (
  <div className="group w-full md:w-[280px] p-8 bg-white rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
    <div className="flex flex-col items-center gap-4">
      <Icon className="w-12 h-12 text-[#f46506] group-hover:scale-110 transition-transform duration-300" />
      <p className="text-6xl md:text-7xl font-bold text-[#f46506] text-center animate-fade-in">
        {number}
      </p>
      <p className="text-gray-800 text-xl text-center font-semibold">{label}</p>
    </div>
  </div>
);

export default function StatusSection() {
  const t = useTranslations();
  return (
    <MaxWidthWrapper className="mb-20">
      <div className="w-full h-fit gap-y-12 flex flex-col items-center">
        <div className="flex w-full items-center flex-col gap-y-6 mx-auto my-12 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            <span className="bg-gradient-to-r from-[#2F327D] to-[#f46506] bg-clip-text text-transparent">
              {t("status.title")}
            </span>
          </h2>
          <p className="text-gray-600 text-xl text-center max-w-3xl leading-relaxed">
            {t("status.desc")}
          </p>
        </div>

        <div className="w-full h-fit flex flex-wrap items-center justify-center gap-8 px-4">
          <StatCard
            number={t("status.card1.value")}
            label={t("status.card1.title")}
            icon={Users}
          />
          <StatCard
            number={t("status.card2.value")}
            label={t("status.card2.title")}
            icon={Award}
          />
          <StatCard
            number={t("status.card3.value")}
            label={t("status.card3.title")}
            icon={BookOpen}
          />
          <StatCard
            number={t("status.card4.value")}
            label={t("status.card4.title")}
            icon={Award}
          />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
