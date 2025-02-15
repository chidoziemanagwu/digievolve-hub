import { useParams } from 'next/navigation'
import DashboardLayout from '@/components/layout/DashboardLayout'
// Import the CourseDetail component we just created
import CourseDetail from '@/components/courses/CourseDetail'

export default function CourseDetailPage() {
  const params = useParams()
  const courseId = params.courseId

  return (
    <DashboardLayout>
      <CourseDetail courseId={courseId} />
    </DashboardLayout>
  )
}