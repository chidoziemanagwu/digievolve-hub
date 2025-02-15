'use client';
import Image from 'next/image';
import Link from 'next/link';

interface CourseCardProps {
  course: {
    id: string;
    title: string;
    description: string;
    image: string;
    progress?: number;
    instructor: string;
    duration: string;
  };
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {course.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {course.description}
        </p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-500">
            Instructor: {course.instructor}
          </span>
          <span className="text-sm text-gray-500">
            {course.duration}
          </span>
        </div>
        {course.progress !== undefined && (
          <div className="mb-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-500 mt-1">
              {course.progress}% Complete
            </span>
          </div>
        )}
        <Link
          href={`/courses/${course.id}`}
          className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
        >
          View Course
        </Link>
      </div>
    </div>
  );
}