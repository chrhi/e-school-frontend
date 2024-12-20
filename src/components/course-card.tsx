import React from "react";
import Image from "next/image";
import { Clock } from "lucide-react";

interface InstructorType {
  name: string;
  avatar: string;
}

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  price: number;
  oldPrice?: number;
  category: string;
  instructor: InstructorType;
  thumbnail: string;
}

export const CourseCard = ({
  title,
  description,
  duration,
  price,
  oldPrice,
  category,
  instructor,
  thumbnail,
}: CourseCardProps) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md bg-white">
      <div className="relative h-48 w-full">
        <Image
          src={thumbnail || "/api/placeholder/400/320"}
          alt={title}
          className="rounded-t-lg object-cover"
          fill
        />
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-gray-500">
            <Clock size={16} />
          </span>
          <span className="text-sm text-gray-500">{duration}</span>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full ml-2">
            {category}
          </span>
        </div>

        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 relative rounded-full overflow-hidden">
              <Image
                src={instructor.avatar || "/api/placeholder/32/32"}
                alt={instructor.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm text-gray-700">{instructor.name}</span>
          </div>

          <div className="flex items-center gap-2">
            {oldPrice && (
              <span className="text-gray-400 line-through text-sm">
                ${oldPrice.toLocaleString()}
              </span>
            )}
            <span className="text-orange-500 font-semibold">
              ${price.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
