import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

interface TestimonialProps {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  testimonial: string;
}

const testimonials: TestimonialProps[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "UX Designer",
    company: "Design Co",
    avatar: "/girl.png",
    rating: 5,
    testimonial:
      "The courses here transformed my career. The instructors are world-class, and the content is incredibly well-structured. I went from beginner to professional in just 6 months!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Engineer",
    company: "Tech Solutions",
    avatar: "/girl.png",
    rating: 5,
    testimonial:
      "The practical approach to teaching complex concepts makes learning here unique. The community support is amazing, and the projects helped build my portfolio.",
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Product Manager",
    company: "Innovation Labs",
    avatar: "/girl.png",
    rating: 5,
    testimonial:
      "What sets this platform apart is the quality of instruction and the real-world applications. Every course I've taken has directly impacted my work performance.",
  },
];

const TestimonialCard = ({
  name,
  role,
  company,
  avatar,
  rating,
  testimonial,
}: TestimonialProps) => (
  <div className="bg-white rounded-xl shadow-lg p-8 relative">
    <div className="absolute top-6 right-8 text-orange-500">
      <Quote size={40} className="opacity-20" />
    </div>

    <div className="flex items-center gap-4 mb-6">
      <div className="relative w-16 h-16">
        <Image
          src={avatar}
          alt={name}
          fill
          className="rounded-full object-cover"
        />
      </div>
      <div>
        <h4 className="font-semibold text-lg">{name}</h4>
        <p className="text-gray-600 text-sm">{role}</p>
        <p className="text-gray-500 text-sm">{company}</p>
      </div>
    </div>

    <div className="flex gap-1 mb-4">
      {[...Array(rating)].map((_, index) => (
        <Star
          key={index}
          size={20}
          className="fill-orange-500 text-orange-500"
        />
      ))}
    </div>

    <p className="text-gray-700 leading-relaxed">{testimonial}</p>
  </div>
);

const TestimonialSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Students Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our platform has helped thousands of students achieve
            their learning goals and advance their careers.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
            Join Our Academy
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
