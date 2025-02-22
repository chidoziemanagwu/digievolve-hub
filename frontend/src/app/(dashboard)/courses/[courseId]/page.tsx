// /src/app/(dashboard)/courses/[courseId]/page.tsx
'use client';

import { useParams } from 'next/navigation'
import DashboardLayout from '@/components/layout/DashboardLayout'
import CourseDetail from '@/components/courses/CourseDetail'

export default function CourseDetailPage() {
  const params = useParams()
  const courseId = params.courseId

  if (!courseId) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-600">Course not found</p>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <CourseDetail courseId={courseId} />
    </DashboardLayout>
  )
}