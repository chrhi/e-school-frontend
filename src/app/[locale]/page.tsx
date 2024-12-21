/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import NavBar from "@/components/layout/nav-bar";
import MaxWidthWrapper from "@/components/max-with-wrapper";
import Footer from "@/components/layout/footer";
import CourseGrid from "@/components/course-grid";
import TestimonialSection from "@/components/testimonial-section";
import FAQSection from "@/components/FAQSection";
import Hero from "@/components/sections/hero";
import { Users, Award, BookOpen, Play } from "lucide-react";

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

const FeatureCard = ({
  color,
  title,
  description,
  icon: Icon,
}: {
  color: string;
  title: string;
  description: string;
  icon: any;
}) => (
  <div className="group relative h-[420px] bg-white rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
    <div className="absolute inset-0 p-8 flex flex-col items-center justify-center gap-y-6">
      <div
        className={`w-[100px] h-[100px] ${color} flex-shrink-0 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className="w-12 h-12 text-white" />
      </div>

      <h3 className="text-2xl md:text-3xl font-bold text-[#2F327D] text-center mt-4 group-hover:text-[#f46506] transition-colors duration-300">
        {title}
      </h3>

      <p className="text-gray-800 text-center font-medium leading-relaxed">
        {description}
      </p>

      <button className="mt-4 px-6 py-2 bg-[#f46506] text-white rounded-full font-medium hover:bg-[#e07e05] transition-colors duration-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Learn More
      </button>
    </div>
  </div>
);

// Enhanced Video Section
const VideoSection = () => (
  <div className="w-full max-w-6xl mx-auto p-6 flex flex-col md:flex-row items-center gap-12">
    <div className="w-full md:w-1/2 space-y-6">
      <h2 className="text-4xl md:text-5xl font-bold text-[#2F327D] animate-fade-in">
        Experience Virtual
        <span className="block mt-2">
          Learning Like Never <span className="text-[#f46506]">Before</span>
        </span>
      </h2>

      <p className="text-gray-600 text-xl leading-relaxed">
        Immerse yourself in our interactive virtual classrooms with cutting-edge
        educational tools and real-time collaboration features. Experience
        personalized learning paths and engage with expert instructors.
      </p>

      <button className="px-8 py-4 bg-[#f46506] text-white rounded-full font-medium hover:bg-[#e07e05] transition-all duration-300 hover:scale-105 flex items-center gap-2">
        <Play className="w-5 h-5" />
        Start Learning
      </button>
    </div>

    <div className="w-full md:w-1/2 relative group">
      <div className="relative rounded-3xl overflow-hidden border-8 border-white shadow-2xl group-hover:scale-105 transition-transform duration-500">
        <img
          src="/classroom.png"
          alt="Virtual Classroom Experience"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform duration-300">
            <Play className="w-8 h-8 text-[#f46506] ml-1" />
          </button>
        </div>
      </div>

      <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#23BDEE] opacity-20 z-[-1] rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500" />
      <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#f46506] opacity-20 z-[-1] rounded-2xl transform -rotate-6 group-hover:-rotate-12 transition-transform duration-500" />
    </div>
  </div>
);

export default async function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <NavBar />
      <Hero />

      {/* Stats Section */}
      <MaxWidthWrapper className="mb-20">
        <div className="w-full h-fit gap-y-12 flex flex-col items-center">
          <div className="flex w-full items-center flex-col gap-y-6 mx-auto my-12 px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              <span className="bg-gradient-to-r from-[#2F327D] to-[#f46506] bg-clip-text text-transparent">
                Our Success Story
              </span>
            </h2>
            <p className="text-gray-600 text-xl text-center max-w-3xl leading-relaxed">
              Join thousands of students achieving their academic goals through
              our comprehensive educational platform. Experience excellence in
              learning with our proven track record.
            </p>
          </div>

          <div className="w-full h-fit flex flex-wrap items-center justify-center gap-8 px-4">
            <StatCard number="5K+" label="Active Students" icon={Users} />
            <StatCard number="75%" label="Success Rate" icon={Award} />
            <StatCard number="26" label="Expert Instructors" icon={BookOpen} />
            <StatCard number="16" label="Years Experience" icon={Award} />
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Features Section */}
      <MaxWidthWrapper className="mb-20">
        <div className="w-full h-fit gap-y-12 flex flex-col items-center">
          <div className="flex w-full items-center flex-col gap-y-6 mx-auto my-12 px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              <span className="text-[#2F327D]">All-In-One</span>{" "}
              <span className="text-[#f46506]">Learning Platform</span>
            </h2>
            <p className="text-gray-600 text-xl text-center max-w-3xl leading-relaxed">
              Experience comprehensive education management with our powerful
              online platform designed for success at every academic level.
              Unlock your potential with cutting-edge tools and resources.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            <FeatureCard
              color="bg-[#2F327D]"
              title="Smart Billing"
              description="Streamlined financial management with secure billing, automated invoicing, and digital contract handling. "
              icon={Users}
            />
            <FeatureCard
              color="bg-[#f46506]"
              title="Advanced Scheduling"
              description="Intelligent scheduling system for multiple campuses with automated attendance tracking and comprehensive reporting tools."
              icon={BookOpen}
            />
            <FeatureCard
              color="bg-[#29B9E7]"
              title="Support System"
              description="Comprehensive support infrastructure with automated communication and organizational tools. Get help when you need it."
              icon={Award}
            />
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <CourseGrid />
      </MaxWidthWrapper>

      <TestimonialSection />

      {/* Video Section */}
      <MaxWidthWrapper className="my-20">
        <VideoSection />
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <FAQSection />
      </MaxWidthWrapper>

      <Footer />
    </div>
  );
}
