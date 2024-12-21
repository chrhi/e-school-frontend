"use client";

import { motion } from "framer-motion";
import MaxWidthWrapper from "@/components/max-with-wrapper";
import {
  Users,
  Book,
  Trophy,
  Target,
  CheckCircle,
  ArrowRight,
  GraduationCap,
  Sparkles,
} from "lucide-react";

import Footer from "@/components/layout/footer";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutUs() {
  const stats = [
    { label: "Students", value: "5,000+", icon: Users },
    { label: "Courses", value: "100+", icon: Book },
    { label: "Awards", value: "50+", icon: Trophy },
    { label: "Years Experience", value: "25+", icon: Target },
  ];

  const values = [
    {
      title: "Academic Excellence",
      description:
        "We maintain high academic standards and foster intellectual growth through innovative teaching methods.",
      icon: GraduationCap,
      color: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      title: "Personal Growth",
      description:
        "We nurture individual talents and help students develop strong character and leadership skills.",
      icon: Sparkles,
      color: "bg-purple-50",
      iconColor: "text-purple-500",
    },
    {
      title: "Global Perspective",
      description:
        "We prepare students to be global citizens with diverse cultural understanding and awareness.",
      icon: Target,
      color: "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      title: "Innovation",
      description:
        "We embrace technological advancement and modern teaching approaches to enhance learning.",
      icon: CheckCircle,
      color: "bg-orange-50",
      iconColor: "text-orange-500",
    },
  ];

  return (
    <>
      <div className="w-full mb-20 mt-[70px] bg-white">
        <div className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-[#FFF3E4] via-white to-[#F5F7FF] overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute w-96 h-96 -top-48 -left-48 bg-[#f46506] rounded-full blur-3xl" />
            <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-[#2F327D] rounded-full blur-3xl" />
          </div>
          <MaxWidthWrapper className="relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
              }}
              className="text-center"
            >
              <motion.div
                variants={fadeIn}
                className="inline-block mb-6 px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full"
              >
                <span className="text-[#f46506] font-semibold">
                  Established 1998
                </span>
              </motion.div>
              <motion.h1
                variants={fadeIn}
                className="text-5xl md:text-7xl font-bold text-[#2F327D] mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2F327D] to-[#f46506]"
              >
                About Our School
              </motion.h1>
              <motion.p
                variants={fadeIn}
                className="text-gray-600 max-w-2xl mx-auto text-xl leading-relaxed"
              >
                Empowering minds and shaping futures through innovative
                education and personalized learning experiences.
              </motion.p>
            </motion.div>
          </MaxWidthWrapper>
        </div>

        <MaxWidthWrapper className="mb-20">
          <div className="py-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-[#FFF3E4] rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-8 h-8 text-[#f46506]" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#2F327D] mb-2 group-hover:text-[#f46506] transition-colors">
                      {stat.value}
                    </h3>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="py-20">
            <div className="grid md:grid-cols-2 gap-12">
              {["Mission", "Vision"].map((type, index) => (
                <motion.div
                  key={type}
                  initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f46506] to-[#2F327D] rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-[#FFF3E4] rounded-xl">
                        {index === 0 ? (
                          <Book className="w-6 h-6 text-[#f46506]" />
                        ) : (
                          <Target className="w-6 h-6 text-[#f46506]" />
                        )}
                      </div>
                      <h2 className="text-3xl font-bold text-[#2F327D]">
                        Our {type}
                      </h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {type === "Mission"
                        ? "To provide exceptional education that inspires creativity, fosters critical thinking, and empowers students to become lifelong learners and responsible global citizens."
                        : "To be recognized globally as a leading educational institution that sets the standard for academic excellence, innovation, and student success."}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="py-20">
            <h2 className="text-4xl font-bold text-center text-[#2F327D] mb-16">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`${value.color} p-6 rounded-2xl hover:scale-105 transition-all duration-300`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <value.icon className={`w-8 h-8 ${value.iconColor}`} />
                    <h3 className="text-xl font-semibold text-[#2F327D]">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="py-20">
            <h2 className="text-4xl font-bold text-center text-[#2F327D] mb-16">
              Our Leadership Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Jane Smith",
                  role: "Principal",
                  specialty: "Educational Leadership",
                },
                {
                  name: "Prof. John Davis",
                  role: "Academic Director",
                  specialty: "Curriculum Development",
                },
                {
                  name: "Dr. Sarah Wilson",
                  role: "Student Affairs",
                  specialty: "Student Development",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2F327D] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity" />
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center">
                    <div className="w-32 h-32 mx-auto mb-6 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#f46506] to-[#2F327D] rounded-full opacity-20" />
                      <img
                        src={`/girl.png`}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full relative z-10"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-[#2F327D] mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#f46506] font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Specialist in {member.specialty}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-20 text-center relative "
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFF3E4] to-[#F5F7FF] rounded-3xl" />
            <div className="relative z-10 px-8 py-16">
              <h2 className="text-4xl font-bold text-[#2F327D] mb-6">
                Begin Your Journey With Us
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
                Join our vibrant learning community and discover the endless
                possibilities that await you at our school.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#f46506] font-semibold rounded-full text-white hover:bg-[#e07e05] transition-all duration-300 flex items-center gap-2 mx-auto"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </MaxWidthWrapper>
      </div>
      <Footer />
    </>
  );
}
