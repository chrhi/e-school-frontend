"use client";

import { useState, useMemo } from "react";
import MaxWidthWrapper from "@/components/max-with-wrapper";
import { Search, Clock, Users, Filter } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";

// Types and Interfaces
interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: CourseLevel;
  category: CourseCategory;
  students: number;
  instructor: string;
  image: string;
}

type CourseLevel = "Beginner" | "Intermediate" | "Advanced";
type CourseCategory =
  | "Computer Science"
  | "Mathematics"
  | "Physics"
  | "Chemistry"
  | "Biology"
  | "Languages";
type CourseDuration = "4 weeks" | "8 weeks" | "12 weeks" | "16 weeks";

interface FilterSectionProps {
  title: string;
  items: string[];
  selectedItems: string[];
  onChange: (items: string[]) => void;
}

// Sample course data
const COURSES_DATA: Course[] = [
  {
    id: 1,
    title: "Introduction to Computer Science",
    description: "Learn the fundamentals of computer science and programming",
    duration: "12 weeks",
    level: "Beginner",
    category: "Computer Science",
    students: 234,
    instructor: "Dr. Jane Smith",
    image: "/laptop.png",
  },
  {
    id: 2,
    title: "Advanced Mathematics",
    description: "Deep dive into calculus, algebra, and mathematical reasoning",
    duration: "16 weeks",
    level: "Advanced",
    category: "Mathematics",
    students: 156,
    instructor: "Prof. John Davis",
    image: "/laptop.png",
  },
];

const CATEGORIES: CourseCategory[] = [
  "Computer Science",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "Languages",
];
const LEVELS: CourseLevel[] = ["Beginner", "Intermediate", "Advanced"];
const DURATIONS: CourseDuration[] = [
  "4 weeks",
  "8 weeks",
  "12 weeks",
  "16 weeks",
];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<
    CourseCategory[]
  >([]);
  const [selectedLevels, setSelectedLevels] = useState<CourseLevel[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<CourseDuration[]>(
    []
  );

  // Filter courses based on search and filters
  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(course.category);

      const matchesLevel =
        selectedLevels.length === 0 || selectedLevels.includes(course.level);

      const matchesDuration =
        selectedDurations.length === 0 ||
        selectedDurations.includes(course.duration as CourseDuration);

      return (
        matchesSearch && matchesCategory && matchesLevel && matchesDuration
      );
    });
  }, [searchQuery, selectedCategories, selectedLevels, selectedDurations]);

  const FilterSection: React.FC<FilterSectionProps> = ({
    title,
    items,
    selectedItems,
    onChange,
  }) => (
    <div className="space-y-3">
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item} className="flex items-center space-x-2">
            <Checkbox
              id={item}
              checked={selectedItems.includes(item)}
              onCheckedChange={(checked: boolean) => {
                if (checked) {
                  onChange([...selectedItems, item]);
                } else {
                  onChange(selectedItems.filter((i) => i !== item));
                }
              }}
            />
            <label
              htmlFor={item}
              className="text-sm text-gray-600 cursor-pointer"
            >
              {item}
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  const Filters: React.FC = () => (
    <div className="space-y-6">
      <FilterSection
        title="Categories"
        items={CATEGORIES}
        selectedItems={selectedCategories}
        onChange={(items) => setSelectedCategories(items as CourseCategory[])}
      />
      <Separator />
      <FilterSection
        title="Level"
        items={LEVELS}
        selectedItems={selectedLevels}
        onChange={(items) => setSelectedLevels(items as CourseLevel[])}
      />
      <Separator />
      <FilterSection
        title="Duration"
        items={DURATIONS}
        selectedItems={selectedDurations}
        onChange={(items) => setSelectedDurations(items as CourseDuration[])}
      />
    </div>
  );

  return (
    <MaxWidthWrapper className="my-12">
      <div className="py-16">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Our Courses</h1>
          <p className="text-gray-600">
            Explore our wide range of courses and start your learning journey
            today
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 h-4 w-4" />
            <Input
              placeholder="Search courses..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="sm:w-auto w-full h-14">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <ScrollArea className="h-[calc(100vh-4rem)] pr-4">
                <Filters />
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 space-y-6">
              <Filters />
            </div>
          </aside>

          {/* Course Grid */}
          <main className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="group bg-white rounded-lg overflow-hidden border hover:border-[#f46506] transition-all duration-300"
                >
                  <div className="relative h-48">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{course.level}</Badge>
                      <Badge variant="secondary">{course.category}</Badge>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 group-hover:text-[#f46506] transition-colors duration-300">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {course.description}
                    </p>
                    <div className="pt-4 flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {course.students} students
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
