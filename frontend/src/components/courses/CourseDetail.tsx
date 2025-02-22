// /src/components/courses/CourseDetail.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface CourseDetailProps {
  courseId: string | string[];
}

const CourseDetail: React.FC<CourseDetailProps> = ({ courseId }) => {
  const [course] = useState({
    id: courseId,
    title: "Introduction to Web Development",
    description: "Learn the fundamentals of web development including HTML, CSS, and JavaScript.",
    instructor: {
      name: "John Doe",
      avatar: "https://placehold.co/100x100",
      title: "Senior Web Developer"
    },
    progress: 65,
    duration: "8 weeks",
    lessons: [
      { id: 1, title: "HTML Basics", duration: "45 min", completed: true },
      { id: 2, title: "CSS Fundamentals", duration: "1 hour", completed: true },
      { id: 3, title: "JavaScript Introduction", duration: "1.5 hours", completed: false }
    ]
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Course Header */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="flex items-center space-x-4">
              <img
                src={course.instructor.avatar}
                alt={course.instructor.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium">{course.instructor.name}</p>
                <p className="text-sm text-gray-500">{course.instructor.title}</p>
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-lg font-semibold mb-2">Course Progress</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <p className="text-center text-sm text-gray-600">{course.progress}% Complete</p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Lessons List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Course Content</h2>
            <div className="space-y-4">
              {course.lessons.map(lesson => (
                <div
                  key={lesson.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <span className={`${lesson.completed ? 'text-green-500' : 'text-gray-400'}`}>
                      {lesson.completed ? '✓' : '○'}
                    </span>
                    <span className="font-medium">{lesson.title}</span>
                  </div>
                  <span className="text-sm text-gray-500">{lesson.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Course Info Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Course Information</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Duration:</span>
                <span className="font-medium">{course.duration}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Lessons:</span>
                <span className="font-medium">{course.lessons.length}</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
                Continue Learning
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;