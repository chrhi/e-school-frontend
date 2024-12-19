import React from "react";
import NavBar from "@/components/layout/nav-bar";
import MaxWidthWrapper from "@/components/max-with-wrapper";
import { Play } from "lucide-react";
import Footer from "@/components/layout/footer";
import CourseGrid from "@/components/course-grid";
import TestimonialSection from "@/components/testimonial-section";
import FAQSection from "@/components/FAQSection";

export default function Page() {
  return (
    <>
      <NavBar />

      <div className="w-full relative min-h-screen bg-[#FFF3E4]">
        <MaxWidthWrapper>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 pt-16 md:pt-24 pb-16">
            {/* Left Column - Text Content */}
            <div className="w-full flex flex-col justify-center gap-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-[#f46506]">Studying</span>{" "}
                <span className="text-[#2F327D]">Online is now</span>
                <br />
                <span className="text-[#2F327D]">much easier</span>
              </h1>

              <p className="text-base md:text-lg text-gray-600 max-w-xl">
                Our chool is an interesting platform that will teach you in more
                an interactive way.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
                <button className="px-8 py-4 bg-[#f46506] font-semibold rounded-full text-white hover:bg-[#e07e05] transition-colors">
                  Join now
                </button>

                <div className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                    <Play className="w-5 h-5 text-[#23BDEE] ml-1" />
                  </div>
                  <span className="font-medium group-hover:text-[#f46506] transition-colors">
                    Watch how it works
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Image and Floating Elements */}
            <div className="relative w-full flex justify-center items-center">
              <div className="relative">
                <img
                  src="/girl.png"
                  className="h-[450px] lg:h-[600px] object-contain relative z-10"
                  alt="Student learning online"
                  loading="eager"
                />

                {/* Floating Cards */}
                <div className="absolute top-20 -left-4 md:-left-10 bg-white p-4 rounded-xl shadow-lg z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-500 text-sm font-medium">
                        5k
                      </span>
                    </div>
                    <p className="text-sm text-gray-700">Assisted Student</p>
                  </div>
                </div>

                <div className="absolute bottom-40 -right-4 md:-right-10 bg-white p-4 rounded-xl shadow-lg z-20">
                  <div className="flex flex-col gap-2">
                    <p className="text-green-500 text-sm font-medium">
                      Congratulations
                    </p>
                    <p className="text-xs text-gray-600">
                      Your admission completed
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-20 left-0 bg-white p-4 rounded-xl shadow-lg z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-500 text-xl">👩‍💻</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        Meeting Online Class
                      </p>
                      <p className="text-xs text-gray-500">Today at 20.00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            viewBox="0 0 1440 120"
            className="relative block w-full h-[60px]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C576,33.6 768,86.4 1440,0 L1440,120 L0,120 Z"
              fill="#fff"
              className="transition duration-300 ease-in-out"
            />
          </svg>
        </div>
      </div>

      <MaxWidthWrapper className="mb-12">
        <div className="w-full h-fit gap-y-4 flex flex-col items-center">
          <div className="flex w-full items-center flex-col gap-y-2 mx-auto my-8 px-4">
            <h2 className="text-4xl font-bold text-center">Our Success</h2>
            <p className="text-gray-600 text-center max-w-2xl">
              Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
              sollicitudin at nec nam et pharetra gravida. Adipiscing a quis
              ultrices eu ornare tristique vel nisl orci.
            </p>
          </div>

          <div className="w-full h-fit flex flex-wrap items-center justify-center gap-8 px-4">
            <div className="w-[200px]">
              <p className="text-5xl md:text-7xl text-[#f46506] text-center">
                5K+
              </p>
              <p className="text-gray-800 text-center font-semibold">
                Students
              </p>
            </div>
            <div className="w-[200px]">
              <p className="text-5xl md:text-7xl text-[#f46506] text-center">
                75%
              </p>
              <p className="text-gray-800 text-center font-semibold">
                Total success
              </p>
            </div>
            <div className="w-[200px]">
              <p className="text-5xl md:text-7xl text-[#f46506] text-center">
                26
              </p>
              <p className="text-gray-800 text-center font-semibold">
                Chief experts
              </p>
            </div>
            <div className="w-[200px]">
              <p className="text-5xl md:text-7xl text-[#f46506] text-center">
                16
              </p>
              <p className="text-gray-800 text-center font-semibold">
                Years of experience
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="mb-12">
        <div className="w-full h-fit gap-y-4 flex flex-col items-center">
          <div className="flex w-full items-center flex-col gap-y-2 mx-auto my-8 px-4">
            <h2 className="text-4xl font-bold text-[#f46506] text-center">
              <span className="text-[#2F327D]">All-In-One</span> from primary to
              high school.
            </h2>
            <p className="text-gray-600 text-center max-w-2xl">
              Our school is one powerful online software suite that combines all
              the tools needed to run a successful school or office.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            <div className="w-full relative h-[400px] bg-white border shadow flex flex-col items-center justify-center gap-y-8 p-6">
              <div className="w-[70px] h-[70px] bg-[#2F327D] rounded-full absolute -top-7"></div>
              <p className="text-2xl md:text-3xl font-bold text-[#2F327D] text-center mt-4">
                Online Billing, Invoicing, & Contracts
              </p>
              <p className="text-gray-800 text-center font-semibold">
                Simple and secure control of your organization&apos;s financial
                and legal transactions. Send customized invoices and contracts
              </p>
            </div>
            <div className="w-full relative h-[400px] bg-white border shadow flex flex-col items-center justify-center gap-y-8 p-6">
              <div className="w-[70px] h-[70px] bg-[#f46506] rounded-full absolute -top-7"></div>
              <p className="text-2xl md:text-3xl font-bold text-[#2F327D] text-center mt-4">
                Easy Scheduling & Attendance Tracking
              </p>
              <p className="text-gray-800 text-center font-semibold">
                Schedule and reserve classrooms at one campus or multiple
                campuses. Keep detailed records of student attendance
              </p>
            </div>
            <div className="w-full relative h-[400px] bg-white border shadow flex flex-col items-center justify-center gap-y-8 p-6">
              <div className="w-[70px] h-[70px] bg-[#29B9E7] rounded-full absolute -top-7"></div>
              <p className="text-2xl md:text-3xl font-bold text-[#2F327D] text-center mt-4">
                Support Classes
              </p>
              <p className="text-gray-800 text-center font-semibold">
                Automate and track emails to individuals or groups.
                Skilline&apos;s built-in system helps organize your organization
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <CourseGrid />
      </MaxWidthWrapper>

      <TestimonialSection />

      <MaxWidthWrapper>
        <div className="w-full max-w-6xl mx-auto p-6 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl text-[#2F327D]  md:text-3xl font-semibold">
              Everything you can do in a physical
              <span className="block">
                classroom,{" "}
                <span className="text-[#f46506]">you can do with us</span>
              </span>
            </h2>

            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>

            <button className="text-[#f46506] font-medium hover:text-[#e07e05] transition-colors">
              Learn more
            </button>
          </div>

          <div className="w-full md:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden border-8 border-white shadow-xl">
              <img
                src="/classroom.png"
                alt="Students in classroom"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[#23BDEE] border-b-8 border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#23BDEE] z-[-5]  rounded-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#f46506] z-[-5]  rounded-2xl"></div>
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <FAQSection />
      </MaxWidthWrapper>

      <Footer />
    </>
  );
}
