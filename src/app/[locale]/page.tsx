import React from "react";
import NavBar from "@/components/layout/nav-bar";
import MaxWidthWrapper from "@/components/max-with-wrapper";
import Footer from "@/components/layout/footer";
import CourseGrid from "@/components/course-grid";
import TestimonialSection from "@/components/testimonial-section";
import FAQSection from "@/components/FAQSection";
import Hero from "@/components/sections/hero";

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div className="w-[250px] p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
    <p className="text-6xl md:text-7xl font-bold text-[#f46506] text-center animate-pulse">
      {number}
    </p>
    <p className="text-gray-800 text-lg text-center font-semibold mt-2">
      {label}
    </p>
  </div>
);

const FeatureCard = ({
  color,
  title,
  description,
}: {
  color: string;
  title: string;
  description: string;
}) => (
  <div className="group w-full relative h-[400px] bg-white rounded-2xl border hover:border-2 hover:border-[#f46506] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-y-8 p-8">
    <div
      className={`w-[80px] h-[80px] ${color} rounded-full absolute -top-10 group-hover:scale-110 transition-transform duration-300`}
    ></div>
    <p className="text-2xl md:text-3xl font-bold text-[#2F327D] text-center mt-4 group-hover:text-[#f46506] transition-colors duration-300">
      {title}
    </p>
    <p className="text-gray-800 text-center font-medium">{description}</p>
  </div>
);

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <NavBar />
      <Hero />

      {/* Stats Section */}
      <MaxWidthWrapper className="mb-20">
        <div className="w-full h-fit gap-y-8 flex flex-col items-center">
          <div className="flex w-full items-center flex-col gap-y-4 mx-auto my-12 px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-[#2F327D] to-[#f46506] bg-clip-text text-transparent">
              Our Success Story
            </h2>
            <p className="text-gray-600 text-lg text-center max-w-2xl">
              Join thousands of students achieving their academic goals through
              our comprehensive educational platform.
            </p>
          </div>

          <div className="w-full h-fit flex flex-wrap items-center justify-center gap-8 px-4">
            <StatCard number="5K+" label="Active Students" />
            <StatCard number="75%" label="Success Rate" />
            <StatCard number="26" label="Expert Instructors" />
            <StatCard number="16" label="Years Experience" />
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Features Section */}
      <MaxWidthWrapper className="mb-20">
        <div className="w-full h-fit gap-y-8 flex flex-col items-center">
          <div className="flex w-full items-center flex-col gap-y-4 mx-auto my-12 px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              <span className="text-[#2F327D]">All-In-One</span>{" "}
              <span className="text-[#f46506]">Learning Platform</span>
            </h2>
            <p className="text-gray-600 text-lg text-center max-w-3xl">
              Experience comprehensive education management with our powerful
              online platform designed for success at every academic level.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
            <FeatureCard
              color="bg-[#2F327D]"
              title="Smart Billing & Invoicing"
              description="Streamlined financial management with secure billing, automated invoicing, and digital contract handling."
            />
            <FeatureCard
              color="bg-[#f46506]"
              title="Advanced Scheduling"
              description="Intelligent scheduling system for multiple campuses with automated attendance tracking and reporting."
            />
            <FeatureCard
              color="bg-[#29B9E7]"
              title="Support System"
              description="Comprehensive support infrastructure with automated communication and organizational tools."
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
        <div className="w-full max-w-6xl mx-auto p-6 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2F327D]">
              Experience Virtual
              <span className="block mt-2">
                Learning Like Never{" "}
                <span className="text-[#f46506]">Before</span>
              </span>
            </h2>

            <p className="text-gray-600 text-lg">
              Immerse yourself in our interactive virtual classrooms with
              cutting-edge educational tools and real-time collaboration
              features.
            </p>

            <button className="px-8 py-3 bg-[#f46506] text-white rounded-full font-medium hover:bg-[#e07e05] transform hover:-translate-y-1 transition-all duration-300">
              Explore Now
            </button>
          </div>

          <div className="w-full md:w-1/2 relative group">
            <div className="relative rounded-3xl overflow-hidden border-8 border-white shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
              <img
                src="/classroom.png"
                alt="Virtual Classroom Experience"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform duration-300">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[#f46506] border-b-8 border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#23BDEE] opacity-20 z-[-1] rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#f46506] opacity-20 z-[-1] rounded-2xl transform -rotate-6 group-hover:-rotate-12 transition-transform duration-300"></div>
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <FAQSection />
      </MaxWidthWrapper>

      <Footer />
    </div>
  );
}
