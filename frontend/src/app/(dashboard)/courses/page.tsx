'use client';
import { useState, useEffect } from 'react';
import CourseCard from '@/components/courses/CourseCard';

// Mock data - replace with actual API call
const mockCourses = [
  {
    id: '1',
    title: 'Introduction to Web Development',
    description: 'Learn the basics of HTML, CSS, and JavaScript.',
    image: '/images/courses/web-dev.jpg',
    progress: 75,
    instructor: 'John Doe',
    duration: '8 weeks'
  },
  {
    id: '2',
    title: 'Advanced React Patterns',
    description: 'Master advanced React concepts and patterns.',
    image: '/images/courses/react.jpg',
    progress: 30,
    instructor: 'Jane Smith',
    duration: '6 weeks'
  },
  {
    id: '3',
    title: 'Full Stack Development',
    description: 'Build complete web applications from scratch.',
    image: '/images/courses/fullstack.jpg',
    progress: 0,
    instructor: 'Mike Johnson',
    duration: '12 weeks'
  }
];

export default function CoursesPage() {
  const [courses, setCourses] = useState(mockCourses);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchCourses = async () => {
      try {
        // Replace with actual API call
        // const response = await fetch('/api/courses');
        // const data = await response.json();
        // setCourses(data);
        setTimeout(() => {
          setCourses(mockCourses);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">
            My Courses
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-white rounded-lg shadow-md h-96 animate-pulse">
                <div className="h-48 bg-gray-300 rounded-t-lg"></div>
                <div className="p-4 space-y-4">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          My Courses
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}