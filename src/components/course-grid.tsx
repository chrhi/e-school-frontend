"use client";

import React, { useState } from "react";
import { CourseCard } from "./course-card";
import { ChevronRight, GraduationCap } from "lucide-react";

interface CategoryFilter {
  id: string;
  name: string;
  count: number;
}

const categories: CategoryFilter[] = [
  { id: "math", name: "Mathematics", count: 12 },
  { id: "science", name: "Science", count: 15 },
  { id: "languages", name: "Languages", count: 8 },
  { id: "exam-prep", name: "Exam Prep", count: 10 },
];

const CourseGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const courses = [
    {
      title: "Baccalauréat Mathematics Preparation",
      description:
        "Comprehensive preparation for BAC mathematics exam, covering algebra, calculus, and geometry with practice tests",
      duration: "4 Months",
      price: 12000,
      oldPrice: 15000,
      category: "Mathematics",
      instructor: {
        name: "Dr. Ahmed Benali",
        avatar: "/girl.png",
        title: "Mathematics Professor",
      },
      thumbnail: "/sky.png",
      rating: 4.8,
      studentsCount: 456,
      isBestSeller: true,
      isNew: false,
    },
    {
      title: "Physics & Chemistry Excellence",
      description:
        "Master key concepts in physics and chemistry through practical experiments and problem-solving techniques",
      duration: "3 Months",
      price: 11000,
      category: "Science",
      instructor: {
        name: "Prof. Amina Kadi",
        avatar: "/girl.png",
        title: "Science Specialist",
      },
      thumbnail: "/sky.png",
      rating: 4.7,
      studentsCount: 328,
      isBestSeller: false,
      isNew: true,
    },
    {
      title: "Advanced French Literature",
      description:
        "Enhance your French language skills through literature analysis and writing techniques for BAC preparation",
      duration: "3 Months",
      price: 9000,
      oldPrice: 11000,
      category: "Languages",
      instructor: {
        name: "Mme. Sarah Lefebvre",
        avatar: "/girl.png",
        title: "French Language Expert",
      },
      thumbnail: "/sky.png",
      rating: 4.9,
      studentsCount: 275,
      isBestSeller: true,
      isNew: false,
    },
    {
      title: "BAC History & Geography",
      description:
        "Comprehensive coverage of Algerian and World History with geographic analysis and map skills",
      duration: "3 Months",
      price: 8500,
      category: "Social Studies",
      instructor: {
        name: "Prof. Karim Mansouri",
        avatar: "/girl.png",
        title: "History Specialist",
      },
      thumbnail: "/sky.png",
      rating: 4.6,
      studentsCount: 198,
      isBestSeller: false,
      isNew: true,
    },
    {
      title: "English Language Mastery",
      description:
        "Build strong English communication skills with focus on grammar, vocabulary, and conversation practice",
      duration: "2 Months",
      price: 7500,
      category: "Languages",
      instructor: {
        name: "Ms. Linda Thompson",
        avatar: "/girl.png",
        title: "English Language Expert",
      },
      thumbnail: "/sky.png",
      rating: 4.7,
      studentsCount: 234,
      isBestSeller: false,
      isNew: false,
    },
    {
      title: "Computer Science Fundamentals",
      description:
        "Learn programming basics, algorithms, and problem-solving skills for technology stream students",
      duration: "3 Months",
      price: 10000,
      oldPrice: 12000,
      category: "Technology",
      instructor: {
        name: "Eng. Younes Meziane",
        avatar: "/girl.png",
        title: "Computer Science Teacher",
      },
      thumbnail: "/sky.png",
      rating: 4.8,
      studentsCount: 312,
      isBestSeller: true,
      isNew: false,
    },
  ];

  const filteredCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter(
          (course) =>
            course.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              High School Excellence Center
            </h1>
            <p className="text-gray-600 mt-2">
              Expert-led courses to help you excel in your BAC examination
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 flex items-center gap-2">
              <GraduationCap size={20} />
              {courses.length} Courses Available
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${
                selectedCategory === "all"
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
          >
            All Courses
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  selectedCategory === category.id
                    ? "bg-orange-500 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
            >
              {category.name}
              <span className="ml-2 text-xs">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors font-medium">
            Explore All Courses
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseGrid;
